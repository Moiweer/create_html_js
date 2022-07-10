const body = document.querySelector("body")

// create elements
const main = document.createElement("main");
const title = document.createElement("h1")
const figure = document.createElement("figure")
const img = document.createElement("img")
const figcaption = document.createElement("figcaption")
// add atr
main.id = "main";
title.id = "title";
figure.id = "img-div";
img.id = "image"
img.src = "https://picsum.photos/id/237/200/300";
img.alt = "random image";
figcaption.id = "img-caption";

// add textContent
title.textContent = "- Michel Legrand -"
figcaption.textContent = "Michel Legrand conducting his orcherstra."


//  paste to DOM

body.append(main);
main.append(title);
main.append(figure);
figure.append(img)
figure.append(figcaption);

const article = `<article id="tribute-info">
<div id="intro"><p>&bull; Michel Legrand (1932 - 2019) was a famous French musician. &bull;
</p></div>
<p><u>Here are some major facts about him:</u></p>
<p>
    <ul>

    </ul>
</p>
<blockquote id="quote">
    <p>Writihg is a mental thing, while playing is essentially a physical feeling.</p>
</blockquote>
<hr>
<p>To find out more about him, feel free to gave a look at his biography on <a id="tribute-link"
href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B3%D1%80%D0%B0%D0%BD,_%D0%9C%D0%B8%D1%88%D0%B5%D0%BB%D1%8C">Wikipedia</a>
</article>`

main.insertAdjacentHTML("beforeend", article);

// // створюємо li in ul за допомогою масиву і методу reduce
const ul = document.querySelector("ul");

const facts = [
    "He was born in Paris, France on February 24<sup>th</sup>, 1932.",
    "His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of conductor.",
    "His sister was a Soprano and a member of the Swingle Singers.",
    "Along his career, he composed more than two hundred film and television scores.",
    "He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.",
    "He won a huge amont of awards, including Oscars, Grammy Awards and Golden Globes",
    "He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the American Hospital. ",
    "He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.",
];

// const createLiFromArray = (array) => array.map((el) => `<li>${el}</li>`).join("");

// або замість map використовуємо reduce
const createLiFromArray = (array) => 
    array.reduce((acc, el) => acc + `<li>${el}</li>`, "")
const list = createLiFromArray(facts);

ul.insertAdjacentHTML("beforeend", list)
console.log(createLiFromArray(facts));