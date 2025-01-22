import { useRef, useState } from 'react'
import * as monaco from 'monaco-editor'
import Editor, {
  OnMount,
  DiffEditor,
  useMonaco,
  loader
} from '@monaco-editor/react'
import { Box } from '@chakra-ui/react'
const CodeEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)
  const [value, setValue] = useState<string | undefined>('')

  const handleEditorChange = (newVal: string | undefined) => {
    setValue(newVal)
  }
  const onMount: OnMount = (editor, monaco) => {
    editorRef.current = editor
    editor.focus()
  }

  return (
    <Box>
      <Editor
        height="75vh"
        theme="vs-dark"
        defaultLanguage="typescript"
        defaultValue="// some comment"
        onMount={onMount}
        value={value}
        onChange={handleEditorChange}
      />
    </Box>
  )
}
export default CodeEditor
