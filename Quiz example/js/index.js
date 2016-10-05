function quiz() {
  alert("Hi");
  var question1 = prompt("who is it?");

  if (question1 === "Ian") {
    alert("correct!");
  } else {
    alert("wrong");
  }
  var question2 = prompt("what are those?");
  if (question2 === "shoes") {
    alert("corect!");
  } else {
    alert("wrong");
  }
  var question3 = prompt("What item is that");
  if (question3 === "laptop") {
    alert("correct");
  } else {
    alert("wrong");
  }
  var question4 = prompt("where does ian learn?");
  if (question4 === "SIS")
    {
      alert("correct");
    } else {
      alert("wrong");
    }
  var question5 = prompt("how does this work?")
  if (question5 === "It works by pressing the button")
  {
    alert("correct");
  } else { 
   alert("wrong");
  }
}