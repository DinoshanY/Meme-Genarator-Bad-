function meme() {
    Images = Math.round(Math.random() * 9);

    let imgArray = [];
    for (let i = 9; i > -1; i--)
        imgArray[i] = (new Image().src = `Imagess/im${i}.png`)

    document.getElementById("meme").src = imgArray[Images];







    let word = ["slender man", "doge", "lenny face", "trollface", "forever alone", "me gusta", "do a barrel roll", "flipping tables", "ugandan knuckles", "scumbag steve", "you dont say", "woman yelling at a cat", "good guy greg", "pepe the frog", "dat boi", "bad luck brian", "harambe", "rage guy", "blue whale challenge", "Big Chungus", "Kappa", "Sad Keanu", "Grumpy Cat", "Nyan Cat", "Harlem Shake", "Facepalm", "Deal with it", "Gangnam Style", "True Story", "Cereal Guy", "Shrek", "Tide Pod Challenge", "Jojo's Bizarre Adventure", "U mad", "it's over 9000", "Ligma", "Sad Frog", "Cinnamon Challenge", "Leeroy Jenkins", "Reeeeeee", "Pewdiepie", "Duck Face2", "Poker Face", "Rickroll", "Me and the Boy's", "Like a Boss", "Big Smoke", "Stonks", "Karen", "Epic Sax Guy", "Fedora Guy", "T-Pose", "Tumblr", "9gag", "Deez Nut's", "Earth-chan", "Nicolas Cage", "longcat", "Awesome Face", "Herobrine", "Salt Bae", "Crying Cat", "Steamed Hams", "Gabe Newell", "Feels Good", "Beans", "Reddit", "Furries", "My name is Jeff", "JonTron", "Succ", "Gnome", "Crab Rave", "Ok Boomer", "Illuminati", "Thanos", "Hackerman", "Trumpet Boy", "Snoop Dogg", "Blinking Guy", "Peanut Butter Jelly Time", "Obunga", "Kermit", "Corona"];


    const Words = Math.round(Math.random() * (word.length - 1));
    const Wordsbot = Math.round(Math.random() * (word.length - 1));

    if (Words > 0 || Wordsbot > 0) {
        if (imgArray[Images] == `Imagess/im0.png`) {
            document.getElementById("memetext").innerHTML = word[Words];
            document.getElementById("memetext2").innerHTML = word[Wordsbot];
        }
        if (imgArray[Images] == `Imagess/im1.png`) {
            document.getElementById("memetext").innerHTML = word[Words];
            document.getElementById("memetext2").innerHTML = word[Wordsbot];
        }
        if (imgArray[Images] == `Imagess/im2.png`) {
            document.getElementById("memetext").innerHTML = word[Words];
            document.getElementById("memetext2").innerHTML = word[Wordsbot];
        }
        if (imgArray[Images] == `Imagess/im3.png`) {
            document.getElementById("memetext").innerHTML = word[Words];
            document.getElementById("memetext2").innerHTML = "";
        }
        if (imgArray[Images] == `Imagess/im4.png`) {
            document.getElementById("memetext").innerHTML = word[Words];
            document.getElementById("memetext2").innerHTML = word[Wordsbot];
        }
        if (imgArray[Images] == `Imagess/im5.png`) {
            document.getElementById("memetext").innerHTML = word[Words];
            document.getElementById("memetext2").innerHTML = "";
        }
        if (imgArray[Images] == `Imagess/im6.png`) {
            document.getElementById("memetext").innerHTML = word[Words];
            document.getElementById("memetext2").innerHTML = "";
        }
        if (imgArray[Images] == `Imagess/im7.png`) {
            document.getElementById("memetext").innerHTML = word[Words];
            document.getElementById("memetext2").innerHTML = word[Wordsbot];
        }
        if (imgArray[Images] == `Imagess/im8.png`) {
            document.getElementById("memetext").innerHTML = word[Words];
            document.getElementById("memetext2").innerHTML = "";
        }
        if (imgArray[Images] == `Imagess/im9.png`) {
            document.getElementById("memetext").innerHTML = word[Words];
            document.getElementById("memetext2").innerHTML = "";
        }
    } else {
        meme();
    }



}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    meme()
})
meme()