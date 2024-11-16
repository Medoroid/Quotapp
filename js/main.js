var randoQuots
var quotPlease
var quotAuthorPlease
var Quots = [
    {
    quoText: "“Be yourself; everyone else is already taken.”",
    quotAuther:"Oscar Wilde",
},
    {
    quoText: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    quotAuther:"Marilyn Monroe",
},
    {
    quoText: "“So many books, so little time.”",
    quotAuther:"Frank Zappa",
},
    {
    quoText: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    quotAuther:" Albert Einstein",
},
    {
    quoText: "“A room without books is like a body without a soul.”",
    quotAuther:"Marcus Tullius Cicero",
},
    {
    quoText: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    quotAuther:"Bernard M. Baruch",
},
    {
    quoText: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
Andlive like it's heaven on earth.`,
quotAuther:" William W. Purkey",
},
]
function getRandomQuot() {
var random = Number.parseInt(Math.random() * Quots.length + 1)
document.querySelector('#quotPlease').textContent = `\"${Quotes[random].quote}\"`;
document.querySelector('#authorOutput').textContent = `--${Quotes[random].author}`;
}