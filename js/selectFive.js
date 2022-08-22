const selectFive = [];

function addToSelectFive(element) {

    const getPlayerName = element.parentNode.parentNode.children[0].innerText;


    const playerName = {
        playerName: getPlayerName
    }

    selectFive.push(playerName);

    for (let i = 0; i < 5; i++) {
        displayPlayerName();
        element.setAttribute('disabled', true);
    }
}

function displayPlayerName() {

    const playerList = textField('player-list'); // connected with common.js
    playerList.innerText = '';

    for (let i = 0; i < selectFive.length; i++) {

        if (i < 5) {
            const tr = document.createElement('tr');
            tr.innerHTML =
                `
            <th>${i + 1}.</th>
            <td>${selectFive[i].playerName}</td>
            `;
            playerList.appendChild(tr);
        }
        else {
            alert("Limit Exceeded !!");
            element.setAttribute('disabled', false);
        }
    }

}

