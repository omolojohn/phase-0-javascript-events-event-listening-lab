function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}

addingEventListener(); // Call the function to bind the event listener

function clickAlert() {
    alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
