//Questions
const introduction =  "Hey, let’s get started. I can answer any questions you have about Toast. Tap the button below!\n\nIf you get lost at any point just type anything and you will come back here.";
const whatCanIHelpYouWith = "Great! What can I help you with?";
const isYourRestaurantInTheUSA = "Is your restaurant in the USA?";
const whatPOSDoYouUse = "What POS do you currently use in your restaurant?\n 1 - Micros\n2 - NCR - Aloha\n3 - NCR - Silver\n4 - Square\n5 - Clover\n6 - Harbortouch\n7 - Positouch\n8 - TouchBistro\n9 - Revel\n10 - Brink\n11 - Breadcrumb/Upserve\n12 - Aldelo\n13 - Digital Dining\n14 - Dinerware\n15 - None - Pencil & Paper\n16 - None - Cash Register\n17 - None - New Restaurant"
const commonRestaurantTypes = "YUM. Here are the most common restaurant types we work with.  🍽️"
const learnAboutToastReply = "What features interest you?";

//REPLIES
const learnAboutToast= "Learn about Toast";
const currentToastCustomer="Current customer";
const locatedInTheUSAYes="Yes";
const locatedInTheUSANo="No";
const featureReply = "What would you like to do next?";
const reportingInAction = "Reporting in action";
const customerLoyaltyInAction = "Loyalty in action";
const inventoryInAction = "Inventory in action";

const everything= "Everything";
const management="Management";
const metrics="Metrics";
const technology="Technology";
const marketing= "Marketing";
const menu="Menu";
const staffing="Staffing";
const industryNews= "Industry News";
const getAFreeQuote= "Awesome! Just click here to get a free custom quote for your restaurant. pos.toasttab.com/demo-request";
const notInTheUSA="Thank you for your interest in Toast Restaurant Point of Sale! At this current time, our system is not available outside of the U.S. However, we are looking to expand internationally in the near future. In the meantime, subscribe to the blog for updates!";

const fifteenSixteen = "Good to know. Check out our comparison page here to see how Toast stacks up against cash registers.";
const oneTwoSevenTwelveThirteenFourteen = "Good to know. Check out our comparison page here to see how Toast stacks up against legacy competitors."
const fourEightNineEleven = "Good to know. Check out our comparison page here to see how Toast stacks up against iPad POS systems.";
const threeFiveSixTen = "Good to know. Check out our comparison page here to see how Toast stacks up against cloud competitors.";

const reporting = "Reporting";
const inventory = "Inventory";
const giftCards = "Gift Cards";
const customerLoyalty = "Customer Loyalty";
const onlineOrdering = "Online Ordering";
const posOrdering = "POS Ordering";
//BUTTONS
const compareWithYourPOS= "Compare to your POS";
const browseRestaurantTypes = "Restaurant Types"
const seeToastInAction="See Toast in action";
const explorePricing="Explore pricing";
const shareFeedback="Share feedback";
const talkToCustomerSupport= "Talk to support";
const referAFriendToToast= "Refer a friend";
const learnMoreAboutUpgrades= "Learn about upgrades";
const learnAboutNewFeatures= "New features";
const purchaseMoreHardWare= "Purchase hardware";
const integrateWithAnotherProduct= "Integration";
const readArticles= "Read articles";
const other= "other";
const learnAboutToastFeatures= "Learn about features";
const one = "1";
const two = "2";
const three = "3";
const four = "4";
const five = "5";
const six = "6";
const seven = "7";
const eight = "8";
const nine = "9";
const ten = "10";
const eleven = "11";
const twelve = "12";
const thirteen = "13";
const fourteen = "14";
const fifteen = "15";
const sixteen = "16";
const seventeen = "17";
const toastFeatures = "Toast features";
var responsemap = {};

