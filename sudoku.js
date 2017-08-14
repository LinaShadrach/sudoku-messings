let arr = [][];
checkRow(n, x){
  let rowClear = true;
  let y = 0;
  while((y < 9) && (rowClear === true)){
    if(n === arr[x, y]){
      rowClear = false;
    }
    y++;
  }
  return rowClear;
}

checkColumn(n, y){
  let columnClear = true;
  let x = 0;
  while((x < 9) && (columnClear === true)){
    if(n === arr[x, y]){
      columnClear = false;
    }
    x++;
  }
  return columnClear;
}

checkBox(n, x, y) {
  let boxClear = true;
  let xStart = (x/3) * 3;
  let xEnd = xStart +3;
  let yStart = (y/3) * 3;
  let yEnd = yStart +3;
  while(xStart < xEnd && boxClear === true){
    while(yStart < yEnd && boxClear ===true){
      if(n === arr[x,y]){
        boxClear = false;
      }
      y++;
    }
    x++;
  }
  return boxClear;
}

boxEmpty(){
  if(arr[x,y] === 0){
    return true;
  }
  else{
    return false;
  }
}

fillSquares(xStart, xEnd, yStart, yEnd){
  for(n = 1; n <=  9; n++){
    for(x = xStart; x < xEnd; x++){
      for(y = yStart; y < yEnd; y++){
        if(boxEmpty && rowClear && columnClear && boxClear){
          arr[x,y] = n;
        }
      }
    }
  }
}

createPuzzle(xStart, yStart){
  xEnd = 9;
  yEnd = 9;
  if(xStart !== 0 || yStart !== 0){
    fillSquares(xStart, xEnd, yStart,yEnd);
    xEnd = xStart;
    yEnd = yStart;
  }
  fillSquares(xStart, xEnd, yStart, yEnd);
}
