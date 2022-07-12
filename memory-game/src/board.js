import './App.css';


//Testing this
const nums = [...Array(9).keys()];

const Board = () => {

    const cardNums = nums.map((num) => (
        <button className="flex-auto rounded-lg w-full h-full border-2 border-white bg-sky-500/75 shadow-lg shadow-sky-500/70">
            {num}
        </button>
    ))

    return(
        <div className="grid grid-cols-3 gap-3 w-3/4 h-3/4">{cardNums}</div>
    )

}
  
export default Board;