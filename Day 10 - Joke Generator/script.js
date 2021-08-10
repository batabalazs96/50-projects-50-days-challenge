const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', ()=> {
    getNewJoke();
})

getNewJoke()

//async/await
async function getNewJoke(){
    const config = {
        headers : {
            Accept : 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config)
    const data = await res.json();
    jokeEl.innerText= data.joke;

}

//.then

// function getNewJoke(){
//     const config = {
//         headers : {
//             Accept : 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//     .then(res => res.json())
//     .then(data => jokeEl.innerText= data.joke)

// }