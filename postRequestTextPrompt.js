// axios library to handle REST API requests.
const axios = require('axios');

// Message to Eliza.
const promptString = "Who is your best friend?"
// Get the agentId from the terminal running Eliza with a character.
const agentIdString = "e61b079d-5226-06e9-9763-a33094aa8d82";

// Call the sendMessage function. 
sendMessage(promptString,agentIdString);

// Function to do the async REST API POST request prompt to the agent for a text response. 
async function sendMessage(prompt, agentId) {
  const url = "http://localhost:3000/" + agentId + "/message"; // Replace with your server's URL
  const payload = {
    text: prompt, // Adjust based on the expected structure in `req.body`
  };

  try {
    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Response:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error Response:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('No Response:', error.request);
    } else {
      console.error('Error:', error.message);
    }
  }
}

// // Output example:
// Response: [
//   {
//     user: 'C-3PO',
//     text: 'Ah, well, my best friend is none other than R2-D2. Despite our differences, we have been through numerous adventures together across the galaxy. Is there anything else you would like to know?',
//     action: 'NONE'
//   }
// ]
