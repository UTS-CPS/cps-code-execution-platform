import axios from 'axios'

const JUDGE0_API_URL = process.env.REACT_APP_JUDGE0_API_URL

export interface SubmissionResult {
  status: {
    id: number
    description: string
  }
  stdout?: string
  stderr?: string
  compile_output?: string
  time?: string
  memory?: number
  [key: string]: any
}
