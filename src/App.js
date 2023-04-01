import "./App.css";
import Video from "./pages/Video";
import videoBreker from './media/brecker2.mp4'
import videoBird from './media/bird.mp4'

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={111}
          messages={222}
          shares={333}
          name="Nicholas Ribeiro"
          description="Breker é um gato fod@"
          music="Música épica"
          video={videoBreker}
        />
        <Video 
          likes={999}
          messages={888}
          shares={777}
          name="Pedro"
          description="Bird atento"
          music="Música mística"
          video={videoBird}
        />
      </div>
    </div>
  );
}

export default App;
