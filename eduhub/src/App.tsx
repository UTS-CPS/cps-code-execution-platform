import { Box } from '@chakra-ui/react'
import Editor from './components/CodeEditor.tsx'

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Editor />
    </Box>
  )
}

export default App
