import requests

task_params = {
    'target': 'amazon_bestsellers',
    'query': '2407760011',
    'domain': 'com',
    'locale':'en-us',
    'device_type':'desktop',
    'parse':'true'
}

username = 'SPusername'
password = 'SPpassword'

response = requests.post(
    'https://scrape.smartproxy.com/v1/tasks',
    json = task_params,
    auth = (username, password)
)

print(response.text)