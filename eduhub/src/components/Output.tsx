import { Box, Button, Text } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'
import { LANGUAGES } from '../constants'
import { subCode } from '../services/judge.tsx'
import { useEffect, useState } from 'react'
import { SubmissionResponse } from '../services/judge.tsx'
import { io } from 'socket.io-client'

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState<SubmissionResponse | null>(null)

  useEffect(() => {
    // Connect to WebSocket server
    const socket = io('http://localhost:8080', {
      transports: ['websocket'],
      reconnection: true
    })

    socket.on('connect', () => {
      console.log('Connected to WebSocket server')
    })

    socket.on('submissionResult', (result) => {
      console.log('Received result:', result)
      setOutput(result)
    })

    // Cleanup on unmount
    return () => {
      socket.disconnect()
    }
  }, [])

  const handleRun = async () => {
    try {
      const response = await subCode(
        btoa(editorRef.current.getValue()),
        LANGUAGES[language]
      )
      console.log('Submission sent:', response)
      // The backend will handle sending the result via WebSocket
    } catch (error) {
      console.error('Error submitting code:', error)
    }
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
