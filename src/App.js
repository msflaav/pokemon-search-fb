import React from 'react';
import './App.css';
import HomePage from './pages/home';

function App() {
  return (
    <div className = 'App' 
     style = {{ backgroundImage: "url(/image.jpg)",
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat',
                height:1200,width:1800
              }}
              >
      <HomePage/>
    </div>
  );
}

export default App;
