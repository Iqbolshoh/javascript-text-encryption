# Text Encryption Web App

This is a simple web application that allows users to encrypt and decrypt text using AES encryption. The application is built with HTML, CSS, and JavaScript.

## Features

- **Text Encryption**: Enter any text to encrypt it securely.
- **Text Decryption**: Encrypted text can be decrypted back to its original form.
- **Copy to Clipboard**: Easily copy the text or encrypted text to the clipboard with a single click.

## How It Works

- The app uses the [CryptoJS](https://cdnjs.com/libraries/crypto-js) library to handle AES encryption and decryption.
- The text entered by the user is encrypted with a predefined passphrase (`Iqbolshoh_777`).
- The encrypted text is displayed in a separate text area, where it can also be decrypted.

## Project Structure

- `index.html`: The main HTML file that includes the layout and structure of the application.
- `style.css`: Contains the CSS styles to make the application visually appealing and responsive.
- `script.js`: Handles the encryption and decryption logic, as well as the copy to clipboard functionality.

## Installation

To use this project:

1. Clone or download the repository.
2. Open `index.html` in your web browser.

## Usage

1. **Encrypting Text**:
   - Type or paste your text into the first text area.
   - The encrypted text will automatically appear in the second text area.

2. **Decrypting Text**:
   - Paste the encrypted text into the second text area.
   - The original text will automatically appear in the first text area.

3. **Copying Text**:
   - Click the copy icon next to the text area to copy the text to your clipboard.

## Libraries Used

- **CryptoJS**: Used for AES encryption and decryption.  
  [CryptoJS Documentation](https://cryptojs.gitbook.io/docs/)
- **Font Awesome**: Used for the copy icons.  
  [Font Awesome Documentation](https://fontawesome.com/v5/docs)

## Author

- **Iqbolshoh Ilhomjonov**  
  [GitHub Profile](https://github.com/iqbolshoh)
