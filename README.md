# Auth App

A full-stack authentication application with a Node.js/Express backend and an Angular frontend.

## Project Structure

```
Auth App/
├── Back-end/          # Node.js/Express backend
│   ├── src/
│   │   ├── config/    # Configuration files (database, JWT)
│   │   ├── controller/ # Authentication controllers
│   │   └── route/     # API routes
│   ├── package.json
│   └── server.js
└── Front-end/         # Angular application
    ├── src/
    │   ├── app/
    │   │   ├── component/  # Angular components (Home, Login, Signup)
    │   │   └── services/   # API service
    │   └── ...
    └── package.json
```

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- Angular frontend with reactive forms
- RESTful API backend

## Technologies Used

### Backend

- Node.js
- Express.js
- JWT (JSON Web Tokens)
- MongoDB (configured in db.js)

### Frontend

- Angular
- TypeScript
- Reactive Forms

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ajay-Devmurari/auth_app.git
   cd auth_app
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Backend dependencies
   cd Back-end
   npm install
   # or
   pnpm install

   # Frontend dependencies
   cd ../Front-end
   npm install
   # or
   pnpm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `Back-end` directory with your database and JWT secret configurations

4. Run the application:

   ```bash
   # Start the backend server
   cd Back-end
   npm start
   # or
   pnpm start

   # In a new terminal, start the frontend development server
   cd Front-end
   ng serve
   ```

## API Endpoints

- `POST /api/register` - Register a new user
- `POST /api/login` - Login user and get JWT token
- `GET /api/profile` - Get user profile (protected route)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
