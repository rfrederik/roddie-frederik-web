import React, { useState, useEffect, useCallback } from 'react';
import './Snake.css';

interface Coordinate {
  x: number;
  y: number;
}

const gridSize = 15;

const Snake: React.FC = () => {
  const [snake, setSnake] = useState<Coordinate[]>([{ x: 3, y: 10 }]);
  const [food, setFood] = useState<Coordinate>({ x: 10, y: 10 });
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [currentDirection, setCurrentDirection] = useState<Coordinate>({ x: 1, y: 0 });
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [snakeLength, setSnakeLength] = useState<number>(1);

  const moveSnake = useCallback(() => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };
    head.x += currentDirection.x;
    head.y += currentDirection.y;

    if (head.x === food.x && head.y === food.y) {
      newSnake.unshift(head);
      placeFood();
      setSnakeLength(snakeLength + 1);
    }

    if (head.x >= gridSize) {
      head.x = 0;
    } else if (head.x < 0) {
      head.x = gridSize - 1;
    }

    if (head.y >= gridSize) {
      head.y = 0;
    } else if (head.y < 0) {
      head.y = gridSize - 1;
    }

    if (snakeCollision(head, newSnake.slice(1))) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(head);
    newSnake.length = snakeLength;
    setSnake(newSnake);
  }, [snake, currentDirection, food, snakeLength]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          handleDirectionChange({ x: -1, y: 0 });
          break;
        case 'ArrowUp':
          handleDirectionChange({ x: 0, y: -1 });
          break;
        case 'ArrowRight':
          handleDirectionChange({ x: 1, y: 0 });
          break;
        case 'ArrowDown':
          handleDirectionChange({ x: 0, y: 1 });
          break;
        default:
          break;
      }
    };

    const interval = setInterval(() => {
      if (!gameOver) {
        moveSnake();
      }
    }, 100);

    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobileView(mediaQuery.matches);

    mediaQuery.addListener((e) => setIsMobileView(e.matches));

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyPress);
      mediaQuery.removeListener((e) => setIsMobileView(e.matches));
    };
  }, [snake, currentDirection, gameOver, moveSnake]);

  const placeFood = () => {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    setFood({ x, y });
  };

  const snakeCollision = (head: Coordinate, segments: Coordinate[]) => {
    for (let segment of segments) {
      if (head.x === segment.x && head.y === segment.y) {
        return true;
      }
    }
    return false;
  };

  const handleDirectionChange = (newDirection: Coordinate) => {
    if (
      (newDirection.x !== 0 && currentDirection.x === 0) ||
      (newDirection.y !== 0 && currentDirection.y === 0)
    ) {
      setCurrentDirection(newDirection);
    }
  };

  const restartGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 15 });
    setCurrentDirection({ x: 1, y: 0 });
    setGameOver(false);
    setSnakeLength(1);
  };

  return (
    <div className="snake-game">
      {gameOver && (
        <div className="game-over">
          Game Over
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
      <div className="grid">
        {Array.from(Array(gridSize), (_, y) => (
          <div key={y} className="row">
            {Array.from(Array(gridSize), (_, x) => (
              <div
                key={x}
                className={`cell ${
                  snake.some((segment) => segment.x === x && segment.y === y)
                    ? 'snake'
                    : food.x === x && food.y === y
                    ? 'food'
                    : ''
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      {isMobileView && (
        <div className="controls">
          <button className="up arrow" onClick={() => handleDirectionChange({ x: 0, y: -1 })}></button>
          <button className="down arrow" onClick={() => handleDirectionChange({ x: 0, y: 1 })}></button>
          <button className="left arrow" onClick={() => handleDirectionChange({ x: -1, y: 0 })}></button>
          <button className="right arrow" onClick={() => handleDirectionChange({ x: 1, y: 0 })}></button>
        </div>
      )}
      <div className="score">Score: {snakeLength - 1}</div>
    </div>
  );
};

export default Snake;