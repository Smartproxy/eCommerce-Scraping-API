import requests

task_params = {

    'target': 'ecommerce',
    'url': 'https://www.walmart.com/ip/Marketside-Pepperoni-Pizza-Traditional-Crust-Extra-Large-44-6-oz-Fresh/579824441?athbdg=L1600&from=searchResults',
    'device_type': 'desktop',
    'parser_type': 'ecommerce_product',
    'geo':'United States',
    'headless':'html',
    'locale':'en-us',
    'parse': 'true'

}

username = 'SPusername'
password = 'SPpassword'

response = requests.post(
    'https://scrape.smartproxy.com/v1/tasks',
    json = task_params,
    auth = (username, password)
)

print(response.text)