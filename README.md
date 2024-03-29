
# eCommerce Scraping API

<p align="center">
    <a href="https://dashboard.smartproxy.com/register?page=ecommerce-scraping-api%2Fpricing&utm_source=socialorganic&utm_medium=social&utm_campaign=github_ecommerce_scraper" ><img src="https://i.imgur.com/v707ui6.png"></a>
</p>


## List of contents
- [Introduction](#introduction)
- [Authentication](#authentication)
- [Amazon](#amazon)
- [Wayfair](#wayfair)
- [Other Sites](#other_sites)
- [Targets](#targets)
- [Parameters](#parameters)
- [Response Codes](#response-codes)
- [Postman Collection](#postman-collection)
- [License](#license)

## Introduction

With [our eCommerce Scraping API](https://smartproxy.com/scraping/ecommerce
), you can gather most important data from eCommerce websites. Most notably and in depth, Amazon, but also Wayfair.
## Authentication

Once you have an active eCommerce subscription, you can try sending a request right from the dashboard eCommerce > Authentication method tab simply by entering your username, password, and clicking on Generate. You will also see an example of curl request generated right below your entered user:pass.

Note that this is only an example with preset values to get you on the right track for forming your own request, meaning you will not be able to change the request values in the dashboard itself – that will have to be done in your code.



## Amazon

Amazon can be targeted using direct URL, by using the Amazon product ID, or Amazon search bar. 

You can also retrieve Amazon reviews, as well as questions and answers about a product.

### Amazon Product

API Link: https://scraper-api.smartproxy.com/v2/scrape

```http
  POST /scrape
```

### Target: ```amazon```(mostly parseable)
Required parameters: ```url```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `url` |  Amazon product page URL |
| `target` | `string` | Scraping target |

### Response

First 2 top & bottom ads and product listing info
```http
            {
  "results": [
    {
      "content": {
        "ads": [
          {
            "pos": 1,
            "asin": "B07TC8J6HK",
            "type": "sponsored_highly_rated",
            "price": 28.99,
            "title": "Jeecoo USB Pro Gaming Headset for PC - 7.1 Surround Sound Headphones with Noise Cancelling Microphone- Memory Foam Ear Pads RGB Lights for Laptops",
            "images": [
              "https://m.media-amazon.com/images/I/416Q4VpWM+L._AC_SR160,160_.jpg"
            ],
            "rating": 4.5,
            "location": "carousel",
            "price_upper": 28.99,
            "reviews_count": 20122,
            "is_prime_eligible": true
          },
          {
            "pos": 2,
            "asin": "B09MJB8QZN",
            "type": "sponsored_highly_rated",
            "price": 19.99,
            "title": "Gaming Headset with Microphone, Gaming Headphones Stereo 7.1 Surround Noise Cancelling Xbox Headset PS4 Headset for PS5 Xbox one PC Switch Playstation Laptop",
            "images": [
              "https://m.media-amazon.com/images/I/41VM7Iz2MbL._AC_SR160,160_.jpg"
            ],
            "rating": 4,
            "location": "carousel",
            "price_upper": 19.99,
            "reviews_count": 97,
            "is_prime_eligible": true
          },
          {
            "pos": 3,
            "asin": "B012DFI02O",
            "type": "sponsored_highly_rated",
            "price": 18.69,
            "title": "VersionTECH. G2000 Gaming Headset for PS5 PS4 PC Xbox One, Surround Sound Over Ear Headphones with Mic, LED Light for Mac Laptop Switch Playstation Xbox Series X/S -Blue",
            "images": [
              "https://m.media-amazon.com/images/I/517CVbs+2xS._AC_SR160,160_.jpg"
            ],
            "rating": 4.5,
            "location": "carousel",
            "price_upper": 18.69,
            "reviews_count": 13110,
            "is_prime_eligible": true
          },
          {
            "pos": 1,
            "asin": "B0B2JSYWL3",
            "type": "sponsored_products_bottom",
            "price": 49.99,
            "title": "Gaming Headset with Microphone, LTXHorde Over Ear Gaming Headphone with Noise Cancelling, RGB Wired Gamer Headset, Hi-Fi Stereo Surround Sound, LED Lights, for PC, Laptop, PS4, PS5, Xbox, iPad, Switch",
            "images": [
              "https://m.media-amazon.com/images/I/41ZcjPDzzXL._AC_SR160,160_.jpg"
            ],
            "rating": 0,
            "location": "carousel",
            "price_upper": 49.99,
            "reviews_count": 0,
            "is_prime_eligible": true
          },
          {
            "pos": 2,
            "asin": "B09LQP7V3S",
            "type": "sponsored_products_bottom",
            "price": 59.99,
            "title": "SOMIC GS510 Gaming Headset, Cat Ear Headset PC Gaming Headphones with Retractable Mic Noise Cancelling, Stereo Sound, DIY Face Covers for PC, PS4, PS5,Xbox One(Only White LED Light)",
            "images": [
              "https://m.media-amazon.com/images/I/41D6Qku154L._AC_SR160,160_.jpg"
            ],
            "rating": 4,
            "location": "carousel",
            "price_upper": 59.99,
            "reviews_count": 551,
            "is_prime_eligible": true
          },
          {
            "pos": 1,
            "asin": "B0B71N6XG5",
            "type": "organic_also_viewed",
            "price": 27.99,
            "title": "",
            "images": [
              "https://m.media-amazon.com/images/I/415P1K4iYCL._SS150_.jpg"
            ],
            "rating": 0,
            "location": "carousel",
            "price_upper": 27.99,
            "reviews_count": 0,
            "is_prime_eligible": false
          }
        ],
        "url": "https://www.amazon.com/dp/B09H74FXNW",
        "asin": "B09H74FXNW",
        "page": 1,
        "price": 20.98,
        "stock": "In Stock.",
        "title": "Gaming Headset with Microphone, Gaming Headphones Stereo 7.1 Surround Sound PS4 Headset 50mm Drivers, 3.5mm Audio Jack Over Ear Headphones Wired for PC Switch Playstation Xbox PS5 Laptop",
        "buybox": {
          "used": 17.7,
          "buy_new": 20.98
        },
        "coupon": "",
        "images": [
          "https://m.media-amazon.com/images/I/71+jTaVbHxL._AC_SL1450_.jpg",
          "https://m.media-amazon.com/images/I/715fsq+rZaL._AC_SL1450_.jpg",
          "https://m.media-amazon.com/images/I/713OLdYw+iL._AC_SL1280_.jpg",
          "https://m.media-amazon.com/images/I/71ZEBbRz2eL._AC_SL1450_.jpg",
          "https://m.media-amazon.com/images/I/713OLdYw+iL._AC_SL1280_.jpg",
          "https://m.media-amazon.com/images/I/71ILJdNwbjL._AC_SL1450_.jpg",
          "https://m.media-amazon.com/images/I/81fhbj7zQNL._AC_SL1450_.jpg",
          "https://m.media-amazon.com/images/I/71662ua-CpL._AC_SL1450_.jpg"
        ],
        "rating": 4.4,
        "category": [
          {
            "ladder": [
              {
                "url": "/computer-video-games-hardware-accessories/b/ref=dp_bc_aui_C_1/131-2911047-2733206?ie=UTF8&node=468642",
                "name": "Video Games"
              },
              {
                "url": "/Mac-Games/b/ref=dp_bc_aui_C_2/131-2911047-2733206?ie=UTF8&node=229647",
                "name": "Mac"
              },
              {
                "url": "/Mac-Accessories/b/ref=dp_bc_aui_C_3/131-2911047-2733206?ie=UTF8&node=318812011",
                "name": "Accessories"
              },
              {
                "url": "/Mac-Game-Headsets/b/ref=dp_bc_aui_C_4/131-2911047-2733206?ie=UTF8&node=405593011",
                "name": "Headsets"
              }
            ]
          }
        ],
        "currency": "USD",
        "delivery": [
          {
            "date": {
              "by": "Wednesday, September 7",
              "from": null
            },
            "type": "FREE delivery"
          },
          {
            "date": {
              "by": "Saturday, September 3",
              "from": null
            },
            "type": "Or fastest delivery"
          }
        ],
        "_warnings": [
          "Could not parse lightning deal."
        ],
        "deal_type": "",
        "page_type": "Product",
        "price_sns": 0,
        "variation": [
          {
            "asin": "B09H74FXNW",
            "selected": true,
            "dimensions": {
              "Color": "A Camo Gray"
            },
            "tooltip_image": "https://m.media-amazon.com/images/I/414I6MAMwfL._SS36_.jpg"
          },
          {
            "asin": "B09K476WW1",
            "selected": false,
            "dimensions": {
              "Color": "Black Gray"
            },
            "tooltip_image": "https://m.media-amazon.com/images/I/414I6MAMwfL._SS36_.jpg"
          },
          {
            "asin": "B09XJVXDGL",
            "selected": false,
            "dimensions": {
              "Color": "Camo LED"
            },
            "tooltip_image": "https://m.media-amazon.com/images/I/414I6MAMwfL._SS36_.jpg"
          },
          {
            "asin": "B0B5CD5QL3",
            "selected": false,
            "dimensions": {
              "Color": "Blue"
            },
            "tooltip_image": "https://m.media-amazon.com/images/I/414I6MAMwfL._SS36_.jpg"
          }
        ],
        "has_videos": true,
        "sales_rank": [
          {
            "rank": 101,
            "ladder": [
              {
                "url": "/gp/bestsellers/videogames/ref=pd_zg_ts_videogames",
                "name": "Video Games "
              }
            ]
          },
          {
            "rank": 2,
            "ladder": [
              {
                "url": "/gp/bestsellers/videogames/405593011/ref=pd_zg_hrsr_videogames",
                "name": "Mac Game Headsets"
              }
            ]
          }
        ],
        "top_review": "For the price of this I was worried how well it would really work. To my surprise it’s like a top of the line product. Works better than I expected it to. The cord is longer than some but that’s what I needed for my set up. They also give a cord to hook it up to your pc if you are a pc gamer rather than a console gamer so it’s a win win for everyone. The ear pieces are bigger than I expected but I like this as it actually slows the noise cancellation to actually work. You can’t hear someone screaming at you for a long period of time. The sound quality is amazing considering this isn’t one of the best known brands out there. Usually you have to pay more money to get good quality. This however is not the case. Been extremely satisfied since receiving this and has been used on a daily basis for about a month now with no issues. The mouthpiece to talk into you can adjust it more than you think it’s made of this bendy rubber material that allows you to bend it inwards or outwards to make your voice clearer on the receiving end. Most models do not offer this so this is a real welcomed bonus! I highly recommend this product. You can wear the headset for an extended period of time like a few hours and it not give you a headache or earache. Look no further this is the best headset out of at least a dozen that I’ve bought and used.\n  \nRead more",
        "asin_in_url": "B09H74FXNW",
        "description": "1. Extremely Comfortable Wearing: the gaming headphones with microphone uses protein memory foam padded headband, cozy to long time wear. Flexible extendable headband, fits different people's demand. Fully-wrapped earmuff will not press your ear.",
        "price_upper": 20.98,
        "pricing_str": "",
        "pricing_url": "https://www.amazon.com/gp/offer-listing/B09H74FXNW?startIndex=0",
        "discount_end": "",
        "manufacturer": "BettergamesBetterlife",
        "max_quantity": 5,
        "price_buybox": 20.98,
        "product_name": "Gaming Headset with Microphone, Gaming Headphones Stereo 7.1 Surround Sound PS4 Headset 50mm Drivers, 3.5mm Audio Jack Over Ear Headphones Wired for PC Switch Playstation Xbox PS5 Laptop",
        "bullet_points": "Make sure this fits by entering your model number.\nImmersive Stereo - Gaming headset with microphone is 7.1 Surround Sound from our professional gaming headsets, outfitted with 50mm neodymium magnet driver, gives vivid and clear sound field, deep bass. Accurate positional audio across any game environment, our gaming headphones with microphone help you get better performance in game, .ps4 games, ps5 games, xbox one games, wii games, etc.\nAll-day Comfort - Extremely light design for all-day wearing, gaming headset are padded with breathable and durable protein soft memory foam cushions, preventing overheating and pressure build-up and pc gaming headset is built with adjustable headband. A must-have PC headsets, xbox headset, ps4 headset, every gamer will enjoy with this wired headphones.\n360° Noise Cancelling Mic - 160° retractable, 360° omnidirectionally rotatable sensitive microphone, premium noise cancellation, sound localisation, this gaming headset pc helps pick up sound quickly, eliminate unwanted noise from environment, deliver messages clearly during gameplay. Adjustable microphone can be swivelled to the right position at any time.\nIn-line Audio Controls - This PC game headsets have an volume control wheel and mic mute switch on the gaming headset ps4 with microphone for quick and convenient adjustments. High tensile strength, anti-entanglement braided USB cable prevents the ps4 headset with mic cable from chaos, and help easily control the volume or one-key microphone mute.\nUniversally Compatible - xbox headphones wired Support PlayStation 4, New Xbox One, PC, Nintendo 3DS, Laptop, PSP, Tablet, iPad, Computer, Mobile Phone. Please note you need an extra Microsoft Adapter (Not Included) when this xbox one headset connect with an old version Xbox One controller, Sega Genesis.",
        "is_addon_item": false,
        "price_initial": 0,
        "pricing_count": 0,
        "reviews_count": 2239,
        "sns_discounts": [],
        "developer_info": [],
        "lightning_deal": null,
        "price_shipping": 0,
        "is_prime_pantry": false,
        "product_details": {
          "asin": "B09H74FXNW",
          "item_weight": "1.17 pounds",
          "manufacturer": "FEIYING",
          "customer_reviews": "4.4 out of 5 stars 2,239 ratings 4.4 out of 5 stars",
          "best_sellers_rank": "#101 in Video Games (See Top 100 in Video Games) #2 in Mac Game Headsets",
          "item_model_number": "K5MC",
          "package_dimensions": "9.49 x 7.36 x 4.61 inches",
          "date_first_available": "August 25, 2021"
        },
        "featured_merchant": {
          "link": "/gp/help/seller/at-a-glance.html/ref=dp_merchant_link?ie=UTF8&seller=A99HKVS6N0RPL&asin=B09H74FXNW&ref_=dp_merchant_link&isAmazonFulfilled=1",
          "name": "Fandraw US",
          "seller_id": "A99HKVS6N0RPL",
          "shipped_from": "Amazon",
          "is_amazon_fulfilled": true
        },
        "is_prime_eligible": false,
        "parse_status_code": 12005,
        "answered_questions_count": 39,
        "rating_stars_distribution": [
          {
            "rating": 5,
            "percentage": 72
          },
          {
            "rating": 4,
            "percentage": 13
          },
          {
            "rating": 3,
            "percentage": 6
          },
          {
            "rating": 2,
            "percentage": 3
          },
          {
            "rating": 1,
            "percentage": 7
          }
        ]
      },
      "status_code": 200,
      "url": "https://www.amazon.com/dp/B09H74FXNW",
      "task_id": "6971060034289555457",
      "created_at": "2022-09-01 11:03:48",
      "updated_at": "2022-09-01 11:04:13"
    }
  ]
}
        
```
### Examples

| Programming Language | Example location         | Download |
| -------------------- | ------------------------ | -------- |
| Python                  | [python/amazon.py](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/python/amazon.py) |``` curl hhttps://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/python/amazon.py > amazon.py ``` |
| PHP                 | [php/amazon.php](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/php/amazon.php)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/php/amazon.php > amazon.php  ``` |
| Node.js                 | [nodejs/amazon.js](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/nodejs/amazon.js)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/nodejs/amazon.js > amazon.js ``` |


### Target: ```amazon_product``` (parseable)
Required parameters: ```query```

Target by supplying Amazon product ID (ASIN) using the query parameter.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` |  Amazon product ID (ASIN) |
| `target` | `string` | Scraping target |

### Examples

| Programming Language | Example location         | Download |
| -------------------- | ------------------------ | -------- |
| Python                  | [python/amazonproduct.py](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/python/amazonproduct.py) |``` curl hhttps://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/python/amazonproduct.py > amazonproduct.py ``` |
| PHP                 | [php/amazonproduct.php](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/php/amazonproduct.php)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/php/amazonproduct.php > amazonproduct.php  ``` |
| Node.js                 | [nodejs/amazonproduct.js](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/nodejs/amazonproduct.js)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/nodejs/amazonproduct.js > amazonproduct.js ``` |

### Target: ```amazon_pricing```(parseable)
Required parameters: ```query```

Retrieve Amazon pricing results by supplying Amazon product ID (ASIN).

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` |  Amazon product ID (ASIN) |
| `target` | `string` | Scraping target |

### Examples

| Programming Language | Example location         | Download |
| -------------------- | ------------------------ | -------- |
| Python                  | [python/amazonpricing.py](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/python/amazonpricing.py) |``` curl hhttps://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/python/amazonpricing.py > amazonpricing.py ``` |
| PHP                 | [php/amazonpricing.php](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/php/amazonpricing.php)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/php/amazonpricing.php > amazonpricing.php  ``` |
| Node.js                 | [nodejs/amazonpricing.js](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/nodejs/amazonpricing.js)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/nodejs/amazonpricing.js > amazonpricing.js ``` |

### Target: ```amazon_reviews```(parseable)
Required parameters: ```query```

Retrieve Amazon reviews by supplying Amazon product ID (ASIN).

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` |  Amazon product ID (ASIN) |
| `target` | `string` | Scraping target |

### Examples

| Programming Language | Example location         | Download |
| -------------------- | ------------------------ | -------- |
| Python                  | [python/amazonreviews.py](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/python/amazonreviews.py) |``` curl hhttps://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/python/amazonreviews.py > amazonreviews.py ``` |
| PHP                 | [php/amazonreviews.php](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/php/amazonreviews.php)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/php/amazonreviews.php > amazonreviews.php  ``` |
| Node.js                 | [nodejs/amazonreviews.js](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/nodejs/amazonreviews.js)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/nodejs/amazonreviews.js > amazonreviews.js ``` |

### Target: ```amazon_questions``` (parseable)
Required parameters: ```query```

Retrieve Amazon questions and answers by supplying Amazon product ID (ASIN).

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` |  Amazon product ID (ASIN) |
| `target` | `string` | Scraping target |

### Examples

| Programming Language | Example location         | Download |
| -------------------- | ------------------------ | -------- |
| Python                  | [python/amazonquestions.py](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/python/amazonquestions.py) |``` curl hhttps://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/python/amazonquestions.py > amazonquestions.py ``` |
| PHP                 | [php/amazonquestions.php](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/php/amazonquestions.php)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/php/amazonquestions.php > amazonquestions.php  ``` |
| Node.js                 | [nodejs/amazonquestions.js](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/nodejs/amazonquestions.js)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/nodejs/amazonquestions.js > amazonquestions.js ``` |

### Target: ```amazon_search``` (parseable)
Required parameters: ```query```

Retrieve Amazon listings by supplying your query to the Amazon search bar.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` |  Amazon search query |
| `target` | `string` | Scraping target |

### Examples

| Programming Language | Example location         | Download |
| -------------------- | ------------------------ | -------- |
| Python                  | [python/amazonsearch.py](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/python/amazonsearch.py) |``` curl hhttps://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/python/amazonsearch.py > amazonsearch.py ``` |
| PHP                 | [php/amazonsearch.php](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/php/amazonsearch.php)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/php/amazonsearch.php > amazonsearch.php  ``` |
| Node.js                 | [nodejs/amazonsearch.js](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/nodejs/amazonsearch.js)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/nodejs/amazonsearch.js > amazonsearch.js ``` |

### Target: ```amazon_bestsellers```(parseable)

Required parameters: ```query```

Retrieve Amazon listings by supplying your query to the Amazon search bar.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` |  Bestseller category ID |
| `target` | `string` | Scraping target |

### Examples

| Programming Language | Example location         | Download |
| -------------------- | ------------------------ | -------- |
| Python                  | [python/amazonbestsellers.py](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/python/amazonbestsellers.py) |``` curl hhttps://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/python/amazonbestsellers.py > amazonbestsellers.py ``` |
| PHP                 | [php/amazonbestsellers.php](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/php/amazonbestsellers.php)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/php/amazonbestsellers.php > amazonbestsellers.php  ``` |
| Node.js                 | [nodejs/amazonbestsellers.js](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/nodejs/amazonbestsellers.js)  | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/nodejs/amazonbestsellers.js > amazonbestsellers.js ``` |



## Wayfair

Wayfair can be targeted using direct URL, by providing the query parameter to the Wayfair search bar, or by providing the Wayfair product ID.

### Target: ```wayfair``` (not parseable)
Required parameters: ```url```

Target by supplying direct URL link.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `url` |  Wayfair product URL |
| `target` | `string` | Scraping target |

### Examples

| Programming Language | Example location         | Download |
| -------------------- | ------------------------ | -------- |
| Python                  | [python/wayfair.py](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/python/wayfair.py) |``` curl hhttps://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/python/wayfair.py > wayfair.py ``` |
| PHP                 | [php/wayfair.php](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/php/wayfair.php)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/php/wayfair.php > wayfair.php  ``` |
| Node.js                 | [nodejs/wayfair.js](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/nodejs/wayfair.js)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/nodejs/wayfair.js > wayfair.js ``` |


### Target: ```wayfair_search``` (not parseable)
Required parameters: ```query```

Target by supplying query parameter to the Wayfair search bar.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` |  Wayfair search query |
| `target` | `string` | Scraping target |

### Examples

| Programming Language | Example location         | Download |
| -------------------- | ------------------------ | -------- |
| Python                  | [python/wayfairsearch.py](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/python/wayfairsearch.py) |``` curl hhttps://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/python/wayfairsearch.py > wayfairsearch.py ``` |
| PHP                 | [php/wayfairsearch.php](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/php/wayfairsearch.php)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/php/wayfairsearch.php > wayfairsearch.php  ``` |
| Node.js                 | [nodejs/wayfairsearch.js](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/nodejs/wayfairsearch.js)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/nodejs/wayfairsearch.js > wayfairsearch.js ``` |

## Other Sites

Retrieve results from **any** eCommerce website by supplying a full URL of the website to the url parameter. In this case, additional parameters can be specified in the URL itself.

### Target: ```ecommerce``` (mostly parseable (Using AI parser))
Required parameters: ```url```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `url` | `string` |  Ecommerce site url |
| `target` | `string` | Scraping target |


Note that to get a result with the AI parser, you will need to set the ```parse``` parameter as ```'true'``` and ```parser_type``` parameter as ```ecommerce_product```.

### Examples

| Programming Language | Example location         | Download |
| -------------------- | ------------------------ | -------- |
| Python                  | [python/ecommerce.py](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/python/ecommerce.py) |``` curl hhttps://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/python/ecommerce.py > ecommerce.py ``` |
| PHP                 | [php/ecommerce.php](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/php/ecommerce.php)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/php/ecommerce.php > ecommerce.php  ``` |
| Node.js                 | [nodejs/ecommerce.js](https://github.com/Smartproxy/eCommerce-Scraping-API/blob/main/nodejs/ecommerce.js)   | ``` curl https://raw.githubusercontent.com/Smartproxy/eCommerce-Scraping-API/main/nodejs/ecommerce.js > ecommerce.js ``` |

## Targets

### List of supported targets for the 'target' parameter
```
amazon
amazon_product
amazon_pricing
amazon_reviews
amazon_questions
amazon_search
amazon_sellers
amazon_bestsellers
wayfair
wayfair_search
ecommerce
```

## Parameters

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `target` | `string` |  Data source. Available targets are listed [here](#targets). |
| `url` | `url` | Direct URL (link) |
| `locale` | `string` | This will change the web interface language. Example: – en-US – en-GB |
| `geo` | `string` | The geographical location that the result depends on. City location names, state names, country names, coordinates and radius, Google’s Canonical |
| `device_type` | `string` | Device type and browser. Supported: ```desktop```, ```desktop_chrome```, ```desktop_firefox```, ```mobile```, ```mobile_android```, ```mobile_ios```. |
| `headless` | `string` | Enable JavaScript rendering. Supported: ```html```, ```png``` |
| `parser_type` | `string` | Enable product page parsing for ```ecommerce``` target  |

## Response Codes

### HTTP Response Codes

| Response | Description     | Solution                |
| :-------- | :------- | :------------------------- |
| **200** - Success | Server has replied and given requested response.	 | Celebrate! |
| **204** - No content | Job not completed yet. | Wait a few seconds before trying again. |
| **400** - Multiple error messages | Bad structure of the request. | Re-check your request to make sure it is in the correct format. |
| **401** - Invalid / not provided authorization header (client not found) | Incorrect login credentials or missing authorization. | Re-check your provided credentials for authorization. |
| **403** - Forbidden | Your account does not have access to this resource. | Make sure the target is supported by us |
| **404** - Not found | Your target was not found. | Re-check your targeted URL. |
| **429** - Too many requests | Exceeded rate limit for your subscription. | Make sure you still have at least one request left. Wait a couple minutes and try again. If you are encountering the error often – chat with us to see if your rate limit can be increased. |
| **500** - Internal error | Service unavailable, possibly due to some issues we are encountering. | Wait a couple minutes and send another request. Contact us for more information. |
| **524** - Timeout | Service unavailable, possibly due to some issues we are encountering. | Wait a couple minutes and send another request. Contact us for more information. |

### Parsed Result Response Codes

| Response | Description |
| :-------- | :------- | 
| **12000** - Success | Server has replied and given the requested response. |
| **12002** - Error | Parsing has failed completely. |
| **12003** - Not supported | Targeted website parsing is not supported. |
| **12004** - Response not full | Some fields were not parsed and are missing. |
| **12005** - Response not fully parsed | Some fields might not have been parsed and are returned unparsed. |
| **12006** - Error | Unexpected error. Let us know the task ID and we will check what went wrong. |
| **12007** - Unknown | We could not determine whether the data was parsed correctly. |
| **12008** - Error | Failed to parse all the data. |
| **12009** - Error | Target not found. Make sure the parameters you passed are correct and supported. |

## Postman Collection

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23304112-92a123e7-171c-497e-8ca1-57eff04361f3?action=collection%2Ffork&collection-url=entityId%3D23304112-92a123e7-171c-497e-8ca1-57eff04361f3%26entityType%3Dcollection%26workspaceId%3D52705bab-433c-4fbf-afce-ccbfc97430fe)


## License

All code is released under [MIT License](https://github.com/Smartproxy/Smartproxy/blob/master/LICENSE)
