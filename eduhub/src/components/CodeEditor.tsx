import { useRef, useState } from 'react'
import * as monaco from 'monaco-editor'
import Editor, {
  OnMount,
  DiffEditor,
  useMonaco,
  loader
} from '@monaco-editor/react'
import { Box } from '@chakra-ui/react'
import LanguageSelector from './LanguageSelector'
import { CODE_SNIPPETS } from '../constants'
const CodeEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const [value, setValue] = useState<string | undefined>('')
  const [language, setLanguage] = useState<string | undefined>('typescript')

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
      <LanguageSelector language={language} onSelect={onSelect} />
      <Editor
        height="75vh"
        theme="vs-dark"
        language={language}
        defaultValue={value}
        onMount={onMount}
        value={value}
        onChange={handleEditorChange}
      />
    </Box>
  )
}
export default CodeEditor
