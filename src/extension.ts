import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // Only load the required modules when extension is activated
  const fs = require("fs").promises;
  const { getPath } = require("windows-shortcuts-ps");

  context.subscriptions.push(
    vscode.commands.registerCommand("open-lnk.open", async () => {
      try {
        const currentlyOpenTabfilePath =
          vscode.window.activeTextEditor?.document.fileName;

        if (!currentlyOpenTabfilePath) {
          throw new Error("Active text editor does not have any file open");
        }

        // Resolve the current lnk file path
        const resolvedPath = await fs.realpath(currentlyOpenTabfilePath);
        // Get file path of the linked file from .lnk file
        const filePath = await getPath(resolvedPath);
        // Create URI from file path
        const uri = vscode.Uri.file(filePath);
        // Open file at URI
        vscode.commands.executeCommand("vscode.open", uri);
      } catch (error) {
        vscode.window.showErrorMessage(`Cannot open file:\n${error.message}`);
      }
    })
  );
}

export function deactivate() {}
