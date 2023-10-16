# MessageBirdAPI

## Description

The code sets up an Express.js server to handle incoming POST requests. Upon receiving a POST request, it logs the request data and sends a response.
It also makes a POST request to a local URL and subsequently retrieves data from the MessageBird API using axios. 
The output of this call must be the below
parameters obtained by calling MessageBird API.
Parameters to display:
- countryCode
- countryPrefix
- e164

## Prerequisites

- Node.js installed
- npm package manager installed
- MessageBird API credentials (AccessKey)

### Setup:
1. Clone this repository.
2. Install the required npm packages using npm install.
3. Set up a .env file with the following content:

```
PORT=3000
TEST_API_KEY=your_messagebird_api_key
```
## Usage

Just start the server by running `node index.js.` from terminal.
