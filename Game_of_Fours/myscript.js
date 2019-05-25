// var playerOne = prompt("Player one: Enter your name, you will be red")
// var playerTwo = prompt("Player two: Enter your name, you will be blue")
var count1 = -1
var count2 = -1
var count3 = -1
var count4 = -1
var count5 = -1
var count6 = -1
var count7 = -1
var move = 1
var table = $('table')

$('h2').eq(1).html("It's red turn")

function colorPick(row, count){
  $(row).click(function(){
    if (count == -7) {
      alert('Try another column')
    }
    else if (move%2 != 0) {
      $(row).eq(count).css('background','rgb(245,11,42)')
      count -= 1
      move += 1
      $('h2').eq(1).html("It's blue turn")
    }
    else if (move%2 == 0) {
      $(row).eq(count).css('background','rgb(33,40,222)')
      count -= 1
      move += 1
      $('h2').eq(1).html("It's red turn")
    }

  })
}

colorPick('.one', count1)
colorPick('.two', count2)
colorPick('.three', count3)
colorPick('.four', count4)
colorPick('.five', count5)
colorPick('.six', count6)
colorPick('.seven', count7)


function colorCheck(rowIndex,colIndex) {
  return table.find('tr').eq(rowIndex).find('td').eq(colIndex).css('background-color');
}

function winCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}


function horWin(){
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (winCheck(colorCheck(row, col), colorCheck(row, col+1), colorCheck(row, col+2), colorCheck(row, col+3))) {
        return true
      }
    }
  }
}

function verWin(){
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 7; col++) {
      if (winCheck(colorCheck(row, col), colorCheck(row+1, col), colorCheck(row+2, col), colorCheck(row+3, col))) {
        return true
      }
    }
  }
}


function diagWin(){
  for (var row = 0; row < 7; row++) {
    for (var col = 0; col < 5; col++) {
      if (winCheck(colorCheck(row, col), colorCheck(row+1, col+1), colorCheck(row+2, col+2), colorCheck(row+3, col+3))) {
        return true
      }
      else if ((winCheck(colorCheck(row, col), colorCheck(row-1, col+1), colorCheck(row-2, col+2), colorCheck(row-3, col+3)))) {
        return true
      }
    }
  }
}


$('table').click(function(){
  if (horWin() || verWin() || diagWin()){
    $('h2').eq(0).fadeOut(10,function(){

      if (move%2 == 0) {
        $('h2').eq(1).html("Red Won !!!")
        alert("Red won !!!")
      }
      else if (move%2 != 0) {
        $('h2').eq(1).html("Blue Won !!!")
        alert("Blue won")
      }

    })
  }
})

$('body').mouseover(function(){
  if ($('h2').eq(1).text() === "Red Won !!!" || $('h2').eq(1).text() === "Blue Won !!!") {
    $('table').fadeOut(500)
  }

})
