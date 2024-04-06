// Sample product data
const products = [
  { name: 'Product 1', price: 10, image: 'product1.jpg' },
  { name: 'Product 2', price: 20, image: 'product2.jpg' },
  { name: 'Product 3', price: 30, image: 'product3.jpg' }
];

// Function to display products
function displayProducts() {
  const productListDiv = document.getElementById('product-list');
  
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    const productName = document.createElement('h3');
    productName.textContent = product.name;
    
    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${product.price}`;
    
    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;
    
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productImage);
    
    productListDiv.appendChild(productDiv);
  });
}

// Display products when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);