// Left
responsemap["undefined"] = {
  "text": introduction,
  "quick_replies":[
            {
              "content_type":"text",
              "title":learnAboutToast,
              "payload":learnAboutToast
            },
            {
              "content_type":"text",
              "title":currentToastCustomer,
              "payload":currentToastCustomer
            },
            {
              "content_type":"text",
              "title":readArticles,
              "payload":readArticles
            }
            
        ]
}
responsemap[reporting] = {
    "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":featureReply,
      "buttons":[
        {
          "type":"postback",
          "payload":explorePricing,
          "title":reportingInAction 
        },
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/pos-system/analytics?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Capabilities",
        }
      ]  
    }
  }
}
responsemap[giftCards] = {
    "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":featureReply,
      "buttons":[
        {
          "type":"postback",
          "payload":explorePricing,
          "title":"Gift cards in action" 
        },
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/pos-system/gift-card?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Capabilities",
        }
      ]  
    }
  }
}
responsemap[customerLoyalty] = {
    "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":featureReply,
      "buttons":[
        {
          "type":"postback",
          "payload":explorePricing,
          "title":customerLoyaltyInAction 
        },
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/pos-system/loyalty?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Capabilities",
        }
      ]  
    }
  }
}

responsemap[inventory] = {
    "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":featureReply,
      "buttons":[
        {
          "type":"postback",
          "payload":explorePricing,
          "title":inventoryInAction 
        },
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/pos-system/inventory-management?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Capabilities",
        }
      ]  
    }
  }
}
responsemap[onlineOrdering] = {
    "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":featureReply,
      "buttons":[
        {
          "type":"postback",
          "payload":explorePricing,
          "title":"Online in action" 
        },
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/pos-system/online-ordering?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Capabilities",
        }
      ]  
    }
  }
}
responsemap[posOrdering] = {
    "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":featureReply,
      "buttons":[
        {
          "type":"postback",
          "payload":explorePricing,
          "title":"POS in action" 
        },
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/restaurant-pos/ordering?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Capabilities",
        }
      ]  
    }
  }
}
responsemap[learnAboutToast] = {
    "text":"What would you like to learn about?",
    "quick_replies":[
            {
              "content_type":"text",
              "title":explorePricing,
              "payload":explorePricing
            },
            {
              "content_type":"text",
              "title":compareWithYourPOS,
              "payload":compareWithYourPOS
            },
            {
              "content_type":"text",
              "title":browseRestaurantTypes,
              "payload":browseRestaurantTypes
            },
            {
              "content_type":"text",
              "title":toastFeatures,
              "payload":toastFeatures
            }
            
        ]

}
responsemap[toastFeatures] = {
  "text":learnAboutToastReply,
    "quick_replies":[
            {
              "content_type":"text",
              "title":reporting,
              "payload":reporting
            },
            {
              "content_type":"text",
              "title":inventory,
              "payload":inventory
            },
            {
              "content_type":"text",
              "title":giftCards,
              "payload":giftCards
            },
            {
              "content_type":"text",
              "title":customerLoyalty,
              "payload":customerLoyalty
            },
            {
              "content_type":"text",
              "title":onlineOrdering,
              "payload":onlineOrdering
            },
            {
              "content_type":"text",
              "title":posOrdering,
              "payload":posOrdering
            }
            
        ]
}
responsemap[explorePricing] = {
  "text":"Is your restaurant located in the U.S.?",
    "quick_replies":[
            {
              "content_type":"text",
              "title":locatedInTheUSAYes,
              "payload":locatedInTheUSAYes
            },
            {
              "content_type":"text",
              "title":locatedInTheUSANo,
              "payload":locatedInTheUSANo
            },

        ]
}
responsemap[browseRestaurantTypes] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "list",
      "top_element_style": "compact",
      "elements": [
        {
          "title": "Full Service",
          "image_url": "https://pos.toasttab.com/hubfs/terminal-people-in-back-fsr-puritan_v2.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/restaurant-pos/full-service?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall"
          }
        },
        {
          "title": "Quick Service",
          "image_url": "https://pos.toasttab.com/hubfs/Hardware/Customer-Hardware-Photos/patlafrieda-quickserve.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/restaurant-pos/quick-service?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall"
          }
        },
        {
          "title": "Bar / Nightclub",
          "image_url": "https://pos.toasttab.com/hubfs/behind-bar-pos.jpg?t=1510246060148",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/restaurant-pos/bar?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall"
          }
        }
      ]
    }
  }
}
responsemap[browseRestaurantTypes + "2"] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "list",
      "top_element_style": "compact",
      "elements": [
        {
          "title": "Pizzeria",
          "image_url": "https://pos.toasttab.com/hubfs/oath-food-shot.jpg?t=1510246060148",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/restaurant-pos/pizza?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall"
          }
        },
        {
          "title": "Cafe",
          "image_url": "https://pos.toasttab.com/hubfs/images/ProteinBar.jpg?t=1510246060148",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/restaurant-pos/cafe?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall"
          }
        },
        {
          "title": "Other",
          "image_url": "https://pos.toasttab.com/hubfs/images/toast-circle_red.png?t=1510246060148",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/restaurant-pos?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall"
          }
        }
      ]
    }
  }
}

