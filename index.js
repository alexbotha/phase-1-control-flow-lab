function scuberGreetingForFeet(distance) {

if (distance <= 400){
  return "This one is on me!"
}

else if (distance >= 400 && distance <= 2000){
return "That will be twenty bucks."
}

else if (distance > 2000 && distance < 2500){
  return "I will gladly take your thirty bucks."
}

else if (distance >= 2500) {
return "No can do."
}
}
scuberGreetingForFeet(2001)

///////////////////////////////////////////////////////////////////////////////////

function ternaryCheckCity(city){
return (city === "NYC" ? 'Ok, sounds good.' : 'No go.');
}
ternaryCheckCity()

//////////////////////////////////////////////////////////////////////

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return tip = "Thank you so much."
      break;
    case 'not as generous':
     return tip = 'Thank you.'
      break;
    default:
      case 'Thanks for everything':
      return tip = 'Bye.'
      
     
}
}
