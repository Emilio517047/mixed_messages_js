/*const shonaDict = {
    'Hello': 'Mhoro (s)/ Mhoroi (pl)',
    'Welcome': 'Mauya',
    'How are you?': 'Wakadini zvako? (s)/ Makadini zvenyu? (pl)',
    'Good morning': 'Mangwanani',
    'Good afternoon': 'Masikati',
    'Good evening': 'Manheru',
    'Good night': 'Urare zvakanaka (s)/ Murare Zvakanaka (pl)',
    'Goodbye': 'Sara Zvakanaka (s)/ Sariayi Zvakanaka (pl)',
    'Excuse me': 'Pamusoro (s)/ Pamusoroyi (pl)',
    'Sorry': 'Ndineurombo',
    'Thank you': 'Waita zvako (s)/ Maita zvenyu (pl)',
    'I love you': 'Ndinokuda',
    'Congratulations!': 'Makorokoto!',
    'I like to code': 'ndinoda kukodha'
}

//console.log(shonaDict);

function randomShonaDict(Dict) {
    randomShona = {};
    counter = 0;
    while (counter < 2) {
        for (let [english, shona] of Object.entries(shonaDict)) {
            randomShona = shonaDict[Math.floor(Math.random() * Object.keys(shonaDict).length)]
        }
        console.log(randomShona);
        console.log(counter);
        counter++;
    }
    return randomShona;
    return counter;
}

//console.log(randomShonaDict(shonaDict))
console.log(randomShonaDict(shonaDict));*/

const shonaPhrases1 = [
    'Hello - Mhoro (s)/ Mhoroi (pl)', 
    'Goodbye - Sara Zvakanaka (s)/ Sariayi Zvakanaka (pl)',
    'Excuse me - Pamusoro (s)/ Pamusoroyi (pl)',
    'Sorry - Ndineurombo',
    'Thank you - Waita zvako (s)/ Maita zvenyu (pl)'
];

const shonaPhrases2 = [ 
    'Good morning - Mangwanani',
    'Good afternoon - Masikati',
    'Good evening - Manheru',
    'Good night - Urare zvakanaka (s)/ Murare Zvakanaka (pl)'
]

const shonaPhrases3 = [
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
            randomPhraseIndex = Math.floor(Math.random() * shonaPhrases.length);
            let randomShonaPhrase = shonaPhrases[randomPhraseIndex];
            randomShonaPhrases.push(randomShonaPhrase);
            counter++;
            }
            
        }
    
    return randomShonaPhrases;
}


console.log(randomShona(shonaPhrases1));