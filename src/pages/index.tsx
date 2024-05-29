import { useState } from 'react';
import styles from './index.module.css';
import { constants } from 'buffer';

const Home = () => {
  const initialBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const [samplePos, setSamplePos] = useState(0);
  const [userInputs, setUserInputs] = useState(initialBoard);
  const [bombMap, setBombMap] = useState(initialBoard);
  const board = userInputs;

  const clickHandler = (x: number, y: number) => {
    const bombPositions = initialBoard;
    if (bombPositions === initialBoard) {
      let n = 0;
      while (n < 10) {
        const bombY = Math.floor(Math.random() * bombMap.length);
        const bombX = Math.floor(Math.random() * bombMap[0].length);
        if (bombPositions[bombY][bombX] !== 1) {
          bombPositions[bombY][bombX] = 1;
          n++;
        }
      }
    }
    setBombMap(bombPositions);
    console.table(bombPositions);
    console.table(initialBoard);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backboard}>
        <div className={styles.information}>
          <div className={styles.bombcount} />
          <div className={styles.faith}>
            <div className={styles.sampleStyle} style={{ backgroundPosition: `-330px 0px` }} />
          </div>
          <div className={styles.time} />
        </div>
        <div className={styles.board}>
          {board.map((row, y) =>
            row.map((color, x) => (
              <div className={styles.flame} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
                <div
                  className={styles.sampleStyle}
                  style={{ backgroundPosition: `${-30 * (color - 1)}px 0px` }}
                />
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

//</div>
//<div className={styles.sampleStyle}
// style={{ backgroundPosition: `${-30 * samplePos}px, 0px` }}
//   />
//  <button onClick={() => setSamplePos((p) => (p + 1) % 14)}>sample</button>
