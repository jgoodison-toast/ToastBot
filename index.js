/*
 * Starter Project for Messenger Platform Quick Start Tutorial
 *
 * Remix this as the starting point for following the Messenger Platform
 * quick start tutorial.
 *
 * https://developers.facebook.com/docs/messenger-platform/getting-started/quick-start/
 *
 */

'use strict';

// Imports dependencies and set up http server
const 
  request = require('request'),
  express = require('express'),
  body_parser = require('body-parser'),
  responsemap = require('./responsemap'),
  recognizedWords = [responsemap.introduction, responsemap.whatCanIHelpYouWith, responsemap.isYourRestaurantInTheUSA,
                    responsemap.whatPOSDoYouUse, responsemap.commonRestaurantTypes, responsemap.learnAboutToast, responsemap.currentToastCustomer,
                    responsemap.locatedInTheUSAYes, responsemap.locatedInTheUSANo, responsemap.everything,
                    responsemap.management, responsemap.metrics, responsemap.technology,
                    responsemap.marketing, responsemap.menu, responsemap.staffing,
                    responsemap.industryNews, responsemap.getAFreeQuote, responsemap.notInTheUSA,
                    responsemap.fifteenSixteen, responsemap.oneTwoSevenTwelveThirteenFourteen, responsemap.fourEightNineEleven,
                    responsemap.threeFiveSixTen, responsemap.compareWithYourPOS, responsemap.seeToastInAction, responsemap.browseRestaurantTypes,
                    responsemap.explorePricing, responsemap.shareFeedback, responsemap.talkToCustomerSupport,
                    responsemap.referAFriendToToast, responsemap.learnMoreAboutUpgrades, responsemap.learnAboutNewFeatures,
                    responsemap.purchaseMoreHardWare, responsemap.addAdditionalSoftwareModules, responsemap.integrateWithAnotherProduct,
                    responsemap.readArticles, responsemap.other, responsemap.learnAboutToastFeatures,
                    responsemap.one, responsemap.two, responsemap.three, responsemap.four,
                    responsemap.five, responsemap.six, responsemap.seven, responsemap.eight,
                    responsemap.nine, responsemap.ten, responsemap.eleven, responsemap.twelve,
                    responsemap.thirteen, responsemap.fourteen, responsemap.fifteen, responsemap.sixteen],
  app = express().use(body_parser.json()); // creates express http server
  

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

// Accepts POST requests at /webhook endpoint
app.post('/webhook', (req, res) => { 
  console.log("GOT A POST")

  // Parse the request body from the POST
  let body = req.body;

  // Check the webhook event is from a Page subscription
  if (body.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Get the webhook event. entry.messaging is an array, but 
      // will only ever contain one event, so we get index 0
      let webhook_event = entry.messaging[0];
      
      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log('Sender PSID: ' + sender_psid);
      
      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);        
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }
    });

    // Return a '200 OK' response to all events
    res.status(200).send('EVENT_RECEIVED');

  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Accepts GET requests at the /webhook endpoint
app.get('/webhook', (req, res) => {
  /** UPDATE YOUR VERIFY TOKEN **/
  const VERIFY_TOKEN = process.env.PAGE_ACCESS_TOKEN;
  
  // Parse params from the webhook verification request
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Check if a token and mode were sent
  if (mode && token) {
  
    // Check the mode and token sent are correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Respond with 200 OK and challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

// Handles messages events
function handleMessage(sender_psid, received_message) {
  let response;
  var message;
  //console.log(responsemap.responsemap[responsemap.purchaseMoreHardWare])
  // Checks if the message contains text
  if (received_message.text) {
    if(recognizedWords.indexOf(received_message.text) === -1) {
      received_message.text = "undefined";
    }
    // Get the URL of the message attachment
    //let attachment_url = received_message.attachments[0].payload.url;
    
    //console.log("herererererere", responsemap.responsemap[received_message.text])
    message = received_message.text;
    response = responsemap.responsemap[received_message.text];
  }
  
  // Send the response message
  callSendAPI(sender_psid, response);  
  if(message == responsemap.browseRestaurantTypes) {
    var response2 = responsemap.responsemap[received_message.text + "2"];
    setTimeout(function() {
      callSendAPI(sender_psid, response2);  
    }, 100);
  }
}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {
  let response;
  
  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === 'Yes!') {
    response = { "text": "Thanks!" }
  } else if (payload === 'No!') {
    response = { "text": "Oops, try sending another image." }
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
}



// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }
  
  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  }); 
}
