const express = require('express');
const xlsx = require('xlsx');
const app = express();

// Serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API endpoint to get product data
app.get('/api/products', (req, res) => {
  // Load the Excel file
  const workbook = xlsx.readFile('product.xlsx');
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  
  // Convert Excel data to JSON
  const products = xlsx.utils.sheet_to_json(worksheet);

  // Send product data as JSON
  res.json(products);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
