# Web Browser for VS Code

This extension allows you to open any website within a VS Code editor window.

## Features

- Open any website within VS Code
- View web content without leaving your development environment

## Usage

1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on Mac)
2. Type "Open Website in Editor" and select it
3. Enter the URL of the website you want to view
4. The website will open in a new editor tab

## Security Considerations

This extension uses an iframe to display web content. While we've implemented some security measures (such as the sandbox attribute), please be cautious when opening untrusted websites. Always ensure you're visiting trusted sources.

## Known Issues

- Some websites may not display correctly due to Content Security Policy (CSP) restrictions
- Certain features of websites may not work due to the sandboxed environment

## Release Notes

### 1.0.0

Initial release of Web Browser

---

**Enjoy!**