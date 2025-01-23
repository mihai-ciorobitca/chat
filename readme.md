# Express App Boilerplate

This repository is an Express app boilerplate to help you get started with building your Node.js applications quickly.

## Features

- Express 4.x
- EJS views
- Nodemon for automatic server restarts
- Environment variables with dotenv
- Basic project structure

## Getting Started

### Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/express-template.git
    cd express-template
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```sh
    cp .env.example .env
    ```

### Running the App

To start the development server with hot reloading:
```sh
npm run dev
# or
yarn dev
```

To start the production server:
```sh
npm start
# or
yarn start
```

### Project Structure

```
.
├── src
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── utils
│   └── app.js
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── babel.config.js
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.