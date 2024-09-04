import React, { useEffect } from 'react';
import io from 'socket.io-client';
import "./App.css";

// Initialize socket connection
const socket = io('https://robots-server.gov-cloud.ai/'); // Adjust to your server URL

const App = () => {
  const handlePress = (direction) => {
    socket.emit('press', direction); // Emit press event with direction
  };

  const handleRelease = (direction) => {
    socket.emit('release', direction); // Emit release event with direction
  };

  useEffect(() => {
    // Disconnect socket on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className='appContainer'>
      <div className='controlPanel'>
        <div className='arrowButton' id='upButton'
          onMouseDown={() => handlePress('top')}
          onMouseUp={() => handleRelease('top')}
          onContextMenu={(e) => e.preventDefault()}>
          ▲
        </div>
        <div className='arrowButton' id='leftButton'
          onMouseDown={() => handlePress('left')}
          onMouseUp={() => handleRelease('left')}
          onContextMenu={(e) => e.preventDefault()}>
          ◀
        </div>
        <div className='arrowButton' id='rightButton'
          onMouseDown={() => handlePress('right')}
          onMouseUp={() => handleRelease('right')}
          onContextMenu={(e) => e.preventDefault()}>
          ▶
        </div>
        <div className='arrowButton' id='downButton'
          onMouseDown={() => handlePress('bottom')}
          onMouseUp={() => handleRelease('bottom')}
          onContextMenu={(e) => e.preventDefault()}>
          ▼
        </div>
      </div>
    </div>
  );
};

export default App;
