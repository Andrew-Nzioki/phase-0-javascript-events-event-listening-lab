const button = document.getElementById('button');

function addingEventListener(){
    
alert('I was clicked!');
button.addEventListener('click', addingEventListener);
}
addingEventListener()
