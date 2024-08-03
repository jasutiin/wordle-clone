const letters_used = [];
const colour_status = [0, 0, 0, 0, 0]; // 0 for no letter, 1 for green, 2 for yellow
let row_numbers = 6;
let current_row = 0;
let current_cell = 0;
const answer = 'misty';

// making the 2d array
for (let i = 0; i < row_numbers; i++) {
  letters_used[i] = [];
}

// if green, then don't keep looking. break?
function determineAnswer() {
  j = 0;

  for (i = 0; i < 5; i++) {
    while (j < 5) {
      if (letters_used[current_row][i] === answer.charAt(j)) {
        if (i === j) {
          // green
          document.getElementById(
            cells[current_row * 5 + i]
          ).style.backgroundColor = '#4d814a';
          j = 5;
        } else {
          // yellow
          document.getElementById(
            cells[current_row * 5 + i]
          ).style.backgroundColor = '#a8a803';
        }
      }
      j += 1;
    }
    j = 0;
  }
}

addEventListener('keydown', (e) => {
  // if a letter key is pressed
  if (e.code.length === 4) {
    // move to next row if current row full. if on last row, dont't move to next row
    if (letters_used[current_row].length === 5 && letters_used[5].length != 5) {
      current_row += 1;
    }

    // fill in current cell
    if (letters_used[5].length != 5) {
      document.getElementById(cells[current_cell]).textContent = e.key;
      letters_used[current_row].push(e.key);
      // don't fill in cell if last cell
      if (current_cell != 30) {
        current_cell += 1;
      }
    }
  } else if (e.code === 'Backspace') {
    // move to prev row if current row full. if on first row, dont't move to prev row
    if (letters_used[current_row].length === 0 && letters_used[0].length != 0) {
      current_row -= 1;
    }

    // erase letter on cell
    if (letters_used[0].length != 0) {
      document.getElementById(cells[current_cell - 1]).textContent = '';
      letters_used[current_row].pop();
      if (current_cell != 0) {
        current_cell -= 1;
      }
    }
  } else if (e.code === 'Enter') {
    if (letters_used[current_row].length != 5) {
      alert('word has to be 5 letters long');
    } else {
      determineAnswer();
    }
  }
  console.log(letters_used);
  console.log(current_row);
  console.log(current_cell);
});
