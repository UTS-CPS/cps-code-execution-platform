const express = require('express')
const axios = require('axios')
const dotenv = require('dotenv')
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')

const app = express()

// Add CORS middleware for HTTP endpoints
app.use(cors({
  origin: "http://localhost:5173",
  methods: ['GET', 'POST', 'PUT'],
  credentials: true
}))

app.use(express.json())

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST"]
  }
})
dotenv.config()
const url = process.env.JUDGE0_BASE_URL
const callback = process.env.CALLBACK_URL
const PORT = 8080

app.use(express.json())

httpServer.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))

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

// Set up socket connection
io.on('connection', (socket) => {
  console.log('Client connected')
  
  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })
})

app.put('/result/', (req, res) => {
  const submissionResult = req.body
  io.emit('submissionResult', submissionResult)
  res.status(200).send()
})

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
