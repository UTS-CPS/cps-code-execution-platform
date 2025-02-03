import axios from 'axios'
const backendUrl = 'http://localhost:8080' // Your backend URL

export interface SubmissionResponse {
  stdout: string
  status_id: number
  time: string
  memory: number
}

// returns a token for the GET request
export const subCode = async (code, id) => {
  const response = await axios.post(
    `${backendUrl}/submissions/`,
    {
      source_code: code,
      language_id: id
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  return response.data
}

// You can remove or comment out the codeResult function since we'll be getting results via WebSocket
