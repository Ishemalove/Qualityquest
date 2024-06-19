const express = require('express');
const fs = require('fs');
const path = require('path');
const user = require("./models/user")
const app = express();
const PORT = 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

// API endpoint to get the cookie consent status
app.get('/api/cookie-consent', (req, res) => {
  try {
    // Read the cookie consent status from a JSON file
    const cookieConsentFile = path.join(__dirname, 'cookie-consent.json');
    const cookieConsent = JSON.parse(fs.readFileSync(cookieConsentFile, 'utf-8'));
    res.json(cookieConsent);
  } catch (error) {
    console.error('Error getting cookie consent:', error);
    res.status(500).json({ error: 'Error getting cookie consent' });
  }
});

// API endpoint to update the cookie consent status
app.post('/api/cookie-consent', (req, res) => {
  try {
    // Update the cookie consent status in the JSON file
    const cookieConsentFile = path.join(__dirname, 'cookie-consent.json');
    fs.writeFileSync(cookieConsentFile, JSON.stringify(req.body));
    res.json(req.body);
  } catch (error) {
    console.error('Error updating cookie consent:', error);
    res.status(500).json({ error: 'Error updating cookie consent' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});