responsemap[locatedInTheUSAYes] = {
    "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":"Awesome! I'll put you in touch with a Toast expert to talk about your restaurant's needs.",
      "buttons":[
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/request-demo?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Schedule Free Demo",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        }
      ]  
    }
  }
}
//TODO
responsemap[isYourRestaurantInTheUSA] = {
  "text": "WHAT IS THIS",
  "quick_replies":[
            {
              "content_type":"text",
              "title":locatedInTheUSAYes,
              "payload":locatedInTheUSAYes
            },
            {
              "content_type":"text",
              "title":locatedInTheUSANo,
              "payload":locatedInTheUSANo
            }
        ]
}
responsemap[locatedInTheUSANo] = {
  "text": notInTheUSA
}
responsemap[compareWithYourPOS] = {
  "text": whatPOSDoYouUse
}
responsemap[fifteen] = responsemap[sixteen] = {
    "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":fifteenSixteen,
      "buttons":[
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/compare/cash-register?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Comparison",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        }
      ]  
    }
  }
}
responsemap[one] = responsemap[two] = responsemap[seven] = responsemap[twelve] = responsemap[thirteen] = responsemap[fourteen] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":oneTwoSevenTwelveThirteenFourteen,
      "buttons":[
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/compare/legacy-pos-systems?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Comparison",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        }
      ]  
    }
  }
}
responsemap[four] = responsemap[eight] = responsemap[nine] = responsemap[eleven] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":fourEightNineEleven,
      "buttons":[
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/compare/ipad-pos-systems?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Comparison",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        }
      ]  
    }
  }
}
responsemap[three] = responsemap[five] = responsemap[six] = responsemap[ten] = responsemap[seventeen] =  {
    "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":threeFiveSixTen,
      "buttons":[
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/compare?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Comparison",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        }
      ]  
    }
  }
}

responsemap[readArticles] = {
  "text": readArticles,
  "quick_replies":[
    {
      "content_type":"text",
      "title":everything,
      "payload":everything
    },
    {
      "content_type":"text",
      "title":management,
      "payload":management
    },
    {
      "content_type":"text",
      "title":metrics,
      "payload":metrics
    },
    {
      "content_type":"text",
      "title":technology,
      "payload":technology
    },
    {
      "content_type":"text",
      "title":marketing,
      "payload":marketing
    },
    {
      "content_type":"text",
      "title":menu,
      "payload":menu
    },
    {
      "content_type":"text",
      "title":staffing,
      "payload":staffing
    },
    {
      "content_type":"text",
      "title":industryNews,
      "payload":industryNews
    }
  ]
}

// Right
responsemap[currentToastCustomer] = 
      {
        "text":"How can we help you today?",
        "quick_replies": [
            {
              "content_type":"text",
              "title":shareFeedback,
              "payload":shareFeedback
            },
            {
              "content_type":"text",
              "title":talkToCustomerSupport,
              "payload":talkToCustomerSupport
            },
            {
              "content_type":"text",
              "title":referAFriendToToast,
              "payload":referAFriendToToast
            },
            {
              "content_type":"text",
              "title":learnMoreAboutUpgrades,
              "payload":learnMoreAboutUpgrades
            },
            {
              "content_type":"text",
              "title":other,
              "payload":other
            }
        ]
      }


