document.addEventListener("DOMContentLoaded", function() {
    const coinImage = document.getElementById('coin-image');
    const flippingButton = document.getElementById('flipping-button');
    const scoreText = document.getElementById('score-text');
    const betTxtH = document.getElementById('bet-txt-h');
    const betTxtT = document.getElementById('bet-txt-t');
    const clickSound = new Audio('Assets/coin-sound.wav');
    let score = 0;
    let bet = "tails.png";

    betTxtH.addEventListener('click', () => {
        betTxtH.style.outline = "2px solid red";
        betTxtT.style.outline = "2px solid #8a8a8a";
        bet = "heads.png";
    });

    betTxtT.addEventListener('click', () => {
        betTxtT.style.outline = "2px solid red";
        betTxtH.style.outline = "2px solid #8a8a8a";
        bet = "tails.png";
    });

    flippingButton.addEventListener('click', () => {
        let count = 0;
        clickSound.play();

        function flipCoin(callback) {
            const coinImageSrc = coinImage.getAttribute('src');
            const betProbability = count >= 10 ? (coinImageSrc.includes(bet) ? 0.2 : 0.5) : 0;

            if (Math.random() < betProbability) {
                callback();
                return; // Stop the loop
            }

            const newSrc = coinImageSrc.includes('heads.png') ? 'Assets/tails.png' : 'Assets/heads.png';
            coinImage.setAttribute('src', newSrc);

            count++;
            setTimeout(() => flipCoin(callback), 200);
        }

        flipCoin(() => {
            const finalSrc = coinImage.getAttribute('src');
            if (finalSrc.includes(bet)) {
                score++;
            } else {
                score--;
            }
            scoreText.innerText = `Score: ${score}`;
        });
    });
});