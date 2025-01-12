import { createContext,useState } from "react"
export const QuoteContext = createContext();
export const ContextProvider = ({children})=>{
    const quotes = [
        {
          quote: "The only way to do great work is to love what you do.",
          author: "Steve Jobs"
        },
        {
          quote: "Life is what happens when you're busy making other plans.",
          author: "John Lennon"
        },
        {
          quote: "Get busy living or get busy dying.",
          author: "Stephen King"
        },
        {
          quote: "In the middle of difficulty lies opportunity.",
          author: "Albert Einstein"
        },
        {
          quote: "The journey of a thousand miles begins with one step.",
          author: "Lao Tzu"
        },
        {
          quote: "You must be the change you wish to see in the world.",
          author: "Mahatma Gandhi"
        },
        {
          quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
          author: "Ralph Waldo Emerson"
        },
        {
          quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          author: "Winston Churchill"
        },
        {
          quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
          author: "Ralph Waldo Emerson"
        },
        {
          quote: "The future belongs to those who believe in the beauty of their dreams.",
          author: "Eleanor Roosevelt"
        },
        {
          quote: "It always seems impossible until it's done.",
          author: "Nelson Mandela"
        },
        {
          quote: "I have not failed. I've just found 10,000 ways that won't work.",
          author: "Thomas Edison"
        },
        {
          quote: "The only limit to our realization of tomorrow is our doubts of today.",
          author: "Franklin D. Roosevelt"
        },
        {
          quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
          author: "Ralph Waldo Emerson"
        },
        {
          quote: "Happiness depends upon ourselves.",
          author: "Aristotle"
        },
        {
          quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
          author: "Walt Whitman"
        },
        {
          quote: "You can't go back and change the beginning, but you can start where you are and change the ending.",
          author: "C.S. Lewis"
        },
        {
          quote: "The best way to predict the future is to create it.",
          author: "Abraham Lincoln"
        },
        {
          quote: "It is never too late to be what you might have been.",
          author: "George Eliot"
        },
        {
          quote: "Success usually comes to those who are too busy to be looking for it.",
          author: "Henry David Thoreau"
        },
        {
          quote: "You only live once, but if you do it right, once is enough.",
          author: "Mae West"
        }
      ]
    const [quote, setquote] = useState("");
  const [author, setauthor] = useState("");
  const [Backgroundcolor, setBackgroundcolor] = useState("rgb(122,255,120)");
  const generaterandomcolor = () =>{
    let first = Math.floor(Math.random()*256);
    let second = Math.floor(Math.random()*256);
    let third = Math.floor(Math.random()*256);
    return `rgb(${first},${second},${third})`;
}
const changecolor = () =>{
  setBackgroundcolor(generaterandomcolor());
}
  const GenerateRandomQuote = () =>{
    let randomindex = Math.floor(Math.random()*quotes.length);
    setquote(quotes[randomindex].quote);
    setauthor(quotes[randomindex].author);
    changecolor();
  }
  
  return(
    <QuoteContext.Provider value={{quote,author,generaterandomcolor,Backgroundcolor,changecolor,GenerateRandomQuote}}>
        {children}
    </QuoteContext.Provider>
  )
}