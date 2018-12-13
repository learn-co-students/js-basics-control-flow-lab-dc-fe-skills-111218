// Write your code in this file!
function scuberGreetingForFeet(distanceFeet) {
  let result
  if (distanceFeet > 2500) {
    result = 'No can do.';
  } else if (distanceFeet > 2000) {
    result = 'I will gladly take your thirty bucks.';
  } else if (distanceFeet <= 400) {
    result = 'This one is on me!';
  }
  return result
}

function ternaryCheckCity (city) {
  let result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result
}

function switchOnCharmFromTip (tip) {
 let result
 switch (tip) {
   case 'generous':
     result = 'Thank you so much.';
     break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    default:
      result = "Bye."
 }
 return result
}