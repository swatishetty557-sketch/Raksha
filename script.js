function tieRakhi() {

    const rakhi = document.querySelector(".rakhi-area");

    rakhi.innerHTML = "🎀";

    rakhi.style.transform = "scale(1.5)";

    setTimeout(() => {

        rakhi.innerHTML = "🪢";

        rakhi.style.transform = "scale(1)";

    }, 1500);

    createHearts();
}


function surprise() {

    const message =
        document.getElementById("surpriseMessage");

    message.style.display = "block";

    createHearts();

    createHearts();

    createHearts();
}


function createHearts() {

    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️💞💕 ";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-50px";

        heart.style.fontSize =
            Math.random() * 25 + 15 + "px";

        heart.style.transition =
            "transform 3s, opacity 3s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                "translateY(-100vh)";

            heart.style.opacity = "0";

        }, 100);

        setTimeout(() => {

            heart.remove();

        }, 3100);
    }
}
