# Open All Bill Links - Chrome Extension

**Open All Bill Links** is a Chrome extension that allows you to quickly open all links labeled with the text "Bill" from a specific HTML structure on a webpage. This is particularly useful for automating tasks or quickly accessing multiple bill links.

## Features

- Opens only links with the text "Bill" from a webpage.
- Easy to use with a single click.

## Installation

1. **Download or Clone the Repository**: You can download this repository as a ZIP file and extract it, or clone it using Git.
   
2. **Load the Extension in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click on "Load unpacked" and select the directory where you downloaded or cloned the extension.

## Usage

1. **Navigate to a Page**: Go to a webpage that contains the HTML structure with links labeled "Bill".
2. **Click the Extension Icon**: Click on the extension icon in the Chrome toolbar to open all "Bill" links in new tabs.

## Files

- **manifest.json**: The manifest file that contains metadata about the extension.
- **background.js**: The background script that runs the core functionality to open all "Bill" links.
- **popup.html** (optional): The HTML file for the popup interface, if you prefer using a button to activate the extension.
- **popup.js** (optional): The JavaScript file that handles the actions from the popup interface.
- **Icons** (optional): Icon files (`icon16.png`, `icon48.png`, `icon128.png`) for the extension icon in different sizes.

## Contributing

If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
