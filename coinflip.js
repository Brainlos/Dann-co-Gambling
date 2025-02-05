document.addEventListener("DOMContentLoaded", function() {
    const coinImage = document.getElementById('coin-image');
    const flippingButton = document.getElementById('flipping-button');
    const scoreText = document.getElementById('score-text');
    const betTxtH = document.getElementById('bet-txt-h');
    const betTxtT = document.getElementById('bet-txt-t');
    let score = 0;

    betTxtH.addEventListener('click', () => {
        betTxtH.style.outline = "2px solid red";
        betTxtT.style.outline = "2px solid #8a8a8a";
    });

    betTxtT.addEventListener('click', () => {
        betTxtT.style.outline = "2px solid red";
        betTxtH.style.outline = "2px solid #8a8a8a";
    });

    flippingButton.addEventListener('click', () => {
        let count = 0;

        function flipCoin() {
            if (count >= 10 && Math.random() < 0.2) {
                return; // Stop the loop
            }

            const coinImageSrc = coinImage.getAttribute('src');
            const newSrc = coinImageSrc.includes('heads.png') ? 'Assets/tails.png' : 'Assets/heads.png';
            coinImage.setAttribute('src', newSrc);

            count++;
            setTimeout(flipCoin, 200);
        }

        flipCoin();
    });
});