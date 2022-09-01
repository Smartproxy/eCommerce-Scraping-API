import requests

task_params = {
    'target': 'wayfair',
    'url': 'https://www.wayfair.com/rugs/pdp/highland-dunes-gunnell-30-x-18-non-slip-outdoor-door-mat-w005481595.html',
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