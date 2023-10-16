const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")
require("dotenv").config()

const port = process.env.PORT || 3000
const apiKey = process.env.TEST_API_KEY
const apiUrl = "https://rest.messagebird.com/lookup"

const app = express()
app.use(bodyParser.json())

app.post("/", (req, res) => {
  console.log("Received POST request with data:", req.body)
  res.send("Received POST request!")
})

const requestBody = {
  ANI: "14085551212",
}

async function makePostRequest() {
  try {
    const response = await axios.post("http://localhost:3000", requestBody)
    console.log("Response from local server:", response.data)

    const messageBirdResponse = await axios.get(
      apiUrl + `/${requestBody.ANI}`,
      {
        headers: {
          Authorization: `AccessKey ${apiKey}`,
        },
      }
    )

    const { countryCode, countryPrefix, formats } = messageBirdResponse.data

    console.log("Parameters from MessageBird API Lookup:")
    console.log("Country Code:", countryCode)
    console.log("Country Prefix:", countryPrefix)
    console.log("E164 Format:", formats.e164)
  } catch (error) {
    console.error("Error:", error.message)
  }
}

makePostRequest()

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
