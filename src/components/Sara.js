import { useState } from 'react';

const Sara = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="sara-assistant" onClick={handleClick}>
      <div className="sara-bubble">
        <div className="sara-message">
          <p>How can I assist you?</p>
        </div>
        <div className="sara-avatar">
          <img src="/images/sara-avatar.png" alt="Sara AI Assistant" />
        </div>
      </div>
    </div>
  );
};

export default Sara;