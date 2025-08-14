# Word Storage App

A React application for storing and managing words with a simple API interface. The app allows users to add words to a pool, draw random words from the pool, and preview the next word without removing it.

## Features

- **Add Word**: Add a single word to the storage pool
- **Draw Word**: Randomly select and remove a word from the pool
- **Preview Word**: View the next word in the pool without removing it
- **Modern UI**: Built with Material-UI components for a clean, responsive interface
- **Error Handling**: Comprehensive error handling for various API scenarios

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

You can check your versions by running:
```bash
node --version
npm --version
```

## Installation

1. **Clone or download the project** to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd Worktest
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install all required packages including:
   - React 18.2.0
   - Material-UI components
   - React Testing Library
   - Other development dependencies

## Running the Application

### Development Mode

To start the application in development mode:

```bash
npm start
```

This will:
- Start the development server
- Open the application in your default browser at `http://localhost:3000`
- Enable hot reloading for development
- Show any compilation errors in the browser and terminal

### Production Build

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Running Tests

### Run All Tests

To run all tests in watch mode:

```bash
npm test
```

This will:
- Start the test runner in interactive mode
- Run tests that are related to changed files
- Show test coverage information
- Allow you to press `a` to run all tests or `q` to quit

### Run Tests Once

To run tests once without watch mode:

```bash
npm test -- --watchAll=false
```

### Run Tests with Coverage

To run tests with coverage report:

```bash
npm test -- --coverage --watchAll=false
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive mode
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
Worktest/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/
│   │   ├── AddWordForm.js  # Component for adding words
│   │   ├── DrawWord.js     # Component for drawing words
│   │   ├── PreviewWord.js  # Component for previewing words
│   │   └── StatusMessage.js # Component for displaying status
│   ├── Api.js              # API utility functions
│   ├── App.js              # Main application component
│   ├── App.test.js         # Tests for the main app
│   └── index.js            # Application entry point
├── package.json            # Project dependencies and scripts
└── test.js                 # Alternative test implementation
```

## API Integration

The application integrates with a word storage API at `https://words.boondoc.co/words`:

- **POST** `/words` - Add a word to the pool
- **DELETE** `/words` - Draw (remove) a random word from the pool
- **GET** `/words` - Preview the next word without removing it

## Error Handling

The application handles various error scenarios:

- **400 Bad Request**: Invalid word (empty, too long, or multiple words)
- **404 Not Found**: Pool is empty (when trying to draw/preview)
- **503 Service Unavailable**: Pool is full (when trying to add)

## Technologies Used

- **React 18.2.0** - Frontend framework
- **Material-UI** - UI component library
- **React Testing Library** - Testing utilities
- **Create React App** - Build tool and development environment

## Troubleshooting

### Common Issues

1. **Port 3000 already in use**:
   - The app will automatically try to use the next available port
   - Or manually kill the process using port 3000

2. **Dependencies not found**:
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again

3. **Tests failing**:
   - Make sure all dependencies are installed
   - Check that the API endpoint is accessible
   - Verify that test files are properly configured

### Getting Help

If you encounter any issues:

1. Check the console for error messages
2. Verify your Node.js and npm versions
3. Ensure all dependencies are properly installed
4. Check that the API endpoint is accessible from your network

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
