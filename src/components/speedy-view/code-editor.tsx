import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; // Example style, you can use another

const CodeEditor: React.FC<{
  name: string;
  backgroundText: string;
  onCodeUpdate: (text: string) => void;
  language?: 'javascript' | 'html' | 'css';
}> = ({ language = 'javascript', name, backgroundText, onCodeUpdate }) => {
  const [myCodeText, setMyCodeText] = useState('');

  useEffect(() => {
    Prism.highlightAll();
    onCodeUpdate(myCodeText);
  }, [myCodeText, onCodeUpdate]);

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
    let value = myCodeText;
    const selStartPos = evt.currentTarget.selectionStart;

    // handle 4-space indent on
    if (evt.key === 'Tab') {
      value = `${value.substring(0, selStartPos)}    ${value.substring(
        selStartPos,
        value.length,
      )}`;
      // eslint-disable-next-line no-param-reassign
      evt.currentTarget.selectionStart = selStartPos + 3;
      // eslint-disable-next-line no-param-reassign
      evt.currentTarget.selectionEnd = selStartPos + 4;
      evt.preventDefault();

      setMyCodeText(value);
    }
  };

  return (
    <div className="w-full lg:w-2/3 h-80 code-edit-container">
      <pre className="code-output">
        <code className="language-none background-code">{backgroundText}</code>
      </pre>
      <textarea
        id={name}
        name={name}
        className="code-input"
        value={myCodeText}
        onChange={(event) => setMyCodeText(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <pre className="code-output">
        <code className={`language-${language}`}>{myCodeText}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;