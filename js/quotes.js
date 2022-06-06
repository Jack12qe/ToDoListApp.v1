const quotes = [
    {
        quote: "The unexamined life is not worth living",
        author: "Socrates",
    },
    {
        quote: "Whereof one cannot speak, thereof one must be silent",
        author: "Ludwig Josef Johann Wittgenstein",
    },
    {
        quote: "Liberty consists in doing what one desires",
        author: "John Stuart Mill",
    },
    {
        quote: "I can control my passions and emotions if I can understand their nature",
        author: "Baruch SpinozaBaruch Spinoza",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "Life is really simple, but we insist on making it complicated",
        author: "Confucius",
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up",
        author: "Thomas A. Edison",
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking",
        author: "Steve Jobs",
    },
    {
        quote: "The secret of success is to do the common thing uncommonly well",
        author: "John D. Rockefeller Jr.",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function setQuote() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = `\"${todaysQuote.quote}\" by `;
    author.innerText = `${todaysQuote.author}`;
}

setQuote();
setInterval(setQuote, 7000);
