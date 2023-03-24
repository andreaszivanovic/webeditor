import React, { useEffect, useState } from 'react'
import CodeMirror from "@uiw/react-codemirror";


const Editor = (props) => {
  const {
    extension,
    displayName,
    value,
    onChange
  } = props;

  const handleChange = (editor, data, value) => {
      onChange(value)
  }

  return (
    <div className='editor-container'>
      <div className='editor-title'>
        {displayName}
        <button>O/C</button>
        <CodeMirror 
          onChange={handleChange}
          value={value}
          className={'code-mirror-wrapper'}
          extensions={extension}
        />
      </div>
    </div>
  );
}

export default Editor