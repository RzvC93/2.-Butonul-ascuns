let winningBtn = null;

function handleButtonClick(event) {
    const button = event.currentTarget;
    if (button === winningBtn) {
        alert("Congratulations, you found the winning button!");
    } else {
        alert("I'm sorry, this is not the winning button.");
    }
}

function setWinningButton(buttons) {
    const winningBtnIndex = Math.floor(Math.random() * buttons.length);
    winningBtn = buttons[winningBtnIndex];
    buttons.forEach(button => {
        button.removeEventListener('click', handleButtonClick);
        button.addEventListener('click', handleButtonClick);
    });
}

function initDefaultButtons() {
    const buttons = document.querySelectorAll(".card button");
    setWinningButton(buttons);
}

function generateDynamicButtons() {
    const noInput = document.getElementById('noInput');
    const noOfBtn = parseInt(noInput.value);
    if (isNaN(noOfBtn) || noOfBtn <= 0) {
        alert("Please enter a valid number.");
        return;
    }
    let container = document.querySelector('.buttons-container');
    if (container) {
        container.innerHTML = '';
    } else {
        container = document.createElement('div');
        container.classList.add('buttons-container');
        document.body.appendChild(container);
    }
    for (let i = 0; i < noOfBtn; ++i) {
        const btn = document.createElement('button');
        btn.textContent = 'Chance ' + (i + 1);
        btn.classList.add('btn', 'btn-dark', 'm-2');
        container.appendChild(btn);
    }
    const newButtons = document.querySelectorAll('.buttons-container button');
    setWinningButton(newButtons);
    noInput.value = '';
}

initDefaultButtons();
