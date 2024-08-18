import React, { useState } from 'react';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/mode/python/python'; // Import Python mode
import 'codemirror/mode/clike/clike';   // Import C-like mode (includes C++, Java, etc.)
import 'codemirror/mode/javascript/javascript'; // Import JavaScript mode
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';  // Optional: import a theme
 // Import the CSS file for additional styles

const modes: { [key: string]: string } = {
    python: 'python',
    java: 'text/x-java',
    cpp: 'text/x-c++src',
    javascript: 'javascript',
    typescript: 'text/typescript',
};

const CodeEditor: React.FC<{ value: string, onChange: (value: string) => void }> = ({ value, onChange }) => {
    const [language, setLanguage] = useState('python');

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
    };

    return (
        <div className="editor-container">
            <select value={language} onChange={handleLanguageChange}>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
            </select>
            <ControlledEditor
                value={value}
                onBeforeChange={(editor, data, newValue) => {
                    onChange(newValue);
                }}
                options={{
                    mode: modes[language],
                    theme: 'dracula',
                    lineNumbers: true,
                    tabSize: 2,
                }}
                className="editor"
            />
        </div>
    );
};

export default CodeEditor;