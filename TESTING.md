# Manual Testing Guide

This document provides step-by-step instructions for manually testing the functionality of the Desktop Assistant application.

## Prerequisites

- Node.js and npm installed on your system.
- A copy of the application code.

## 1. Installation and Setup

1.  Open a terminal or command prompt.
2.  Navigate to the root directory of the application.
3.  Install the necessary dependencies by running the following command:

    ```bash
    npm install
    ```

## 2. Running the Application

1.  After the installation is complete, start the application with the following command:

    ```bash
    npm start
    ```

2.  The Desktop Assistant window should appear on your screen.

## 3. Verifying Core Functionality

### 3.1. Random Fact Display

-   **Test:** Confirm that a random fact is displayed in the speech bubble when the application starts.
-   **Expected Result:** A fact, such as "Hello! I'm here to help you with your computer." or a random general fact, should be visible.

### 3.2. OS-Specific Facts

1.  **Test:** Click on the dropdown menu in the settings container (bottom-right).
2.  Select a different operating system (e.g., "macOS" or "Linux").
3.  **Expected Result:** A new fact, relevant to the selected OS, should immediately appear in the speech bubble. Repeat this for all available operating systems to ensure they all work.

### 3.3. Avatar Customization

1.  **Test:** Click the "Choose File" button (or similar, depending on your OS) next to the OS dropdown.
2.  Select a local image file from your computer (e.g., a `.png` or `.jpg`).
3.  **Expected Result:** The assistant's avatar should immediately change to the image you selected.

## 4. Conclusion

If all the steps above were completed successfully and the application behaved as expected, the manual testing is complete.
