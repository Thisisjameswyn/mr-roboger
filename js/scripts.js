function storyTime(userNum) {
  let storyArray = [];
  for(let i = 0; i <= userNum; i++) {
    if(i.toString().includes("1")) {
      storyArray.push("Beep!");
    } else {
      storyArray.push(i.toString());
    }
  }
  return storyArray;
}