import requests

task_params = {
    'target': 'amazon',
    'url': 'https://www.amazon.com/dp/B09H74FXNW',
    'parse': True,
}

username = 'SPusername'
password = 'SPpassword'

response = requests.post(
    'https://scrape.smartproxy.com/v1/tasks',
    json = task_params,
    auth = (username, password)
)

print(response.text)