responsemap[learnMoreAboutUpgrades] = 
      {
        "text":"What kind of upgrades are you interested in",
        "quick_replies": [
            {
              "content_type":"text",
              "title":learnAboutNewFeatures,
              "payload":learnAboutNewFeatures
            },
            {
              "content_type":"text",
              "title":purchaseMoreHardWare,
              "payload":purchaseMoreHardWare
            },
            {
              "content_type":"text",
              "title":integrateWithAnotherProduct,
              "payload":integrateWithAnotherProduct
            }
        ]
      }

responsemap[shareFeedback] = {
    "text": "Review Toast on Facebook, Capterra, Software Advice, Merchant Maverick, or G2 Crowd."
}

responsemap[other] = {
  "text": "No one is available to chat at the moment, but if you leave a message we will get back to you as soon as possible."
}

responsemap[referAFriendToToast] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":"If their restaurant signs up with Toast and uses our software for 30 days, you will receive $1,000.",
      "buttons":[
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/toast/contact/refer?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Refer a friend",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        }
      ]
    }
  }
}

responsemap[talkToCustomerSupport] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":"Please contact support at support@toasttab.com or 617.682.0225. You can also consult the Toast knowledge base",
      "buttons":[
        {
          "type":"web_url",
          "url":"https://toast.force.com/knowledgebase/s/",
          "title":"Toast knowledge base",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        }
      ]  
    }
  }
}

responsemap[purchaseMoreHardWare] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":"Please contact your account manager to request additional hardware. In the mean time, you can check out all of Toast's hardware offerings on our hardware pages",
      "buttons":[
        {
          "type":"web_url",
          "url":"https://hub.toasttab.com/upgrade?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social%3E",
          "title":"Upgrade toast",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        },
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/restaurant-pos/hardware",
          "title":"Hardware Pages",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        }
      ]  
    }
  }
}


responsemap[learnAboutNewFeatures] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":"Please click 'Upgrade Toast' to contact your account manager about new features. In the meantime, you can check out all of Toast's features on our feature pages.",
      "buttons":[
        {
          "type":"web_url",
          "url":"https://hub.toasttab.com/upgrade?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social%3E",
          "title":"Upgrade toast",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        },
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/pos-system?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Feature Pages",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        }
      ]  
    }
  }
}


responsemap[integrateWithAnotherProduct] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type":"button",
      "text":"Please contact your account manager to learn more about adding a software integration. In the mean time, you can check out all of Toast's features on our feature pages",
      "buttons":[
        {
          "type":"web_url",
          "url":"https://hub.toasttab.com/upgrade?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social%3E",
          "title":"Upgrade toast",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        },
        {
          "type":"web_url",
          "url":"https://pos.toasttab.com/integrations?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
          "title":"Integration Pages",
          "webview_height_ratio": "full",
          "messenger_extensions": true,  
        }
      ]  
    }
  }
}
        

responsemap[everything] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "list",
      "top_element_style": "compact",
      "elements": [
        {
          "title": "The 5 Real Reasons You're Losing Restaurant Staff",
          "subtitle": "Donald Burns on 5/2/16",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/losing-restaurant-staff.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/the-5-real-reasons-youre-losing-restaurant-staff?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "10 Examples of Awesome Restaurant Social Media Marketing",
          "subtitle": "Kendal Austin on 4/18/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/10%20Examples%20of%20Awesome%20Social%20Media%20Marketing/social-media-restaurants-tips-min.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/examples-of-awesome-restaurant-social-media-marketing?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "50+ Restaurant Industry Statistics for Restaurant Owners in 2017",
          "subtitle": "Allie Tetreault and AJ Beltis on 10/30/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/Restaurant%20Statistics/Restaurant_Economy_Statistics-min.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/restaurant-management-statistics?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "27 Creative & Cool Restaurant Names",
          "subtitle": "Cameret Bannister on 7/13/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/27%20Cool%20Restaurant%20Names/restaurant-names.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/creative-cool-restaurant-names?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        }
      ],
      "buttons": [
        {
          "title": "View More",
          "type": "web_url",
          "url": "https://pos.toasttab.com/blog/"
        }
      ]
    }
  }
}

