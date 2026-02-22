
function forgive() {
    document.getElementById("bgMusic").play();
    document.getElementById("hiddenText").classList.add("show");
    document.getElementById("thankYouText").classList.add("show");
    createHeartsBurst();
}

function createFloatingHearts() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

function createHeartsBurst() {
    for (let i = 0; i < 25; i++) {
        setTimeout(createFloatingHearts, i * 120);
    }
}

setInterval(createFloatingHearts, 1200);
</script>

</body>