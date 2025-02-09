document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.querySelector('.textcontainer');
    const keys = document.querySelectorAll('.key');
    const deleteKey = document.getElementById('delete');
    const enterKey = document.getElementById('enterKey');
    const spaceKey = document.getElementById('space');
    let isCapsLock = false;

    // Function to update the text container
    function updateTextContainer(text) {
        // Create a span for the new text
        const span = document.createElement('span');
        span.textContent = text;
        textContainer.appendChild(span);
    }

    // Handle key clicks
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyText = key.textContent;
            if (keyText === 'CapsLock') {
                isCapsLock = !isCapsLock;
                keys.forEach(k => {
                    if (k.textContent.length === 1) {
                        k.textContent = isCapsLock ? k.textContent.toUpperCase() : k.textContent.toLowerCase();
                    }
                });
            } else {
                updateTextContainer(isCapsLock ? keyText.toUpperCase() : keyText.toLowerCase());
            }
        });
    });

    // Handle delete key
    deleteKey.addEventListener('click', () => {
        if (textContainer.lastChild) {
            textContainer.removeChild(textContainer.lastChild);
        }
    });

    // Handle enter key
    enterKey.addEventListener('click', () => {
        const br = document.createElement('br'); // Create a <br> element for a new line
        textContainer.appendChild(br);
    });

    // Handle space key
    spaceKey.addEventListener('click', () => {
        updateTextContainer(' ');
    });
});