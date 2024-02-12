import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    <div>
      <LoadingBar
        color='#03ddf1'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />
      <NavBar />
      <News pageSize={15} apiKey={apiKey} setProgress={setProgress} />
    </div>
  );
};

export default App;