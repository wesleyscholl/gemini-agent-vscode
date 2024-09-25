import * as vscode from 'vscode';
import { getJiraTicket } from './utils/jira';
import { cloneRepo, checkoutBranch, pushBranch, createPullRequest } from './utils/git';
import { sendToAiAgent } from './utils/api';

export function activateCommands(context: vscode.ExtensionContext) {
  // Register commands
  context.subscriptions.push(vscode.commands.registerCommand('your-extension-name.jiraTicket', async () => {
    const ticket = await getJiraTicket();
    if (ticket) {
      // Display the ticket information
      // ...
    }
  }));

  context.subscriptions.push(vscode.commands.registerCommand('your-extension-name.startWork', async () => {
    const ticket = await getJiraTicket();
    if (ticket) {
      await cloneRepo(ticket.repoUrl);
      await checkoutBranch(ticket.id);
      // ...
    }
  }));

  // Add other commands for code modification, etc.
}