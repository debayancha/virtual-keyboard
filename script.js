document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.querySelector(".textcontainer");
    const keys = document.querySelectorAll(".key");
    const deleteKey = document.getElementById("delete");
    const spaceKey = document.getElementById("space");
    const enterKey = document.getElementById("enterKey");
    let capsLock = false;

    keys.forEach((key) => {
        key.addEventListener("click", function () {
            let keyText = this.textContent;

            if (keyText === "CapsLock") {
                capsLock = !capsLock;
                this.classList.toggle("bg-gray-400"); // Visual indication for Caps Lock
            } else if (keyText === "Enter") {
                textContainer.textContent += "\n"; // New line
            } else {
                if (capsLock) {
                    keyText = keyText.toUpperCase();
                }
                textContainer.textContent += keyText;
            }
        });
    });

    deleteKey.addEventListener("click", function () {
        textContainer.textContent = textContainer.textContent.slice(0, -1);
    });

    spaceKey.addEventListener("click", function () {
        textContainer.textContent += " ";
    });

    enterKey.addEventListener("click", function () {
        textContainer.textContent += "\n"; // Properly adds a new line
    });
});
