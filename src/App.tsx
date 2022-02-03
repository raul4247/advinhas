import './App.css';
import { Header } from './components/Header';
import { Grid } from './components/Grid';
import { Keyboard } from './components/Keyboard';

function App() {
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <div className="">
        <Header />
      </div>
     
      <div className="h-full flex place-items-center text-center">
        <div className="grow bg-indigo-500 ">
          <Grid />
        </div>
      </div>
     
      <div className="h-full flex place-items-center justify-center">
        <div className="align-bottom">
          <Keyboard />
        </div>
      </div>
    </div>
  )
}

export default App;
