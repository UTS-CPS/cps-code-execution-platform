import axios from 'axios'
const url = import.meta.env.VITE_JUDGE0_URL

export interface SubmissionResponse {
  stdout: string
  status_id: number
  time: string
  memory: number
}

// returns a token for the GET request
export const subCode = async (code, id) => {
  const response = await axios.post(
    `${url}/submissions/?base64_encoded=false&wait=false`,
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

export const codeResult = async (
  token: string
): Promise<SubmissionResponse> => {
  return new Promise((resolve, reject) => {
    let maxAttempts = 100
    let attempts = 0
    const interval = setInterval(async () => {
      attempts++
      try {
        const response = await axios.get<SubmissionResponse>(
          `${url}/submissions/${token}?base64_encoded=false&fields=stdout,time,memory,status_id`,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
        if (response.data.status_id === 3) {
          clearInterval(interval)
          resolve(response.data)
        } else if (attempts >= maxAttempts) {
          clearInterval(interval)
          reject(new Error('Polling timed out'))
        }
      } catch (e) {
        clearInterval(interval)
        reject(e)
      }
    }, 500)
  })
}
