const films = [
 {
      id: "287947",
      title: "Shazam!",
      poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
      overview:
         "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
      release_date: 1553299200,
      genres: ["Action", "Comedy", "Fantasy"],
   },
   {
      id: "299537",
      title: "Captain Marvel",
      poster: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
      overview:
         "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
      release_date: 1551830400,
      genres: ["Action", "Adventure", "Science Fiction"],
   },
   {
      id: "522681",
      title: "Escape Room",
      poster: "https://image.tmdb.org/t/p/w500/8Ls1tZ6qjGzfGHjBB7ihOnf7f0b.jpg",
      overview:
         "Six strangers find themselves in circumstances beyond their control, and must use their wits to survive.",
      release_date: 1546473600,
      genres: ["Thriller", "Action", "Horror", "Science Fiction"],
   },
   {
      id: "166428",
      title: "How to Train Your Dragon: The Hidden World",
      poster: "https://image.tmdb.org/t/p/w500/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
      overview:
         "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
      release_date: 1546473600,
      genres: ["Animation", "Family", "Adventure"],
   },
   {
      id: "450465",
      title: "Glass",
      poster: "https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
      overview:
         "In a series of escalating encounters, security guard David Dunn uses his supernatural abilities to track Kevin Wendell Crumb, a disturbed man who has twenty-four personalities. Meanwhile, the shadowy presence of Elijah Price emerges as an orchestrator who holds secrets critical to both men.",
      release_date: 1547596800,
      genres: ["Documentary"],
   },
   {
      id: "495925",
      title: "Doraemon the Movie: Nobita's Treasure Island",
      poster: "https://image.tmdb.org/t/p/w500/xiLRClQmKSVAbiu6rgCRzNQjcSX.jpg",
      overview:
         "The story is based on Robert Louis Stevenson's Treasure Island novel.",
      release_date: 1520035200,
      genres: ["Animation"],
   },
   {
      id: "329996",
      title: "Dumbo",
      poster: "https://image.tmdb.org/t/p/w500/deTOAcMWuHTjOUPQphwcPFFfTQz.jpg",
      overview:
         "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
      release_date: 1553644800,
      genres: ["Adventure", "Family", "Fantasy"],
   },
   {
      id: "299536",
      title: "Avengers: Infinity War",
      poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      overview:
         "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      release_date: 1524618000,
      genres: ["Adventure", "Action", "Science Fiction"],
   },
   {
      id: "458723",
      title: "Us",
      poster: "https://image.tmdb.org/t/p/w500/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
      overview:
         "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
      release_date: 1552521600,
      genres: ["Documentary", "Family"],
   },
   {
      id: "424783",
      title: "Bumblebee",
      poster: "https://image.tmdb.org/t/p/w500/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
      overview:
         "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken.  When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
      release_date: 1544832000,
      genres: ["Action", "Adventure", "Science Fiction"],
   },
   {
      id: "920",
      title: "Cars",
      poster: "https://image.tmdb.org/t/p/w500/qa6HCwP4Z15l3hpsASz3auugEW6.jpg",
      overview:
         "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
      release_date: 1149728400,
      genres: ["Animation", "Adventure", "Comedy", "Family"],
   },
   {
      id: "299534",
      title: "Avengers: Endgame",
      poster: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      overview:
         "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      release_date: 1556067600,
      genres: ["Adventure", "Science Fiction", "Action"],
   },
   {
      id: "324857",
      title: "Spider-Man: Into the Spider-Verse",
      poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      overview:
         "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson 'Kingpin' Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
      release_date: 1544140800,
      genres: ["Action", "Adventure", "Animation", "Science Fiction", "Comedy"],
   },
   {
      id: "157433",
      title: "Pet Sematary",
      poster: "https://image.tmdb.org/t/p/w500/7SPhr7Qj39vbnfF9O2qHRYaKHAL.jpg",
      overview:
         "Louis Creed, his wife Rachel and their two children Gage and Ellie move to a rural home where they are welcomed and enlightened about the eerie 'Pet Sematary' located nearby. After the tragedy of their cat being killed by a truck, Louis resorts to burying it in the mysterious pet cemetery, which is definitely not as it seems, as it proves to the Creeds that sometimes dead is better.",
      release_date: 1554339600,
      genres: ["Thriller", "Horror"],
   },
   {
      id: "456740",
      title: "Hellboy",
      poster: "https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
      overview:
         "Hellboy comes to England, where he must defeat Nimue, Merlin's consort and the Blood Queen. But their battle will bring about the end of the world, a fate he desperately tries to turn away.",
      release_date: 1554944400,
      genres: ["Fantasy", "Action"],
   },
   {
      id: "537915",
      title: "After",
      poster: "https://image.tmdb.org/t/p/w500/bk8LyaMqUtaQ9hUShuvFznQYQKR.jpg",
      overview:
         "A young woman falls for a guy with a dark secret and the two embark on a rocky relationship.",
      release_date: 1554944400,
      genres: ["Mystery", "Drama"],
   },
   {
      id: "485811",
      title: "Redcon-1",
      poster: "https://image.tmdb.org/t/p/w500/vVPrWngVJ2cfYAncBedQty69Dlf.jpg",
      overview:
         "After a zombie apocalypse spreads from a London prison, the UK is brought to its knees. The spread of the virus is temporarily contained but, without a cure, it’s only a matter of time before it breaks its boundaries and the biggest problem of all… any zombies with combat skills are now enhanced. With the South East of England quarantined from the rest of the world using fortified borders, intelligence finds that the scientist responsible for the outbreak is alive and well in London. With his recovery being the only hope of a cure, a squad of eight Special Forces soldiers is sent on a suicide mission to the city, now ruled by the undead, with a single task: get him out alive within 72 hours by any means necessary. What emerges is an unlikely pairing on a course to save humanity against ever-rising odds.",
      release_date: 1538096400,
      genres: ["Action", "Horror"],
   },
   {
      id: "471507",
      title: "Destroyer",
      poster: "https://image.tmdb.org/t/p/w500/sHw9gTdo43nJL82py0oaROkXXNr.jpg",
      overview:
         "Erin Bell is an LAPD detective who, as a young cop, was placed undercover with a gang in the California desert with tragic results. When the leader of that gang re-emerges many years later, she must work her way back through the remaining members and into her own history with them to finally reckon with the demons that destroyed her past.",
      release_date: 1545696000,
      genres: ["Horror", "Thriller"],
   },
   {
      id: "400650",
      title: "Mary Poppins Returns",
      poster: "https://image.tmdb.org/t/p/w500/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
      overview:
         "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.",
      release_date: 1544659200,
      genres: ["Documentary"],
   },
   {
      id: "297802",
      title: "Aquaman",
      poster: "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
      overview:
         "Once home to the most advanced civilization on Earth, Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people and then the surface world. Standing in his way is Arthur Curry, Orm's half-human, half-Atlantean brother and true heir to the throne.",
      release_date: 1544140800,
      genres: ["Action", "Adventure", "TV Movie"],
   },
   {
      id: "512196",
      title: "Happy Death Day 2U",
      poster: "https://image.tmdb.org/t/p/w500/4tdnePOkOOzwuGPEOAHp8UA4vqx.jpg",
      overview:
         "Collegian Tree Gelbman wakes up in horror to learn that she's stuck in a parallel universe. Her boyfriend Carter is now with someone else, and her friends and fellow students seem to be completely different versions of themselves. When Tree discovers that Carter's roommate has been altering time, she finds herself once again the target of a masked killer. When the psychopath starts to go after her inner circle, Tree soon realizes that she must die over and over again to save everyone.",
      release_date: 1550016000,
      genres: ["Comedy", "Horror", "Science Fiction"],
   },
   {
      id: "390634",
      title: "Fate/stay night: Heaven’s Feel II. lost butterfly",
      poster: "https://image.tmdb.org/t/p/w500/nInpnGCjhzVhsASIUAmgM1QIhYM.jpg",
      overview:
         "Theatrical-release adaptation of the visual novel 'Fate/stay night', following the third and final route. (Part 2 of a trilogy.)",
      release_date: 1547251200,
      genres: ["Animation", "Action", "Fantasy", "Drama"],
   },
   {
      id: "500682",
      title: "The Highwaymen",
      poster: "https://image.tmdb.org/t/p/w500/4bRYg4l12yDuJvAfqvUOPnBrxno.jpg",
      overview:
         "In 1934, Frank Hamer and Manny Gault, two former Texas Rangers, are commissioned to put an end to the wave of vicious crimes perpetrated by Bonnie Parker and Clyde Barrow, a notorious duo of infamous robbers and cold-blooded killers who nevertheless are worshiped by the public.",
      release_date: 1552608000,
      genres: ["Music"],
   }
];

let moveBOX = document.querySelector(".move-box")

   films.forEach((film) => {
      let filmsBox = document.createElement("div")
      filmsBox.classList.add("films-box");
      filmsBox.innerHTML = `
      <div class="move-img">
         <img src="${film.poster}" alt=""  style="border-radius: 10px 0 0 10px; width: 155px; height: 240px; "  />
      </div>
            <div class="move-info" >
            <h4 class="move-name">${film.title}</h4>
            
            <p class="p">Genres:</p>
            <p class="move-genres">${film.genres.join(' ')}</p>
            <p class="move-id">id: ${film.id}</p>
            <button class="button1">download</button>
            <button class="button2">watch</button>
            </div>
      `;
      moveBOX.appendChild(filmsBox)
   }
   
   )



