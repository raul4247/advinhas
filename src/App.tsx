import './App.css';
import { Header } from './components/Header';
import { Grid } from './components/gridSection/Grid';
import { Keyboard } from './components/keyboardSection/Keyboard';

function App() {
  return (
    <div className="h-screen flex flex-col bg-[#212121] text-white">
      <div className="">
        <Header />
      </div>
     
        <div className="h-full flex place-items-center justify-center">
          <div className="">
            <Grid />
          </div>
        </div>

      <div className="text-center">
        <div className="align-bottom">
          <Keyboard />
        </div>
      </div>
    </div>
  )
}

export default App;
