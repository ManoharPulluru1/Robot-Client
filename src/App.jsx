import React, { useEffect } from 'react';
import io from 'socket.io-client';
import "./App.css";

// Initialize socket connection
const socket = io('http://localhost:4000'); // Adjust to your server URL

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
      // socket.disconnect();
    };
  }, []);

  return (
    <div className='appMain'>
      <div className='Remote'>
        <div
          className='top'
          onMouseDown={() => handlePress('top')}
          onMouseUp={() => handleRelease('top')}
        >
          <div className='key'>▲</div>
        </div>
        <div className='mid mid1'>
          <div
            className='key keyLeft'
            onMouseDown={() => handlePress('left')}
            onMouseUp={() => handleRelease('left')}
          >
            ◀
          </div>
          <div
            className='key keyRight'
            onMouseDown={() => handlePress('right')}
            onMouseUp={() => handleRelease('right')}
          >
            ▶
          </div>
        </div>
        <div
          className='bot'
          onMouseDown={() => handlePress('bottom')}
          onMouseUp={() => handleRelease('bottom')}
        >
          <div className='key'>▼</div>
        </div>
      </div>
    </div>
  );
}

export default App;
