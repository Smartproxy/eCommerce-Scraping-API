import requests

task_params = {
    'target': 'idealo',
    'url': 'https://www.idealo.co.uk/compare/200584791/sony-playstation-5-ps5-digital-edition.html',
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