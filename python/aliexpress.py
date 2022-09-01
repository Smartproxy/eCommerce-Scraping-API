import requests

task_params = {
    'target': 'aliexpress',
    'url': 'https://www.aliexpress.com/wholesale?&SearchText=louis+v',
    'parse': False,
}

username = 'SPusername'
password = 'SPpassword'

response = requests.post(
    'https://scrape.smartproxy.com/v1/tasks',
    json = task_params,
    auth = (username, password)
)

print(response.text)