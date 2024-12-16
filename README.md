# Chrome Extension: Todo

This Chrome extension fetches data from the JSONPlaceholder API and displays the todo item at the 0th index.

## Features

- Fetches todo data from the JSONPlaceholder API.
- Displays the first todo item (`id: 0`) on the extension popup.
- Simple, minimal design.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle in the top-right corner).
4. Click on **Load unpacked** and select the directory containing the extension's files.

## How It Works

- The extension makes an API call to [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to fetch todos.
- Only the todo at the 0th index is retrieved and displayed in the extension popup.

## File Structure

```
.
├── manifest.json        # Configuration file for the Chrome extension
├── index.html           # HTML for the extension popup
├── script.js             # JavaScript for handling API calls and displaying data
├── styles.css           # Styling for the popup
└── README.md            # Documentation for the extension
```

## Example

Here is what the displayed todo looks like:

- **Title**: `<todo title>`
- **Status**: Completed/Incomplete

## Usage

1. Open the Chrome extension popup.
2. View the todo item fetched from the API.

## To Do

- Add support for displaying more todo items.
- Implement a dropdown to select and view other todo indices.
- Enhance the UI for better user experience.

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

**Author**: Sourav Poddar
