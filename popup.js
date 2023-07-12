document.addEventListener('DOMContentLoaded', () => {
    const jokeText = document.getElementById('joke-text');
    const newJokeBtn = document.getElementById('new-joke-btn');

    newJokeBtn.addEventListener('click', fetchJoke);

    fetchJoke();

    function fetchJoke() {
        jokeText.innerText = 'Loading joke...';

        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                const joke = `${data.setup}\n\n${data.punchline}`;
                jokeText.innerText = joke;
            })
            .catch(error => {
                jokeText.innerText = 'Failed to fetch joke.';
                console.error(error);
            });
    }
});
