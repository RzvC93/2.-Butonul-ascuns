function setBtn(buttons) {
    const winningBtnIndex = Math.floor(Math.random() * buttons.length);
    const winningBtn = buttons[winningBtnIndex];
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button === winningBtn) {
                alert("Congratulations, you found the winning button!");
            } else {
                alert("I'm sorry, this is not the winning button.");
            }
        });
    }); 
}

function selectButton() {
    const buttons = document.querySelectorAll(".card button"); 
    setBtn(buttons); 
}

function generateButtons() {
    const noInput = document.getElementById('noInput');
    const noOfBtn = parseInt(noInput.value);
    if (isNaN(noOfBtn) || noOfBtn <= 0) { 
        alert("Please enter a valide number.");
        return;
    }
    const existingContainer = document.querySelector('.buttons-container');
    if (existingContainer) {
        existingContainer.remove();
    }
    const container = document.createElement('div');
    container.classList.add('buttons-container');
    for (let i = 0; i < noOfBtn; ++i) {
        const btn = document.createElement('button');
        btn.textContent = 'Chance ' + (i + 1);
        btn.classList.add('btn', 'btn-dark', 'm-2');
        container.appendChild(btn);
    }
    document.body.appendChild(container);
    const newButtons = document.querySelectorAll('button');
    setBtn(newButtons);
    noInput.value = '';
}
selectButton();
document.getElementById('btnGenerate').addEventListener('click', generateButtons);