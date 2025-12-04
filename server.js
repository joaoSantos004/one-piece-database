require('dotenv').config();
const express = require('express');


const { sequelize } = require('./app/models');


const routes = require('./app/routes');

const app = express();
app.use(express.json());


app.use('/onepiece', routes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {

    await sequelize.authenticate();
    console.log('Database connected');

 
    await sequelize.sync({ alter: true });
    console.log('Database synchronized');

 
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error('Failed to start server:', err);
  }
})();
