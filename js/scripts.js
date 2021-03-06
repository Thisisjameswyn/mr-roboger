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
    if($("#number").val() === "") {
      $("#outputArea").show();
      $("#outputText").text("Please enter a number to hear an amazing story");
    } else {
      $("#outputArea").show();
      $("#outputText").text(storyTime($("#number").val()).join(" "));
    }
  })

  $("form#reset").submit(function(event) {
    location.reload();
    event.preventDefault();
  });
});