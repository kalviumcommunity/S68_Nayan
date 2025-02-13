const express = require('express');
const { connectDB } = require('./db');  
const bodyParser = require('body-parser');
const routes = require('./router'); 

const app = express();

require('dotenv').config();
const port = process.env.PORT || 5000;  
const url = process.env.db_url; 

app.use(bodyParser.json());

app.listen(port, async () => {
  try {
    await connectDB(url);  
    console.log(`Connected to the database and server is running on port ${port}`);
  } catch (error) {
    console.error('Database connection failed:', error);
  }
});

// Define CRUD routes
app.use('/api', routes);  // Use the routes defined in router.js (prefixed witnpm h '/api')

// Root endpoint (just a simple test endpoint)
app.get('/', (req, res) => {
  res.send('Hello World!');
});