const axios = require('axios').default
const express = require('express')
const app = express()
require('dotenv').config()
const url = process.env.JUDGE0_BASE_URL
const callback = process.env.CALLBACK_URL
const PORT = 8080

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`))

// i send my request from the front end, and it is received here with
// the details (language, src code etc) which is then sent to judge0
// res sends the result of this back to the front end
// i will implement a callback to avoid polling
// then i can use websockets to directly send the results to the
// front end
app.post('/submissions/', async (req, res) => {
  const { language_id, source_code } = req.body

  try {
    const response = await axios.post(
      `${url}/submissions/?base64_encoded=true&wait=false`,
      {
        source_code: source_code,
        language_id: language_id,
        callback_url: `${callback}/result/`
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit code.' })
  }
})
app.put('/result/', (req, res) => {})

function getLangs() {
  axios({
    method: 'get',
    url: `${url}/languages`
  }).then(res => console.log(res.data))
}
// getLangs()

let languages = {
  javascript: 63,
  typescript: 74,
  cpp: 54,
  c: 50,
  vb: 84,
  fsharp: 87,
  lua: 64,
  ruby: 72,
  R: 80,
  objectivec: 79,
  python: 71,
  java: 62,
  csharp: 51,
  php: 68
}
