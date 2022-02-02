import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <div className="">
        <Header />
      </div>
     
      <div className="h-full flex place-items-center text-center">
        <div className="grow">
          <h1>[] [] [] [] []</h1>
          <h1>[] [] [] [] []</h1>
          <h1>[] [] [] [] []</h1>
          <h1>[] [] [] [] []</h1>
          <h1>[] [] [] [] []</h1>
        </div>
      </div>
     
      <div className="text-center">
        <div className="align-bottom">
          <h1>Q W E R T Y U I O P</h1>
          <h1>A S D F G H J K L</h1>
          <h1>Z X C V B N M</h1>
        </div>
      </div>
    </div>
  )
}

export default App;
