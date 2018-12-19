const someValue = x
function scuberGreetingForFeet(someValue) {
  if (someValue <=400) {return "This one is on me!"
}
  else if (someValue >=2500) 
      {return ("No can do.")  }
      
  else if (someValue >=2000) {
    return ("I will gladly take your thirty bucks.")}

}

function ternaryCheckCity(someCity) 
{ let response;
return (someCity == "NYC" ? (response = "Ok, sounds good.") : (response = "No go."));
}

function switchOnCharmFromTip(tip){
let response
  switch(tip) {
    case "generous":
      response ="Thank you so much.";
      break;
    case "not as generous":
      response ="Thank you.";
      break;
    case "thanks for everything": 
      response ="Bye.";
  }
  return response;
}
