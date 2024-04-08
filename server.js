const express = require('express');
const xlsx = require('xlsx');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get product data
app.get('/api/products', (req, res) => {
  // Load the Excel file
  const filePath = path.join(__dirname, 'data', 'product.xlsx');
  const workbook = xlsx.readFile(filePath); // Assuming the Excel file is named products.xlsx
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  
  // Convert Excel data to JSON
  const products = xlsx.utils.sheet_to_json(worksheet);

  // Send product data as JSON
  res.json(products);
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
