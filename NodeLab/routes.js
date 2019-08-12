const express = require('express');

const router = express.Router();
var quotes = [
    {1: "you can take a horse to church, but you cant make it drink."},   
    {2: "when life gives you birds, one stone is two lemonades in the bush."}, 
    {3: "A journey of a thousand miles begins with one potato."},
    {4: "No use crying over spilled burittos."},
    {5: "Money cant buy dolphin shoes."},
    {6: "It takes more muscles to poop than to smile."},
    {7: "Don't eat all your brooms in one basket."},
    {8: "Never buy flowers from a monk, only you can prevent florist friars."},
    {9: "But I, being poor, have only my dreams; I have spread my dreams under your feet; Tread softly, because you tread on my dreams."}
    ];
    
    var quoteString = Math.floor(Math.random()* quotes.length);
    
    function ran() {
        if (quoteString === 0) {
            console.log(quotes[0]);
            return quotes[0];
        } else if (quoteString === 1) {
            console.log(quotes[1]); 
            return quotes[1];
        } else if (quoteString === 2) {
            console.log(quotes[2]);
            return quotes[2];
        }  else if (quoteString === 3) {
            console.log(quotes[3]); 
            return quotes[3];
        } else if (quoteString === 4) {
            console.log(quotes[4]);
            return quotes[4];
        }  else if (quoteString === 5) {
            console.log(quotes[5]); 
            return quotes[5];
        } else if (quoteString === 6) {
            console.log(quotes[6]);
            return quotes[6];
        } else if (quoteString === 7) {
            return quotes[7];
        } else if (quoteString === 8) {
            return (quotes[8]);
        }
    }

router.get("/quotes", (req, res) => {
    res.json(ran());
})