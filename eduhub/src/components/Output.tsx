import { Box, Button, Text } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'
import { LANGUAGES } from '../constants'
import { subCode, codeResult } from '../services/judge.tsx'
import { useEffect, useState } from 'react'
import { SubmissionResponse } from '../services/judge.tsx'

const Output = ({ editorRef, language }) => {
  const [tken, setToken] = useState('')
  const [output, setOutput] = useState<SubmissionResponse | null>(null)

  // this should send a POST request to the back end
  const handleRun = () => {
    const response = subCode(
      btoa(editorRef.current.getValue()),
      LANGUAGES[language]
    )
    /* response.then(data => {
      console.log(data)
      runOutput(data.token)
      setToken(data.token)
    }) */
  }

  const runOutput = token => {
    const response = codeResult(token)
    response.then(data => {
      console.log(data)
      setOutput(data)
    })
  }

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg"></Text>
      <Button
        variant="outline"
        colorPalette="green"
        fontSize="lg"
        mb={4}
        onClick={handleRun}
      >
        Run <FaPlay />
      </Button>
      <Box
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
        bg="gray.900"
        color="gray.200"
      >
        Output: {output?.stdout} <br />
        Time: {output?.time} <br />
        Memory: {output?.memory
          ? (output.memory / 1024).toFixed(2)
          : 'N/A'} MB <br />
      </Box>
    </Box>
  )
}
export default Output
