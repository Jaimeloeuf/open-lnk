"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const tslib_1 = require("tslib");
const vscode = require("vscode");
function activate(context) {
    const fs = require("fs").promises;
    const { getPath } = require("windows-shortcuts-ps");
    context.subscriptions.push(vscode.commands.registerCommand("open-symlink-source.openSymlinkSource", () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const currentlyOpenTabfilePath = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.fileName;
            if (!currentlyOpenTabfilePath) {
                throw new Error("Active text editor does not have any file open");
            }
            const resolvedPath = yield fs.realpath(currentlyOpenTabfilePath);
            const filePath = yield getPath(resolvedPath);
            const uri = vscode.Uri.file(filePath);
            vscode.commands.executeCommand("vscode.open", uri);
        }
        catch (error) {
            vscode.window.showErrorMessage(`Cannot open file:\n${error.message}`);
        }
    })));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map