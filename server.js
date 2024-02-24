const express = require("express");
const dotenv = require("dotenv");
const sql = require('mssql');
const productRoutes = require("./src/routes/productRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const config = {
  server: 'MR_SHYN\\SQLEXPRESS',
  database: 'OnlineShop',
  options: {
      trustedConnection: true // Sử dụng windows authentication
  }
};

// Middleware
app.use(express.json());

// Connect to SQL Server
sql.connect(config)
  .then(() => {
    console.log("Connected to SQL Server");
  })
  .catch(err => {
    console.error("Error connecting to SQL Server:", err);
    process.exit(1);
  });

// Routes
app.use("/products", productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
