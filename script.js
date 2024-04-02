function compileAndRun() {
    const code = document.getElementById('code').value;
    
    // Send code to server for compilation and execution
    // Example: You can use AJAX (e.g., fetch API) to send the code to the server
    
    // For demonstration, let's assume the server responds with output
    const output = "Hello, World!"; // Replace this with actual output from server
    
    // Display output
    displayOutput(output);
}

function displayOutput(output) {
    const outputContainer = document.getElementById('output-container');
    const outputElement = document.getElementById('output');
    
    outputElement.textContent = output;
    outputContainer.style.display = 'block';
}
