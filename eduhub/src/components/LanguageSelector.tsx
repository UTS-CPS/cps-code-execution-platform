import { Button } from '@chakra-ui/react/button'
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger
} from '@chakra-ui/react/menu'
import { Box, Text } from '@chakra-ui/react'
import { CODE_SNIPPETS, LANGUAGE_VERSIONS } from '../constants'
const languages = Object.entries(LANGUAGE_VERSIONS)

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <Box>
      <Text mb={2} fontSize="lg">
        Language:{' '}
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="outline" size="sm">
              {language}
            </Button>
          </MenuTrigger>
          <MenuContent position="absolute" zIndex="popover">
            {languages.map(([language, version]) => (
              <MenuItem
                key={language}
                value={language}
                onClick={() => onSelect(language)}
              >
                <Text as="span" color="gray.500" fontSize="sm">
                  {language} - {version}
                </Text>
              </MenuItem>
            ))}
          </MenuContent>
        </MenuRoot>
      </Text>
    </Box>
  )
}

export default LanguageSelector
