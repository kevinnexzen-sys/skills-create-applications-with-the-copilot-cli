#!/usr/bin/env node

/**
 * Calculator Application
 * Performs basic arithmetic operations
 */

import readline from 'readline';

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  },
  
  parse: (expression) => {
    const match = expression.match(/^(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)$/);
    if (!match) throw new Error('Invalid format. Use: number operator number');
    
    const [, num1, op, num2] = match;
    return {
      num1: parseFloat(num1),
      operator: op,
      num2: parseFloat(num2)
    };
  },
  
  execute: (expression) => {
    const { num1, operator, num2 } = Calculator.parse(expression);
    
    switch (operator) {
      case '+':
        return Calculator.add(num1, num2);
      case '-':
        return Calculator.subtract(num1, num2);
      case '*':
        return Calculator.multiply(num1, num2);
      case '/':
        return Calculator.divide(num1, num2);
      default:
        throw new Error(`Unknown operator: ${operator}`);
    }
  }
};

function startCalculator() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log('\n📐 Calculator Started');
  console.log('Format: number operator number');
  console.log('Operators: + - * /');
  console.log('Type "exit" to quit\n');
  
  const promptCalculator = () => {
    rl.question('Calculator> ', (input) => {
      if (input.toLowerCase() === 'exit') {
        console.log('\nGoodbye! 👋\n');
        rl.close();
        return;
      }
      
      try {
        const result = Calculator.execute(input);
        console.log(`✅ Result: ${result}\n`);
      } catch (error) {
        console.log(`❌ Error: ${error.message}\n`);
      }
      
      promptCalculator();
    });
  };
  
  promptCalculator();
}

export default Calculator;

if (import.meta.url === `file://${process.argv[1]}`) {
  startCalculator();
}