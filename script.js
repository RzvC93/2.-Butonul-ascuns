function setBtn(buttons) {
    const winningBtnIndex = Math.floor(Math.random() * buttons.length);
    const winningBtn = buttons[winningBtnIndex];
    console.log("setBtn called - winning button index:", winningBtnIndex);
    buttons.forEach((button, index) => {
        const clickHandler = () => {
            if (button === winningBtn) {
                console.log(`Button ${index + 1} clicked - Winning button!`);
                alert("Congratulations, you found the winning button!");
            } else {
                console.log(`Button ${index + 1} clicked - Not the winning button.`);
                alert("I'm sorry, this is not the winning button.");
            }
        };
        button.removeEventListener('click', button._clickHandler);
        button.addEventListener('click', clickHandler);
        button._clickHandler = clickHandler;
    });
}
function selectButton() {
    const buttons = document.querySelectorAll(".card button"); 
    console.log("selectButton called - setting buttons in .card");
    setBtn(buttons); 
}
function generateButtons() {
    console.log("generateButtons");
    const noInput = document.getElementById('noInput');
    const noOfBtn = parseInt(noInput.value);
    if (isNaN(noOfBtn) || noOfBtn <= 0) { 
        alert("Please enter a valid number.");
        return;
    }
    console.log("Number of buttons to generate:", noOfBtn);
    const existingContainer = document.querySelector('.buttons-container');
    if (existingContainer) {
        console.log("Existing container found - removing old buttons");
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
    const newButtons = document.querySelectorAll('.buttons-container button');
    console.log("New buttons generated");
    setBtn(newButtons);
    noInput.value = '';
}
selectButton();
document.getElementById('btnGenerate').addEventListener('click', generateButtons);