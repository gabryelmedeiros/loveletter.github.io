const envelope = document.querySelector('.envelope-wrapper');
        const heart = document.querySelector('.heart');

        envelope.addEventListener('click', () => {
            envelope.classList.toggle('flap');
        });

        heart.addEventListener('click', (event) => {
           heart.classList.add('fly-away');
        });

heart.classList.add('pulse');