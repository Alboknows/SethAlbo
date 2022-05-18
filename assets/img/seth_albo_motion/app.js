document.getElementById('icon-button').addEventListener('click', showContactMe)


function showContactMe() {
    alert('Contact Me')

}

var triggers = document.getElementsByClassName('trigger');
var panels = document.getElementsByClassName('lm-panel');
var i;

for (i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener("click", togglePanel.bind(triggers[i],i));
}

function togglePanel(i){
    if( panels[i].style.maxHeight ) {
        panels[i].style.maxHeight = null
    } else {
        panels[i].style.maxHeight = panels[i].scrollHeight + "px"
    }
}