responsemap[management] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "list",
      "top_element_style": "compact",
      "elements": [
        {
          "title": "The 5 Real Reasons Youre Losing Restaurant Staff",
          "subtitle": "Donald Burns on 5/2/16",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/losing-restaurant-staff.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/the-5-real-reasons-youre-losing-restaurant-staff?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "50+ Restaurant Industry Statistics for Restaurant Owners in 2017",
          "subtitle": "Allie Tetreault and AJ Beltis on 10/30/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/Restaurant%20Statistics/Restaurant_Economy_Statistics-min.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/restaurant-management-statistics?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "15 Licenses and Permits Needed to Open a Restaurant",
          "subtitle": "Sam Kusinitz on 9/1/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/food-license.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/licenses-and-permits-required-open-new-restaurant?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "7 Restaurant Performance Metrics and How to Calculate Them",
          "subtitle": "Sam Kusinitz on 2/15/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/mugs-min.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/how-to-calculate-restaurant-performance-metrics?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        }
      ],
      "buttons": [
        {
          "title": "View More",
          "type": "web_url",
          "url": "https://pos.toasttab.com/blog/topic/restaurant-management/"
        }
      ]
    }
  }
}

responsemap[metrics] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "list",
      "top_element_style": "compact",
      "elements": [
        {
          "title": "Food Cost Formula: How to Calculate Food Cost Percentage",
          "subtitle": "Allie Tetreault on 5/22/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/toast_fcc_promo_blog-header-A%20(1)-min.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/how-to-calculate-food-cost-percentage?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "7 Restaurant Performance Metrics and How to Calculate Them",
          "subtitle": "Sam Kusinitz on 2/15/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/mugs-min.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/how-to-calculate-restaurant-performance-metrics?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "How to Read a Restaurant Profit and Loss Statement",
          "subtitle": "Sam Kusinitz on 2/27/15",
          "image_url": "https://pos.toasttab.com/hs-fs/hub/412971/file-2544831933-jpg/income_statement.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/restaurant-profit-and-loss-statement-free-income-statement-template?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "What is the Average Restaurant Profit Margin",
          "subtitle": "Jessica Reimer on 3/1/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Stock%20images/Group%20of%20people%20working%20with%20laptops%2C%20tablet%20and%20smartphones%20together%20and%20making%20financial%20report-937273-edited.jpeg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/average-restaurant-profit-margin?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        }
      ],
      "buttons": [
        {
          "title": "View More",
          "type": "web_url",
          "url": "https://pos.toasttab.com/blog/topic/restaurant-metrics/"
        }
      ]
    }
  }
}

responsemap[technology] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "list",
      "top_element_style": "compact",
      "elements": [
        {
          "title": "How Much Does a Restaurant POS System Cost?",
          "subtitle": "Sam Kusinitz on 8/10/15",
          "image_url": "https://pos.toasttab.com/hubfs/Blog_Post_Images/POS_System_Cost.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/how-much-should-a-restaurant-pos-system-cost?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "How Credit Card Processing Works",
          "subtitle": "Ellie Mirman on 3/3/15",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/how-credit-card-processing-works.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/how-credit-card-processing-works-plus-calculator?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "The Difference Between a Cloud-Based POS and Traditional POS",
          "subtitle": "Kendal Austin on 11/3/14",
          "image_url": "https://pos.toasttab.com/hs-fs/hub/412971/file-1987369803-jpg/Blog_Post_Images/cloud-devices.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/cloud-based-traditional-pos-systems?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "9 Advantages of an Online Food Ordering System",
          "subtitle": "AJ Beltis on 8/24/16",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Untitled_design_27.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/online-food-ordering-system?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        }
      ],
      "buttons": [
        {
          "title": "View More",
          "type": "web_url",
          "url": "https://pos.toasttab.com/blog/topic/restaurant-technology/"
        }
      ]
    }
  }
}

