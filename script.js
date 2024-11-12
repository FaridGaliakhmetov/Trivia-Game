let score = 0;
let level =0;
const button = document.querySelectorAll("button");
const h2 = document.querySelector("h2");
function paris() {
    if(score === 0 && level === 0) { 
      score++;
      level++;
      h2.innerHTML = "Who painted the Mona Lisa?";
      button[0].innerHTML = "Van Gogh";
      button[1].innerHTML = "Picasso";
      button[2].innerHTML = "Da Vinci";
      button[3].innerHTML = "Rembrandt";
      button[0].onclick = other;
      button[1].onclick = other;
      button[2].onclick = paris; 
      button[3].onclick = other;
    } else  {
      score++;
      button[0].remove();
      button[1].remove();
      button[2].remove();
      button[3].remove();
      h2.innerHTML = "You scored "+ score +" out of 2!";
      score = 0;
    } 
}         

function other() {
   if (level === 0) {
    level++;
    h2.innerHTML = "Who painted the Mona Lisa?";
    button[0].innerHTML = "Van Gogh";
    button[1].innerHTML = "Picasso";
    button[2].innerHTML = "Da Vinci";
    button[3].innerHTML = "Rembrandt";
    button[0].onclick = other;
    button[1].onclick = other;
    button[2].onclick = paris;
    button[3].onclick = other;
    
   } else if(level === 1) {
      button[0].remove();
      button[1].remove();
      button[2].remove();
      button[3].remove();
      h2.innerHTML = "You scored "+ score +" out of 2!";
   }
}

button[0].onclick = paris;
button[1].onclick = other;
button[2].onclick = other;
button[3].onclick = other;