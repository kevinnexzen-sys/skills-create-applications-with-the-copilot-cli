#!/usr/bin/env node

/**
 * CLI Tool
 * Command-line interface with multiple commands
 */

const CLITool = {
  commands: {
    greet: (args) => {
      const name = args[0] || 'User';
      return `👋 Hello, ${name}! Welcome to Copilot CLI.`;
    },
    
    list: () => {
      return `\n📋 Available Commands:
      - greet [name]      : Personalized greeting
      - list              : Show all commands
      - info              : Tool information
      - calc <expr>       : Quick calculator
      - help [cmd]        : Get help`;
    },
    
    info: () => {
      return `\n📖 CLI Tool Information:
      Version: 1.0.0
      Purpose: Learn GitHub Copilot CLI Skills
      Author: Kevin Ryan
      License: MIT`;
    },
    
    calc: (args) => {
      try {
        const expression = args.join(' ');
        const match = expression.match(/^(-?\\d+(?:\\.\\d+)?)\\s*([+\\-*/])\\s*(-?\\d+(?:\\.\\d+)?)$/);
        
        if (!match) return '❌ Invalid format. Use: number operator number';
        
        const [, num1, op, num2] = match;
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        
        let result;
        switch (op) {
          case '+':
            result = a + b;
            break;
          case '-':
            result = a - b;
            break;
          case '*':
            result = a * b;
            break;
          case '/':
            if (b === 0) return '❌ Cannot divide by zero';
            result = a / b;
            break;
          default:
            return '❌ Unknown operator';
        }
        
        return `✅ ${a} ${op} ${b} = ${result}`;
      } catch (error) {
        return `❌ Error: ${error.message}`;
      }
    },
    
    help: (args) => {
      if (args.length === 0) {
        return CLITool.commands.list();
      }
      
      const cmd = args[0];
      const help = {
        greet: 'greet [name] - Say hello to someone',
        list: 'list - Show all available commands',
        info: 'info - Display tool information',
        calc: 'calc <expr> - Perform calculation (e.g., calc 5 + 3)',
        help: 'help [cmd] - Show help for a command'
      };
      
      return help[cmd] || `❌ Unknown command: ${cmd}`;
    }
  },
  
  execute: (command, args) => {
    if (!CLITool.commands[command]) {
      return `❌ Unknown command: ${command}\nRun 'help' for available commands.`;
    }
    
    return CLITool.commands[command](args);
  }
};

function runCLI() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('\n🛠️  CLI Tool');
    console.log(CLITool.commands.list());
    console.log('\nUsage: npm run cli <command> [args]\n');
    return;
  }
  
  const command = args[0];
  const commandArgs = args.slice(1);
  
  const result = CLITool.execute(command, commandArgs);
  console.log(`\n${result}\n`);
}

export default CLITool;

if (import.meta.url === `file://${process.argv[1]}`) {
  runCLI();
}