responsemap[marketing] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "list",
      "top_element_style": "compact",
      "elements": [
        {
          "title": "10 Examples of Awesome Restaurant Social Media Marketing",
          "subtitle": "Kendal Austin on 4/18/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/10%20Examples%20of%20Awesome%20Social%20Media%20Marketing/social-media-restaurants-tips-min.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/examples-of-awesome-restaurant-social-media-marketing?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "27 Creative & Cool Restaurant Names",
          "subtitle": "Cameret Bannister on 7/13/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/27%20Cool%20Restaurant%20Names/restaurant-names.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/creative-cool-restaurant-names?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "75 Great Restaurant Ideas to Create an Unforgettable Concept",
          "subtitle": " Allie Tetreault on 4/1/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/great-restaurant-ideas.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/restaurant-ideas?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "10 Restaurant Promotion Ideas You Wish You Had Thought Of Earlier",
          "subtitle": "Robert Hale on 1/27/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/promotions.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/restaurant-promotion-ideas?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        }
      ],
      "buttons": [
        {
          "title": "View More",
          "type": "web_url",
          "url": "https://pos.toasttab.com/blog/topic/restaurant-marketing/"
        }
      ]
    }
  }
}

responsemap[menu] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "list",
      "top_element_style": "compact",
      "elements": [
        {
          "title": "Food Cost Formula: How to Calculate Food Cost Percentage",
          "subtitle": "Allie Tetreault on 5/22/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/toast_fcc_promo_blog-header-A%20(1)-min.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/how-to-calculate-food-cost-percentage?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "The Giant List of 101 Culinary Terms All Chefs Should Know",
          "subtitle": "Allie Tetreault on 9/2/16",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/culinary-terms-min.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/culinary-terms?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "Menu Engineering: Boost Your Menu Items' Profit and Popularity",
          "subtitle": "Allie Tetreault on 8/26/15",
          "image_url": "https://pos.toasttab.com/hubfs/Blog_Post_Images/Restaurant_Menu_1_Converted.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/menu-engineering-menu-design?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "How to Use a Menu Engineering Worksheet",
          "subtitle": "Allie Tetreault on 1/29/16",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/social-suggested-images/menu-engineering-worksheet.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/restaurant-menu-engineering-worksheet-free-menu-template?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        }
      ],
      "buttons": [
        {
          "title": "View More",
          "type": "web_url",
          "url": "https://pos.toasttab.com/blog/topic/menu-management/"
        }
      ]
    }
  }
}

responsemap[staffing] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "list",
      "top_element_style": "compact",
      "elements": [
        {
          "title": "10 Ways to Make More Money as a Restaurant Server",
          "subtitle": "Jackie Sabol on 3/21/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/toast_content_30-ways-to-become-a-better-server_blog-hero.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/how-to-get-more-tips-as-a-server?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "Culinary Crisis: The Reason for the Restaurant Chef Shortage",
          "subtitle": "Ryan Gromfin on 11/14/16",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/whoknew.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/restaurant-chef-shortage?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "6 Ways to Piss Off Your Restaurant Staff",
          "subtitle": "Lizzy Fitzgerald on 4/15/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Stock%20images/Four%20chefs%20working%20in%20a%20big%20kitchen%20at%20service%20time-785594-edited.jpeg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/ways-to-piss-off-your-restaurant-staff?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "We Need to Talk About Restaurant Managers Quitting",
          "subtitle": "Guv Callahan on 9/30/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/the-creative-exchange-373981-267501-edited.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/restaurant-managers-quitting?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        }
      ],
      "buttons": [
        {
          "title": "View More",
          "type": "web_url",
          "url": "https://pos.toasttab.com/blog/"
        }
      ]
    }
  }
}

