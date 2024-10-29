function selectButton() {
    const buttons = document.querySelectorAll("button");  // aici selectam toate butoanele posibile
    // Prima data trebuie sa selectam butonul/butoanele
    // putem folosii si metoda asta "document.querySelector("#btn1") dar selectam doar un anumit buton dupa id"
    const winningBtnIndex = Math.floor(Math.random() * buttons.length);
    // Math.floor =  rotunjește rezultatul în jos la cel mai apropiat număr întreg.
    // Math.random = reda un numar rendom intre (0. si 1) si il inmultimcu cu numarul de butoane pe care le avem
    // acum am obtinut indexul
    const winningBtn = buttons[winningBtnIndex];
    // Stocăm referința butonului câștigător într-o constantă
    buttons.forEach((button, index) => {
         // forEach executa o functie pentru fiecare element din lista
        button.addEventListener('click', () =>{
            // adaugam un eveniment de ascultare pe buton in acest caz "click"
            if (button === winningBtn) {
                alert("Felicitari, ai gasit butonul castigator! la indexul " + index + "!");
            } else {
                alert("Îmi pare rău, nu acesta este butonul câștigător. Indexul acestui buton este " + index + ".");
            }
        });
    }); 
}
selectButton();