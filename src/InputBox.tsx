import './header.css';
import './properties.css';
import React from 'react';
import annyang from 'annyang';

function InputBox() {
  const [inputValue, setInputValue] = React.useState('');

  function handleInputChange(event) {
    const { value } = event.target;
    const maxLineLength = 1000; // maximum characters per line
    const lines = value.split('\n');
    const newLines = lines.map((line) => {
      if (line.length > maxLineLength) {
        const chunks = [];
        while (line.length) {
          chunks.push(line.substring(0, maxLineLength));
          line = line.substring(maxLineLength);
        }
        return chunks.join('\n');
      } else {
        return line;
      }
    });
    const newValue = newLines.join('\n');
    setInputValue(newValue);
  }

  function handleProcessClick() {
    // do something with the input value
    console.log(inputValue);
  }

  function handleClearClick() {
    setInputValue('');
  }

  function handleMicrophoneClick() {
    if (annyang) {
      annyang.start({ autoRestart: false, continuous: false });
      annyang.addCallback('result', function(event) {
        const transcript = event[0];
        setInputValue(transcript);
      });
    } else {
      console.log('Speech recognition not supported');
    }
  }

  return (
    <div>
      <div className="Box"></div>
      <div className="InnerBox">
        <textarea
          className="InputBox"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Place a order..."
        />
      </div>
      <button className="ProccesButton ButtonFont" onClick={handleProcessClick}>Process</button>
      <button className="ResetButton ButtonFont" onClick={handleClearClick}>Clear</button>
      <button className="InvisibleButton" onClick={handleMicrophoneClick}>
        <i className="fas fa-microphone"></i>
      </button>
    </div>
  );
}

export default InputBox;
