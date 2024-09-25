import * as vscode from 'vscode';
import { activateCommands } from './commands';

export function activate(context: vscode.ExtensionContext) {
  // Register commands and other extension logic
  activateCommands(context);

  // Example: Register a simple command
  const disposable = vscode.commands.registerCommand('your-extension-name.helloWorld', () => {
    vscode.window.showInformationMessage('Hello from your-extension-name!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {
  // Cleanup logic
}