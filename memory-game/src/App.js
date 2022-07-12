import './App.css';
import Board from './board';

function App() {
  return (
    <div className="flex flex-col justify-center items-center text-xl w-full h-screen bg-black text-white">
      <h2 className="text-2xl">A Memory Matching Game</h2>
      <Board></Board>
    </div>
  );
}

export default App;
