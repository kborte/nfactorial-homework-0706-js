//switch
function rateShop(rating){
    switch (rating) {
        case 1: console.log("Accept our apologies for our poor service. Next time you visit our shop you will not be able to recognize it, remember my words!"); break;
        case 2: console.log("We are sincerely sorry you left unsatisfied with our shop today. We will work hard to provide better customer experience the next time!"); break;
        case 3: console.log("We are grateful for your sincere rating and would happily work on our disadvantages"); break;
        case 4: console.log("Thank you for your mark! We will be happy to see you next time."); break;
        case 5: console.log("Thank you for your mark! We will be happy to see you next time."); break;
    }
}

export {rateShop};