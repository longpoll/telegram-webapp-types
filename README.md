# Telegram Web App TypeScript Typings

TypeScript typings for Telegram Web Apps. These typings provide type information for developing applications that interact with Telegram's Web App. For more information on Telegram Web Apps, please visit the [official documentation](https://core.telegram.org/bots/webapps).

## Installation

You can install these TypeScript typings via npm:

```bash
npm install @longpoll/telegram-webapp-types
```

## Usage

### TypeScript Project

If you are working on a TypeScript project, follow these steps to include the Telegram Web App types in your project:

1. Make sure you have installed the typings using npm.

2. Open your `tsconfig.json` file and update the `compilerOptions` section to include the path to the type definitions. Add `"typeRoots"` with an array containing the following paths:

```diff
{
  "compilerOptions": {
    // ... other options
   "typeRoots": [
+     "./node_modules/@longpoll/telegram-webapp-types"
    ]
  }
}
```

## Documentation

For more detailed information on using these typings, please refer to the [official Telegram Web Apps documentation](https://core.telegram.org/bots/webapps).

## License

This module is licensed under the [Your License Name] License. See the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or encounter any issues, please feel free to [open an issue](https://github.com/longpoll/telegram-webapp-types/issues) on our GitHub repository. We'd be happy to assist you.
