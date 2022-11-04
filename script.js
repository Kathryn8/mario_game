//Create our own selector function:
function get(selector) {
  return document.querySelector(selector);
};


//Loop flow Y then X
const tiles = [
  // X0              X1             X2            X3              X4                X5
  ['SpringGreen','SpringGreen','SpringGreen','SpringGreen','SpringGreen','Orange','SpringGreen','SpringGreen', 'SpringGreen','SpringGreen','SpringGreen','Orange'], //Y0
  ['SpringGreen','Orange','SpringGreen','SpringGreen','SpringGreen','SpringGreen','SpringGreen','Orange',       'SpringGreen','SpringGreen','DarkTurquoise','DarkTurquoise'], // Y4
  ['SpringGreen','SpringGreen','SpringGreen','SpringGreen','SpringGreen','Orange','SpringGreen','Orange',       'SpringGreen',  'SpringGreen', 'DarkTurquoise',   'DarkTurquoise'], // Y4
  ['SpringGreen', 'SpringGreen', 'SpringGreen',   'Orange',       'DarkTurquoise', 'DarkTurquoise',   'SpringGreen', 'Orange',       'SpringGreen',  'SpringGreen', 'DarkTurquoise',   'DarkTurquoise'], // Y4
  ['SpringGreen', 'Orange',       'SpringGreen',  'SpringGreen', 'DarkTurquoise',   'DarkTurquoise', 'SpringGreen', 'SpringGreen', 'SpringGreen',   'Orange',       'DarkTurquoise', 'DarkTurquoise'], //Y3
  ['SpringGreen', 'Orange',       'SpringGreen',  'SpringGreen', 'DarkTurquoise',   'DarkTurquoise', 'SpringGreen', 'SpringGreen', 'SpringGreen',  'SpringGreen', 'SpringGreen',    'Orange'], //Y2
  ['SpringGreen', 'Orange',       'SpringGreen',  'SpringGreen', 'DarkTurquoise',   'DarkTurquoise', 'SpringGreen', 'Orange',       'SpringGreen', 'SpringGreen', 'SpringGreen',    'SpringGreen'], // Y1
  ['SpringGreen', 'SpringGreen', 'SpringGreen',   'SpringGreen', 'SpringGreen',     'Orange', 'SpringGreen', 'SpringGreen', 'SpringGreen', 'SpringGreen',  'SpringGreen',    'Orange'], //Y0
];

for(let y = 0; y < tiles.length; y +=1) {
  for(let x = 0; x < tiles[y].length; x +=1) {
    
    const template = `<div class="tile" style="top:${y * 100}px; left:${x * 100}px; background-color:${ tiles[y][x]}"></div>`;
    
    get('.game-board').innerHTML += template;
  }
};

const marioImg = 'https://pngimg.com/uploads/mario/mario_PNG88.png';
get('.game-board').innerHTML += `<img src="${marioImg}" class="mario" alt="Mario">`;

const mario = get('.mario');

let marioY = 0; // Top position
let marioX = 0; // Left position

// Left = 37
// Up = 38
// Right = 39
// Down = 40

document.addEventListener('keydown', (event) => {
  console.log(event.keyCode)
  
  switch(event.keyCode) {
    case 37:
        console.log('Left');
        if (marioX > 0 && tiles[marioY][marioX - 1] === 'SpringGreen') {
          marioX -= 1;
          mario.style.left = marioX * 100 + 'px';
        }
        break;
      
    case 38:
        console.log('Up');
        if (marioY > 0 && tiles[marioY - 1][marioX] === 'SpringGreen') {
          marioY -= 1;
          mario.style.top = marioY * 100 + 'px';
        }
        break;
      
    case 39:
        console.log('Right');
        if (marioX < 11 && tiles[marioY][marioX + 1] === 'SpringGreen') {
          marioX += 1;
          mario.style.left = marioX * 100 + 'px';
        }
        break;
      
    case 40:
        console.log('Down');
        if (marioY < 7 && tiles[marioY + 1][marioX] === 'SpringGreen') {
          marioY += 1;
          mario.style.top = marioY * 100 + 'px';
        }
        break;
    
    default:
      console.log('No case');
      break;
  }
});