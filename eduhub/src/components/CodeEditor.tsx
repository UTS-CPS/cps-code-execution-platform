import { useRef, useState } from 'react'
import * as monaco from 'monaco-editor'
import Editor, {
  OnMount,
  DiffEditor,
  useMonaco,
  loader
} from '@monaco-editor/react'
import { HStack, Box } from '@chakra-ui/react'
import LanguageSelector from './LanguageSelector'
import Output from './Output.tsx'
import { CODE_SNIPPETS } from '../constants'
const CodeEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const [value, setValue] = useState<string | undefined>('')
  const [language, setLanguage] = useState<string>('typescript')

  const handleEditorChange = (newVal: string | undefined) => {
    setValue(newVal)
  }

  const onMount: OnMount = (editor, monaco) => {
    editorRef.current = editor
    editor.focus()
  }

  const onSelect = (language: keyof typeof CODE_SNIPPETS) => {
    setLanguage(language)
    setValue(CODE_SNIPPETS[language])
  }

  return (
    <Box>
      <HStack gap={4}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={handleEditorChange}
          />
        </Box>
        <Output />
      </HStack>
    </Box>
  )
}
export default CodeEditor
