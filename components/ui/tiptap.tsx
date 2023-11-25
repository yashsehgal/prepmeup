'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: '<p>Hello World!🌎️</p>'
  })

  return (
    <EditorContent editor={editor} />
  )
}

export default Tiptap