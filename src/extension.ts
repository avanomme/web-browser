import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Web Browser extension is now active!');

  let disposable = vscode.commands.registerCommand('web-browser.openWebsite', async () => {
    const url = await vscode.window.showInputBox({
      prompt: 'Enter the URL of the website you want to open',
      placeHolder: 'https://example.com'
    });

    if (url) {
      const panel = vscode.window.createWebviewPanel(
        'webBrowser',
        'Web Browser',
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          retainContextWhenHidden: true
        }
      );

      panel.webview.html = getWebviewContent(url);
    }
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent(url: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Web Browser</title>
      <style>
        body, html, iframe {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe src="${url}" sandbox="allow-scripts allow-same-origin allow-forms" allow="fullscreen"></iframe>
    </body>
    </html>
  `;
}

export function deactivate() {}