responsemap[industryNews] = {
  "attachment": {
    "type": "template",
    "payload": {
      "template_type": "list",
      "top_element_style": "compact",
      "elements": [
        {
          "title": "The 35 Best Chefs & Restaurant Experts to Follow in 2017",
          "subtitle": "AJ Beltis on 1/19/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/experts.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/best-chefs-restaurant-experts-to-follow-in-2017?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "Food for Thought: 10 Restaurant Regulations That Affect Your Operations",
          "subtitle": "Allie Tetreault on 8/19/16",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/Blog_Post_Images/United_States_Capitol_-_west_front-551837-edited.jpg",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/restaurant-regulations?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "14 Restaurant Movies All Chefs and Restaurateurs Will Love",
          "subtitle": "AJ Beltis on 7/22/16",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/E_S_T_._1_9_6_1.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/best-restaurant-movies?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        },
        {
          "title": "The 5 Real Reasons Your Restaurant Traffic is Dipping",
          "subtitle": "Ryan Gromfin on 7/10/17",
          "image_url": "https://pos.toasttab.com/hs-fs/hubfs/restaurant.png",
          "default_action": {
            "type": "web_url",
            "url": "https://pos.toasttab.com/blog/the-5-real-reasons-your-restaurant-traffic-is-dipping?utm_campaign=Facebook%20Messenger%20Bot&utm_source=facebook&utm_medium=social",
            "messenger_extensions": true,
            "webview_height_ratio": "tall",
            "fallback_url": "https://pos.toasttab.com/blog/"
          }
        }
      ],
      "buttons": [
        {
          "title": "View More",
          "type": "web_url",
          "url": "https://pos.toasttab.com/blog/topic/industry-news-trends"
        }
      ]
    }
  }
}

console.log(responsemap);
module.exports = {
  "responsemap": responsemap,
  "introduction": "Hi {First Name}, let’s get started. I can answer any questions you have about Toast and send you top stores from the Toast Restaurant Management Blog every day. Tap the button below!",
  "whatCanIHelpYouWith": "Great! What can I help you with?",
  "isYourRestaurantInTheUSA": isYourRestaurantInTheUSA,
  "whatPOSDoYouUse": whatPOSDoYouUse,
  "commonRestaurantTypes": commonRestaurantTypes,

  //REPLIES
  "learnAboutToast": learnAboutToast,
  "currentToastCustomer":currentToastCustomer,
  "locatedInTheUSAYes":locatedInTheUSAYes,
  "locatedInTheUSANo":locatedInTheUSANo,

  "everything":everything,
  "management":management,
  "metrics":metrics,
  "technology":technology,
  "marketing": marketing,
  "menu":menu,
  "staffing":staffing,
  "industryNews":industryNews,
  "getAFreeQuote": getAFreeQuote,
  "notInTheUSA":notInTheUSA,
  //BUTTONS
  "fifteenSixteen": fifteenSixteen,
  "oneTwoSevenTwelveThirteenFourteen": oneTwoSevenTwelveThirteenFourteen,
  "fourEightNineEleven": fourEightNineEleven,
  "threeFiveSixTen": threeFiveSixTen,
  
  
  "compareWithYourPOS": compareWithYourPOS,
  "browseRestaurantTypes": browseRestaurantTypes,
  "seeToastInAction":seeToastInAction,
  "explorePricing":explorePricing,
  "shareFeedback":shareFeedback,
  "talkToCustomerSupport": talkToCustomerSupport,
  "referAFriendToToast": referAFriendToToast,
  "learnMoreAboutUpgrades": learnMoreAboutUpgrades,
  "learnAboutNewFeatures": learnAboutNewFeatures,
  "purchaseMoreHardWare": purchaseMoreHardWare,
  "integrateWithAnotherProduct": integrateWithAnotherProduct,
  "readArticles": readArticles,
  "other": other,
  "learnAboutToastFeatures": learnAboutToastFeatures,
  "one": one,
  "two": two,
  "three": three,
  "four": four,
  "five": five,
  "six": six,
  "seven": seven,
  "eight": eight,
  "nine": nine,
  "ten": ten,
  "eleven": eleven,
  "twelve": twelve,
  "thirteen": thirteen,
  "fourteen": fourteen,
  "fifteen": fifteen,
  "sixteen": sixteen,
  "toastFeatures": toastFeatures,
  "featureReply": featureReply,
  "giftCards": giftCards,
  "reporting": reporting,
  "customerLoyalty": customerLoyalty,
  "inventory": inventory,
  "onlineOrdering": onlineOrdering,
  "posOrdering": posOrdering,
  "seventeen": seventeen
};