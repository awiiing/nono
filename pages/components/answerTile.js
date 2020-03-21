import React from "react";

export const AnswerTileCol = ({ answer }) => {
  return (
    <div className="row-container">
      <div className="tile bg-gray-400">
        {answer.map(e => (
          <span className="text-s flex font-bold items-center justify-center h-full ">
            {e}
          </span>
        ))}
      </div>
      <style jsx>{`
        .tile {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export const AnswerTileRow = ({ answer }) => {
  return (
    <div className="col-container">
      <div className="tile bg-gray-400">
        {answer.map(e => (
          <span className="text-s font-bold flex items-center justify-center h-full ">
            {e}
          </span>
        ))}
      </div>
      <style jsx>{`
        .tile {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
