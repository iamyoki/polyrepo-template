# Polyrepo Template

A best-practice polyrepo template for managing single package and application in a repository. This template is designed to streamline development workflows, enforce consistent coding standards.

> Polyrepo simply means a repository only contains one project.

## Features

- **TypeScript Support**: Fully configured for TypeScript development.
- **Commitlint**: Enforces conventional commit messages.
- **Husky**: Pre-commit and commit-msg hooks for linting and formatting.
- **ESLint and Prettier**: Configured for consistent code quality and formatting.
- **Testing**: Node.js native testing with `node:test`.
- **Nx Integration**: Supports advanced workspace management.
- **Custom Commit Workflow**: Interactive CLI for generating commits with emojis.

## Project Structure

```plaintext
.
├── src
│   ├── app
│   │   ├── main.ts (Your app entry point)
│   │   └── ...
│   └── lib
│       ├── index.ts (Your npm package entry point)
│       └── ...
└── test
```

## Prerequisites

- **Node.js**: Version 24 or higher.
- **pnpm**: Install via corepack `corepack enable`.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iamyoki/polyrepo-template.git
   cd polyrepo-template
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Development

Start the development server:

```bash
pnpm dev
```

### Build

Build the project:

```bash
pnpm build
```

### Testing

Run tests:

```bash
pnpm test
```

Run tests with coverage:

```bash
pnpm test:cov
```

### Commit Workflow

Use the custom commit script to generate conventional commits with emojis:

```bash
pnpm commit
```

## Scripts

- `pnpm dev`: Start the development server.
- `pnpm build`: Build the project.
- `pnpm test`: Run tests.
- `pnpm test:cov`: Run tests with coverage.
- `pnpm commit`: Interactive CLI for generating commits.
- `pnpm lint`: Run ESLint.
- `pnpm format`: Format code with Prettier.

## Configuration

### TypeScript

The project uses a strict TypeScript configuration. See [`tsconfig.json`](tsconfig.json) for details.

### ESLint and Prettier

Code quality and formatting are enforced using ESLint and Prettier. Configuration files:

- `eslint.config.js`
- `.prettierrc.json`

### Husky

Git hooks are managed with Husky. Hooks are defined in the `.husky/` directory.

### Nx

Nx is used for workspace management. See [`nx.json`](nx.json) for configuration.

## License

This project is licensed under the ISC License.
