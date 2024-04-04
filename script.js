const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    }
  ];
  
  let currentIndex = 0;
  
  function displayQuote() {
    const currentQuote = quotes[currentIndex];
    document.getElementById('quote').textContent = `"${currentQuote.quote}"`;
    document.getElementById('author').textContent = `- ${currentQuote.author}`;
    document.querySelector('.quote-container').classList.add('slide-in');
  }
  
  function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    document.querySelector('.quote-container').classList.remove('slide-in');
    setTimeout(displayQuote, 500);
  }
  
  // Display first quote
  displayQuote();
  
  // Change quote every 5 seconds
  setInterval(nextQuote, 5000);
  