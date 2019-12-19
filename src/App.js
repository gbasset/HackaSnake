import React, { useState, useEffect } from 'react';
import Snake from './Components/Snake'
import Food from './Components/Food'

const getRandomCoordonates = () => {

  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
  return [x, y]
}

const App = () => {

  const [snakeDots, setSnakeDots] = useState([[0, 0], [2, 0]])
  const [food, setFood] = useState(getRandomCoordonates())
  const [direction, setDirection] = useState('RIGHT')
  const [speed, setSpeed] = useState(2000)

  useEffect(() => {
    console.log('mount');
    
    setInterval(moveSnake, speed)
    document.onkeydown = onKeyDown
    console.log('onkey',document.onkeydown);
  }, [direction])


  const onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        setDirection('UP')
        console.log('coucou');
        break;
      case 40:
        setDirection('DOWN')
        console.log('kiki');
        break;
      case 37:
        setDirection('LEFT')
        console.log('kuku');
        break;
      case 39:
        setDirection('RIGHT')
        console.log('crotin de biquette');
        break;
    };
  }

  const moveSnake = () => {
    let dots = [...snakeDots]
    let head = dots[dots.length - 1];
    
    switch (direction) {
      case 'RIGHT':
        head = [head[0] + 2, head[1]]
        break;
      case 'LEFT':
        head = [head[0] - 2, head[1]]
        break;
      case 'UP':
        head = [head[0], head[1] + 2]
        break;
      case 'DOWN':
        head = [head[0], head[1] - 2]
    }
    dots.push(head);
    dots.shift();
    setSnakeDots(dots)
  }

  return (
    <div className="game-area ">
      <Snake snakeDots={snakeDots} />
      <Food dot={food} />

    </div>
  );
}

export default App;
