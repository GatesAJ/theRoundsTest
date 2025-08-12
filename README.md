# React Word Storage App

A simple React application for storing and retrieving words using an external API.

## Features

- Add words to storage
- Draw random words from storage
- Preview words without removing them
- Error handling for various API responses

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## API Endpoints

The app uses the following API endpoints:
- `POST /` - Add a word to storage
- `GET /` - Preview a word without removing it
- `DELETE /` - Draw and remove a word from storage

## Project Structure

```
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js             # Main React component
│   └── index.js           # Application entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```
