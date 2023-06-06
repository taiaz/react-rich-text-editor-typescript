import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './style.css';

export default function App() {
  const [value, setValue] = useState('');
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      [{ font: [] }],
      [
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'link',
        'header',
        'font',
        'size',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'color',
        { align: [] },
      ],
    ],
  };

  return (
    <div className="quillContainer">
      <ReactQuill
        theme="snow"
        placeholder="Enter your rich text edtior"
        modules={modules}
        value={value}
        onChange={setValue}
      />
      <h3>Check details implement on furetechnews.com</h3>
      <a
        href="https://furetechnews.com/the-5-best-react-rich-text-editor/"
        target="_blank"
      >
        The 5 best React Rich Text Editor
      </a>
    </div>
  );
}
