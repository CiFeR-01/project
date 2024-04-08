// Function to display products
function displayProducts(products) {
  console.log('Products:', products); // Log the products array
  const productListDiv = document.getElementById('product-list');

  products.forEach(product => {
      console.log('Product:', product); // Log each product object
      
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      
      const productPrice = document.createElement('p');
      productPrice.textContent = `Price: $${product.price}`;

      const bookNowButton = document.createElement('button');
      bookNowButton.textContent = 'Book Now';
      bookNowButton.classList.add('book-now-button');
      
      productDiv.appendChild(productImage);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(bookNowButton);
      
      productListDiv.appendChild(productDiv);
  });
}

// Fetch product data from server
fetch('/api/products')
  .then(response => {
      console.log('Response:', response); // Log the response object
      return response.json();
  })
  .then(products => {
      console.log('Received Products:', products); // Log the products received from server
      displayProducts(products);
  })
  .catch(error => console.error('Error fetching product data:', error));
