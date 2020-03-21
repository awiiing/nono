import nono from "./nonogram";
import GameTile from "./components/gameTile";
import { AnswerTileCol, AnswerTileRow } from "./components/answerTile";

const Home = () => {
  let cells = [];
  let top = [];
  let left = [];
  let split = splitGrid(nono, nono[0]);

  //fill in cells
  for (let i = 0; i < nono[0] * nono[0]; i++) {
    if (nono[i + 1] != 0)
      cells.push(<div key={i + 1} className="h-full bg-black "></div>);
    if (nono[i + 1] === 0)
      cells.push(<div key={i + 1} className="h-full  bg-white "></div>);
  }

  function colAnswer(col) {
    let c = 0;
    let answer = [];
    for (let y = 0; y < nono[0]; y++) {
      if (split[y][col] != 0) {
        c++;
      } else {
        answer.push(c);
        c = 0;
      }
      if (y === nono[0] - 1) {
        answer.push(c);
      }
    }
    return answer.filter(e => e != 0);
  }

  // fill in top
  for (let i = 0; i < nono[0]; i++) {
    top.push(<AnswerTileCol answer={colAnswer(i)}></AnswerTileCol>);
  }

  function rowAnswer(row) {
    let c = 0;
    let answer = [];
    for (let x = 0; x < nono[0]; x++) {
      if (split[row][x] != 0) {
        c++;
      } else {
        answer.push(c);
        c = 0;
      }
      if (x === nono[0] - 1) {
        answer.push(c);
      }
    }
    return answer.filter(e => e != 0);
  }

  // fill in left
  for (let i = 0; i < nono[0]; i++) {
    left.push(<AnswerTileRow answer={rowAnswer(i)}></AnswerTileRow>);
  }

  function splitGrid(arr, len) {
    let chunks = [];
    let i = 1;
    let n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }
    return chunks;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-300">
      <div id="bigGrid">
        <div className="bg-red-500 h-full"></div>
        <div id="grid-top">{top}</div>
        <div className="bg-red-500 h-full"></div>
        <div id="grid-left">{left}</div>
        <div id="grid">{cells}</div>
        <div className="bg-gray-400 h-full"></div>
        <div className="bg-red-500 h-full"></div>
        <div className="bg-gray-400 h-full"></div>
        <div className="bg-red-500 h-full"></div>
      </div>

      <style jsx>{`
        .tester {
          background: red;
        }
        #bigGrid {
          background: black;
          display: grid;
          grid-gap: 1px;
          height: calc(100vh * 0.9);
          width: calc(100vh * 0.9);
          grid-template-columns: 1fr ${nono[0]}fr 1fr;
          grid-template-rows: 1fr ${nono[0]}fr 1fr;
        }
        #grid {
          display: grid;
          grid-gap: 1px;
          grid-template-columns: repeat(${nono[0]}, 1fr);
          grid-template-rows: repeat(${nono[0]}, 1fr);
        }
        #grid-top {
          display: grid;
          grid-gap: 1px;
          grid-template-columns: repeat(${nono[0]}, 1fr);
          grid-template-rows: 1fr;
        }
        #grid-left {
          display: grid;
          grid-gap: 1px;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(${nono[0]}, 1fr);
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
