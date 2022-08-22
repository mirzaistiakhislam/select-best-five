const selectFive = [];

function addToSelectFive(element) {

    const getPlayerName = element.parentNode.parentNode.children[0].innerText;
    // element.setAttribute('disabled', true);

    const playerName = {
        playerName: getPlayerName
    }

    selectFive.push(playerName);

    // element.setAttribute('disabled', true);
    for (let i = 0; i < 5; i++) {

        displayPlayerName();
        element.setAttribute('disabled', true);
    }






}

function displayPlayerName() {



    const playerList = document.getElementById('player-list');
    playerList.innerText = '';


    for (let i = 0; i < selectFive.length; i++) {
        if (i < 5) {
            const tr = document.createElement('tr');
            tr.innerHTML =
                `
            <th>${i + 1}. </th>
            <td>${selectFive[i].playerName}</td>
            `;
            playerList.appendChild(tr);

        }
        else {
            alert("limit exceed");
            element.setAttribute('disabled', false);
        }
    }

}

