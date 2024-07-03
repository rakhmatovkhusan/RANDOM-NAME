let names = ['HUSAN', 'UMIDJON', 'BOBURXOJA', 'SHAHZOD', 'BEHRUZ', 'MUHIDDIN', 'JAVOHIR', 'MUHAMMAD', 'BOBURMIRZO', 'NODIRBEK']
let spin = document.querySelector(".spin");
let h1 = document.querySelector(".h1");

spin.addEventListener("click", () => {
    h1.innerHTML = (names[Math.trunc(Math.random()*names.length)]);
})



