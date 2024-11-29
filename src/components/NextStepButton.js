// components/NextStepButton.js
import React, { useState } from 'react';

const NextStepButton = () => {
  const [showResponse, setShowResponse] = useState(false);

  const handleClick = () => {
    setShowResponse(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Следующий шаг</button>
      {showResponse && (
        <div>
          <pre>
            <code>
              {`# assistant-func-highlight-line
assistant: {'toolResults': [{'functionResult': {'name': 'serverless_func', 'content': 'Hello to David from serverless func!'}}]}`}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default NextStepButton;