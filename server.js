require('dotenv').config();
const express = require('express');

// Load Sequelize + all models
const { sequelize } = require('./app/models');

// Load all routes from app/routes/index.js
const routes = require('./app/routes');

const app = express();
app.use(express.json());

// Register all API routes
app.use('/', routes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    // Test DB connection
    await sequelize.authenticate();
    console.log('Database connected');

    // Sync models → create tables if they don't exist
    await sequelize.sync({ alter: true });
    console.log('Database synchronized');

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error('Failed to start server:', err);
  }
})();
