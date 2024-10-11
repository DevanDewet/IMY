const socket = io();

socket.on('clientMessage', (message) => {
    alert(message); 
});

document.getElementById('poll').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting the traditional way
    const selectedRadio = document.querySelector('input[name="catName"]:checked');
    if (selectedRadio) {
        const catName = selectedRadio.value;
        socket.emit('vote', catName); // Send vote to server
    }
});

socket.on('updateVotes', (data) => {
    updateVoteDisplay(data.votes);
    updateTotalVotes(data.totalVotes);
    updateLiveFeed(data.latestVote);
});

function updateVoteDisplay(votes) {
    document.querySelectorAll('label').forEach(label => {
        const catName = label.getAttribute('for');
        const voteCount = votes.find(cat => cat.name === catName)?.votes || 0;
        label.querySelector('span').textContent = voteCount;
    });
}

function updateTotalVotes(totalVotes) {
    document.getElementById('total-votes').textContent = totalVotes;
}

function updateLiveFeed(latestVote) {
    const feed = document.getElementById('feed');
    const message = document.createElement('div');
    message.textContent = `New vote for ${latestVote}!`;
    feed.prepend(message);
}