#!/usr/bin/env node

/**
 * Agent Framework
 * Task management and orchestration agent
 */

import readline from 'readline';

class Agent {
  constructor(name = 'Copilot Agent', description = 'AI-powered task assistant') {
    this.name = name;
    this.description = description;
    this.tasks = [];
    this.taskIdCounter = 1;
    this.state = 'idle';
  }
  
  addTask(description) {
    const task = {
      id: this.taskIdCounter++,
      description,
      status: 'pending',
      createdAt: new Date(),
      completedAt: null
    };
    
    this.tasks.push(task);
    return task;
  }
  
  completeTask(taskId) {
    const task = this.tasks.find(t => t.id === parseInt(taskId));
    
    if (!task) {
      return `❌ Task ${taskId} not found`;
    }
    
    task.status = 'completed';
    task.completedAt = new Date();
    return `✅ Task ${taskId} completed: "${task.description}"`;
  }
  
  listTasks() {
    if (this.tasks.length === 0) {
      return '📭 No tasks yet. Add one with: add <task>';
    }
    
    let list = '\n📋 Tasks:\n';
    this.tasks.forEach(task => {
      const status = task.status === 'completed' ? '✅' : '⏳';
      list += `  ${status} [${task.id}] ${task.description}\n`;
    });
    
    return list;
  }
  
  getStatus() {
    const total = this.tasks.length;
    const completed = this.tasks.filter(t => t.status === 'completed').length;
    const pending = total - completed;
    
    return `\n📊 Agent Status:\n  Total: ${total}\n  Completed: ${completed}\n  Pending: ${pending}\n  Progress: ${total > 0 ? Math.round((completed/total)*100) : 0}%`;
  }
  
  greet() {
    return `👋 Hello! I'm ${this.name}.\n${this.description}\nReady to help with your tasks!`;
  }
}

function startAgent() {
  const agent = new Agent('Copilot Assistant', 'Your personal AI task management agent');
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log(`\n🤖 ${agent.greet()}\n`);
  console.log('Commands: add, list, complete, status, greet, help, exit\n');
  
  const prompt = () => {
    rl.question('Agent> ', (input) => {
      const [command, ...args] = input.trim().split(' ');
      const arg = args.join(' ');
      
      switch (command.toLowerCase()) {
        case 'add':
          if (!arg) {
            console.log('❌ Please provide a task description');
            break;
          }
          const task = agent.addTask(arg);
          console.log(`✅ Task added [${task.id}]: ${task.description}`);
          break;
          
        case 'list':
          console.log(agent.listTasks());
          break;
          
        case 'complete':
          if (!arg) {
            console.log('❌ Please provide a task ID');
            break;
          }
          console.log(agent.completeTask(arg));
          break;
          
        case 'status':
          console.log(agent.getStatus());
          break;
          
        case 'greet':
          console.log(`\n${agent.greet()}\n`);
          break;
          
        case 'help':
          console.log(`\n📖 Available Commands:
  - add <task>     : Add a new task
  - list           : View all tasks
  - complete <id>  : Mark task as completed
  - status         : Show progress
  - greet          : Agent greeting
  - help           : Show this help
  - exit           : Quit\n`);
          break;
          
        case 'exit':
          console.log('\n👋 Goodbye!\n');
          rl.close();
          return;
          
        default:
          if (command) console.log(`❌ Unknown command: ${command}. Type 'help' for commands.`);
      }
      
      prompt();
    });
  };
  
  prompt();
}

export { Agent };

if (import.meta.url === `file://${process.argv[1]}`) {
  startAgent();
}