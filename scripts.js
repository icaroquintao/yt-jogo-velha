const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', function () {
    if (cell.textContent === '') {
      cell.textContent = currentPlayer;
      cell.classList.add(currentPlayer);
        
      if(checkWin(currentPlayer)){
        setTimeout(() =>{
            alert(currentPlayer + ' Ganhou!')
            restGame()
        }, 100);
      } else if (isDraw()){
        setTimeout(() =>{
            alert('Empate!')
            restGame()
        }, 100);
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }

      
    }


  });
});

function checkWin(player) {
    const winCombos =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6] 
    ]

    return winCombos.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === player
        })
    })
}

function isDraw(){
    return [...cells].every(cell => {
        return cell.textContent !== ''
    })
}

function restGame(){
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
    currentPlayer = 'X'
}