const shonaPhrases = [
    'Hello - Mhoro (s)/ Mhoroi (pl)', 
    'Goodbye - Sara Zvakanaka (s)/ Sariayi Zvakanaka (pl)',
    'Excuse me - Pamusoro (s)/ Pamusoroyi (pl)',
    'Sorry - Ndineurombo',
    'Thank you - Waita zvako (s)/ Maita zvenyu (pl)', 
    'Good morning - Mangwanani',
    'Good afternoon - Masikati',
    'Good evening - Manheru',
    'Good night - Urare zvakanaka (s)/ Murare Zvakanaka (pl)',
    'Welcome - Mauya',
    'How are you? - Wakadini zvako? (s)/ Makadini zvenyu? (pl)',
    'I love you - Ndinokuda',
    'Congratulations! - Makorokoto!',
    'I like to code - ndinoda kukodha'
]

function randomShona(shonaPhrases) {
    let randomShonaPhrases = [];
    let randomPhraseIndex = 0;
    let counter = 0;
    
    for (phrase in shonaPhrases) {
        while (counter < 3) {
            if (randomPhraseIndex === randomPhraseIndex) {
                randomPhraseIndex = Math.floor(Math.random() * shonaPhrases.length);
            }
            let randomShonaPhrase = shonaPhrases[randomPhraseIndex];
            randomShonaPhrases.push(randomShonaPhrase);
            counter++;
            }
            
        }
    
    return randomShonaPhrases;
}


console.log(randomShona(shonaPhrases));