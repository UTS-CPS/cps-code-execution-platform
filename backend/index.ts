const axios = require('axios').default
const express = require('express')
const app = express()
require('dotenv').config()
const url = process.env.JUDGE0_BASE_URL

function getLangs() {
  axios({
    method: 'get',
    url: `${url}/languages`
  }).then(res => console.log(res.data))
}
getLangs()

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

/* let notes = [
  {
    id: '1',
    content: 'HTML is easy',
    important: true
  },
  {
    id: '2',
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: '3',
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]
app.get('/', (request, response) => {
  response.send('<h1>Hello World</h1>')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  const note = notes.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
}) */
