'use stict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const subscriptionController = require('./controllers/subscriptionController');
const twitterController = require('./controllers/twitterController');

//------------------------------------------------------------
// Create Express app
//------------------------------------------------------------
const app = express();

//------------------------------------------------------------
// Initialize Middleware
//------------------------------------------------------------
app.set('port', process.env.PORT || 3001);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//------------------------------------------------------------
// Assign Routes and Controllers for API
//------------------------------------------------------------

// For Hubspot form subscriptions
app.post('/api/subscribe/:formName', subscriptionController.postSubscription);

// To get last tweet from @resilientcoders
app.get('/api/twitter', twitterController.getTwitter);

//------------------------------------------------------------
// Start Express application
//------------------------------------------------------------
app.listen(app.get('port'));
