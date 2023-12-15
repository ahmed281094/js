


var quotes = [
    {
        quote: `"Be yourself; everyone else is already taken."`,
        author: "―  Oscar Wilde",
    },
        {
        quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
        author: "―  Albert Einstein",
    },
        {
        quote: "The best revenge is massive success." ,
        author: "―  Frank Sinatra",
    }, 
        {
        quote: "You miss 100% of the shots you don't take.", 
        author: "―  Wayne Gretzy",
    },
        {
        quote:`"So many books, so little time."`, 
        author: "― Frank Zappa",
    },
    {
        quote: `"A room without books is like a body without a soul."`,  
        author: "― Marcus Tullius Cicero",
    },


];


function display(){
    var randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    document.getElementById('quote').innerHTML = randomQuotes.quote;
    document.getElementById('author').innerHTML = randomQuotes.author;
}






// var array = [
//     {
//         quote: `"Be yourself; everyone else is already taken."`,
//         author: "―  Oscar Wilde",
//     },
//     {
//         quote: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
//         author: "―  Albert Einstein",
//     },
//     {
//         quote: "The best revenge is massive success." ,
//         author: "―  Frank Sinatra",
//     }, 
//     {
//         quote: "You miss 100% of the shots you don't take.", 
//         author: "―  Wayne Gretzy",
//     },
//     {
//         quote:`"So many books, so little time."`, 
//         author: "― Frank Zappa",
//     },
//     {
//         quote: `"A room without books is like a body without a soul."`,  
//         author: "― Marcus Tullius Cicero",
//     },
//   ];
  
//   function display() {
//     document.getElementById("quote").innerHTML = array[0].quote;
//     document.getElementById("auther").innerHTML = array[0].author;
//     array.push(array[0]);
//     array.shift(array[0]);
//   }