const socket = new WebSocket('ws://localhost:8080');

const chatOutput = document.getElementById('chat-output');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Event listener for send button
sendBtn.addEventListener('click', () => {
    const message = userInput.value;
    if (message.trim() !== '') {
        socket.send(message);
        userInput.value = '';
    }
});

// Event listener for Enter key
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});

// Event listener for incoming messages
socket.addEventListener('message', (event) => {
    const message = event.data;
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to bottom
});
