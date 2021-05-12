function getData() {
  var val = document.getElementById("myInput").value;
  var parsVal = parseInt(val);
  return parsVal;
}

fibonachiNumbers = [];

function countSteps() {
  for (var i = 1; i <= getData(); i++) {
    if (i == 1 || i == 2 || i == 3) {
      fibonachiNumbers.push(i);
    }
    if (i > 3) {
      fibonachiNumbers.push(
        fibonachiNumbers[fibonachiNumbers.length - 1] +
          fibonachiNumbers[fibonachiNumbers.length - 2]
      );
    }
  }
}

function CombinatoricsChallenge() {
    countSteps()
    document.getElementById("myInput").value = "";
    var element = document.getElementById("forResult");
    console.log(fibonachiNumbers)
    element.innerHTML =
      "Combinations of climbing: " +
      fibonachiNumbers[fibonachiNumbers.length - 1];
      return fibonachiNumbers = [];
  }
  
