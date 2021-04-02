function storyTime(userNum) {
  let storyArray = [];
  for(let i = 0; i <= userNum; i++) {
    if(i.toString().includes("3")) {
      storyArray.push("Won't you be my neighbor? ");
    } else if(i.toString().includes("2")) {
      storyArray.push("Boop! ");
    } else if(i.toString().includes("1")) {
      storyArray.push("Beep! ");
    } else {
      storyArray.push(i.toString() + ",");
    }
  }
  return storyArray;
}

$(document).ready(function() {
  $("form#numberEntry").submit(function(event) {
    event.preventDefault();
    $("#outputText").text(storyTime($("#number").val()).join(" "));
  })

  $("form#reset").submit(function(event) {
    location.reload();
    event.preventDefault();
  });
});