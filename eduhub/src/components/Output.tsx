import { Box, Button, Text } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'

const Output = () => {
  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg"></Text>
      <Button variant="outline" colorPalette="green" fontSize="lg" mb={4}>
        Run <FaPlay />
      </Button>
      <Box
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
        test
      </Box>
    </Box>
  )
}
export default Output
