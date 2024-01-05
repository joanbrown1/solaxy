import React, { useRef, useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const CopyToClipboardButton = ({ text }) => {
  const textRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    textRef.current.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    // Show the popup for a short duration
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        ref={textRef}
        value={text}
        readOnly
        style={{ position: 'absolute', left: '-9999px' }}
      />
      <button onClick={handleCopyClick} style={{ marginRight: '5px' }} className='font-thin'>
        <FaCopy />
      </button>
      {isCopied && <div style={{ display: 'inline' }} className='font-thin'>Copied!</div>}
    </div>
  );
};

export default CopyToClipboardButton;
