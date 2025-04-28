import { useRef, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import { cpp } from '@codemirror/lang-cpp'
import { go } from '@codemirror/lang-go'
import { oneDark } from '@codemirror/theme-one-dark'
import { HStack, Box } from '@chakra-ui/react'
import LanguageSelector from './LanguageSelector'
import Output from './Output'
import { CODE_SNIPPETS, LANGUAGES } from '../constants'

const LANGUAGE_EXTENSIONS: Record<string, any> = {
  javascript: javascript(),
  typescript: javascript({ typescript: true }),
  python: python(),
  cpp: cpp(),
  c: cpp(),
  go: go()
}

const CodeEditor = () => {
  const editorRef = useRef<{ getValue: () => string } | null>(null)
  const [value, setValue] = useState('')
  const [language, setLanguage] =
    useState<keyof typeof CODE_SNIPPETS>('typescript')

  const onSelect = (lang: keyof typeof CODE_SNIPPETS) => {
    setLanguage(lang)
    setValue(CODE_SNIPPETS[lang])
  }

  const handleCreateEditor = (view: any) => {
    editorRef.current = {
      getValue: () => view.state.doc.toString()
    }
    view.focus()
  }

  return (
    <Box>
      <HStack gap={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <CodeMirror
            value={value}
            height="75vh"
            theme={oneDark}
            extensions={[LANGUAGE_EXTENSIONS[language]]}
            onChange={val => setValue(val)}
            onCreateEditor={handleCreateEditor}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  )
}

export default CodeEditor
