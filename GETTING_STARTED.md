# Getting Started with GitHub Copilot CLI Skills

## Introduction

This is an interactive learning exercise to help you create applications using the GitHub Copilot CLI. The exercises are self-paced and designed to teach you practical skills.

## Prerequisites

- GitHub Copilot CLI installed
- Node.js 16+ (for most exercises)
- Basic command-line knowledge
- Code editor (VS Code recommended)

## Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/kevinnexzen-sys/skills-create-applications-with-the-copilot-cli.git
   cd skills-create-applications-with-the-copilot-cli
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Review the exercises**
   - Start with Issue #1: Exercise basics
   - Then tackle feature requests: CALCULATOR, CLI, AGEN

## Exercise Structure

```
├── FEATURES.md              # Feature roadmap
├── GETTING_STARTED.md       # This file
├── README.md                # Main documentation
└── src/                     # Your implementation files
    ├── calculator.js        # CALCULATOR feature
    ├── cli.js              # CLI feature
    └── agent.js            # AGEN feature
```

## Learning Path

### Phase 1: Foundation (Issue #1)
- Learn Copilot CLI basics
- Understand skill structure
- Create first application

### Phase 2: CALCULATOR Feature
- Build a simple calculator
- Implement command handling
- Add error handling

### Phase 3: CLI Feature
- Create CLI utilities
- Parse arguments
- Build help system

### Phase 4: AGEN Feature
- Design agent architecture
- Implement task orchestration
- Add decision logic

## Using Copilot CLI

### Basic Commands

```bash
# Create a new skill
copilot skill create <skill-name>

# Get help
copilot skill --help

# Run a skill
copilot skill run <skill-name>

# Test
npm test
```

### Tips

1. **Use natural language prompts** - Describe what you want Copilot to help you build
2. **Review generated code** - Always check what Copilot generates
3. **Iterate gradually** - Build features incrementally
4. **Test thoroughly** - Write tests as you go

## Exercises

### 1. CALCULATOR ✅
Create a mathematical calculator application.

**Starter Command**:
```bash
copilot skill create calculator --description "A simple calculator with basic operations"
```

### 2. CLI ✅
Build a command-line interface framework.

**Starter Command**:
```bash
copilot skill create cli-tool --description "A CLI framework with command handling"
```

### 3. AGEN ✅
Develop an agent framework for task automation.

**Starter Command**:
```bash
copilot skill create agent-framework --description "An AI agent for task orchestration"
```

## Testing Your Code

```bash
# Run all tests
npm test

# Run specific test
npm test -- calculator.test.js

# Run with coverage
npm test -- --coverage
```

## Submitting Your Work

1. Create a new branch for your feature
2. Implement the feature according to the acceptance criteria
3. Write tests and documentation
4. Submit a pull request
5. Address code review feedback

## Troubleshooting

### Issue: Copilot CLI not found
```bash
# Reinstall GitHub CLI with Copilot
brew install github/gh/gh
gh copilot alias install
```

### Issue: Node modules not installed
```bash
npm install
```

### Issue: Tests failing
```bash
npm test -- --verbose
```

## Resources

- 📚 [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- 🎓 [GitHub Skills](https://skills.github.com)
- 💬 [GitHub Discussions](https://github.com/kevinnexzen-sys/skills-create-applications-with-the-copilot-cli/discussions)
- 🐛 [Report Issues](https://github.com/kevinnexzen-sys/skills-create-applications-with-the-copilot-cli/issues)

## Next Steps

1. Complete Issue #1 exercise
2. Choose a feature (CALCULATOR, CLI, or AGEN)
3. Use Copilot CLI to build the feature
4. Submit PR with your implementation
5. Get feedback and iterate

---

**Happy Learning!** 🚀

Need help? Check the GitHub Discussions or open an issue.
