const AnimeStates = [
    {
        id: 1,
        title: 'Attack on Titan',
        genre: 'Action, Drama, Fantasy',
        episodes: 75,
        description: 'In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, the story follows Eren Yeager and his friends who join the military to fight the Titans.',
        releaseYear: 2013,
        reviews: [
            {
                rating: 9.0,
                comments: 'Nice',
            },
            {
                rating: 4.2,
                comments: 'Not a fan of the story',
            },
            {
                rating: 1.0,
                comments: 'Bad',
            },
        ],
        averagerating: 4.7,
        studio: 'Wit Studio',
    },
    {
        id: 2,
        title: 'My Hero Academia',
        genre: 'Action, Comedy, Superhero',
        episodes: 104,
        description: 'In a world where people with superpowers, known as "Quirks," are the norm, a boy without them is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.',
        releaseYear: 2016,
        reviews: [
            {
                rating: 8.0,
                comments: 'Really liked the story',
            },
            {
                rating: 4.2,
                comments: 'Cringe',
            },
            {
                rating: 1.0,
                comments: 'Not my cup of tea',
            },
        ],
        averagerating: 4.4,
        studio: 'Bones',
    },
    {
        id: 3,
        title: 'Jujutsu Kaisen',
        genre: 'Action, Demons, School',
        episodes: 48,
        description: 'In a world where demons feed on unsuspecting humans, fragments of the legendary and feared demon Ryoumen Sukuna were lost and scattered about. ',
        releaseYear: 2020,
        reviews: [
            {
                rating: 9.0,
                comments: 'Good Action',
            },
            {
                rating: 6.2,
                comments: 'Predictable',
            },
            {
                rating: 2.0,
                comments: 'Got Bored',
            },
        ],
        averagerating: 5.7,
        studio: 'Bones',
    },
];

//GETTER


//a,b is instance 1 and 2 
//b - a is desecending order 
//function to get all the series and they will be listed out with descending order of rating
function getAllSeries() {
    return AnimeStates
        //anime.averagerating || 0.0 checks if anime.averagerating is defined; if not, it returns 0.0.
        //cause if a series is added with no reviews, no average rating
        .sort((a, b) => (b.averagerating || 0) - (a.averagerating || 0))
        //creates and returns a new array with just the title and rating properties
        .map(anime => ({ title: anime.title, rating: anime.averagerating || 0.0 }));
}

//function to get an anime by its title
function getAnimebyTitle(title) {
    // includes so that even if not exact, will still pop up
    // s is the current instance
    // runs through each instance to match s.title == current title
    let animename = AnimeStates.filter(s => s.title.includes(title));

    // check if animename is not an empty array
    if (animename.length > 0) {
        return animename;
    } else {
        return "There is no anime by that Name";
    }
}

//function to get the comments on an anime
function getCommentsByTitle(title) {
    // find the anime with the specified title
    const anime = AnimeStates.find(anime => anime.title === title);

    // check if anime is found
    if (!anime) {
        // if not found, return error
        return "There is no anime by that name";
    } else {  // creates and returns a new array with just the comments
        const comments = anime.reviews.map(review => review.comments);

        // filter out empty comments
        return comments.filter(comment => comment !== '');
    }


}

//function to get a random anime
function getRandomAnime() {
    // to just get the range of inedexes possible etc 1 to 3
    const animeCount = AnimeStates.length;
    // random number generator
    //.floor rounds nearest integer as math.random generates a float number
    // multiply by anime count meaning it will be 1 - anime count
    const randomIndex = Math.floor(Math.random() * animeCount);
    const randomAnime = AnimeStates[randomIndex];
    return randomAnime;
}

//POSTER
//function to add an anime into the array
function addAnime(title, genre, episodes, description, releaseYear, studio) {
    // find the highest id among all anime in the AnimeStates array
    // maxId is the accumulator, initially set to 0, and anime represents each anime in the array
    // math.max compares which id is more
    const highestId = AnimeStates.reduce((maxId, anime) => Math.max(maxId, anime.id), 0);

    AnimeStates.push({
        id: highestId + 1,
        title: title,
        genre: genre,
        episodes: episodes,
        description: description,
        releaseYear: releaseYear,
        reviews: [],
        averageRating: 0.0, //  initialize the averageRating to 0.0
        studio: studio
    });
    return "Anime added sucessfully"
}

//function to add a review which will add to the rating and comments
function addReview(id, rating, comment) {
    let anime = AnimeStates.find(a => a.id == id)
    //check if anime exists
    if (anime) {
        // rating has to be 1 to 10
        if (rating >= 1 && rating <= 10) {
            // add the review to the reviews array
            anime.reviews.push({
                rating: rating,
                comments: comment
            });
            const sum = anime.reviews.length;
            // calc total rating from all reviews
            // reduce adds up all the ratings 
            // a is initially 0, b is the rating they add to sum it up
            const total = anime.reviews.reduce((a, b) => a + b.rating, 0);
            anime.averagerating = total / sum;
            return "Your rating of " + rating + " and comment: " + comment + " has been added";
        } else {
            return "Please enter a rating between 1 and 10";
        }
    } else {
        return "Anime not found";
    }
}

//function to edit an anime's details
function editAnimebyID(id, title, genre, episodes, description, releaseYear, studio) {
    //find the anime you want to edit through id
    let anime = AnimeStates.find(a => a.id == id)
    //if anime exists
    if (anime) {
        //change the details with the new inputted ones
        anime.title = title,
            anime.genre = genre,
            anime.episodes = episodes,
            anime.description = description,
            anime.releaseYear = releaseYear,
            anime.studio = studio

        return "Anime edited sucessfully"
    }
}

//DELETE
//function to delete an anime using id
function deleteAnimebyID(id) {
    //find the anime you want to delete using id
    let anime = AnimeStates.find(a => a.id == id)
    //if anime exists
    if (anime) {
        //removes the element from the array
        AnimeStates.splice(id - 1, 1)
        return "Anime deleted sucessfully"
    }
    else { return "There is no anime with that id" }
}

module.exports = {
    getAllSeries,
    getAnimebyTitle,
    addAnime,
    addReview,
    deleteAnimebyID,
    getCommentsByTitle,
    editAnimebyID,
    getRandomAnime,
}
