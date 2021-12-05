import React, {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Tuesday",
      artist: "Burak Yeter Feat. Danelle Sandoval",
      cover: './images/Tuesday.jpg',
      src: "./music/Burak Yeter-Tuesday.mp3"
    },
    {
      title: "Moonlight",
      artist: "xxxTentaction",
      cover: "./images/Moonlight.jpg",
      src: "./music/Moonlight-xxxTentaction.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongIndex]);
  
  return (
    <div className="App">
      <Player 
      currentSongIndex={currentSongIndex} 
      setCurrentSongIndex={setCurrentSongIndex} 
      nextSongIndex={nextSongIndex} 
      songs={songs}
      />
    </div>
  );
}

export default App;
