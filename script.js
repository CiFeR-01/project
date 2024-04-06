// Function to display products
function displayProducts(products) {
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

// Fetch product data from server
fetch('/api/products')
  .then(response => response.json())
  .then(products => displayProducts(products))
  .catch(error => console.error('Error fetching product data:', error));
