import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const url = '/Users/mima1234/Codes/music-docker/src/白山茶.mp3'
function App() {
    const Player = () => (
        <AudioPlayer
          autoPlay
          control
          src={url}
          onPlay={e => console.log("onPlay")}
        />
      );
  return (
    <div className="App">
         <Player />
    </div>
  );
}

export default App;
