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
    let animename = AnimeStates.filter(s => s.title === title)
    if (animename) {
        //s is curreent instance
        //runs through each instance to match s.title== current title
        return animename
    } else {
        return "There is no anime by that Name"
    }

}

function getCommentsByTitle(title) {
    // Find the anime with the specified title
    const anime = AnimeStates.find(anime => anime.title === title);

    // Check if the anime is found
    if (!anime) {
        return []; // Anime not found, return an empty array
    }

    // Extract comments from the reviews
    const comments = anime.reviews.map(review => review.comments);

    // Filter out empty comments
    return comments.filter(comment => comment !== '');
}



//POSTER

function addAnime(id, title, genre, episodes, description, releaseYear, studio) {
    AnimeStates.push({
        id: id,
        title: title,
        genre: genre,
        episodes: episodes,
        description: description,
        releaseYear: releaseYear,
        reviews: [],
        averageRating: 0.0, //  initialize the averageRating to 0.0
        studio: studio
    });
}

function addReview(id, rating, review) {
    let anime = AnimeStates.find(a => a.id == id)

    if (anime) {
        // Add the review to the reviews array
        anime.reviews.push({
            rating: rating,
            comments: review
        });
        // let averageRating = 0;
        const sum = anime.reviews.length
        // calc total rating from all reviews
        const total = anime.reviews.reduce((a, b) => a + b.rating, 0)
        anime.averagerating = total / sum
        return "Your rating of " + rating + " and comment:" + review + " has been added"
    }


}

function editAnimebyID(id, title, genre, episodes, description, releaseYear, studio) {
    let anime = AnimeStates.find(a => a.id == id)
    if (anime) {

        anime.title = title,
            anime.genre = genre,
            anime.episodes = episodes,
            anime.description = description,
            anime.releaseYear = releaseYear,
            anime.studio = studio


    }
}
//DELETE
function deleteAnimebyID(id) {
    AnimeStates.splice(id, 1)
    return AnimeStates
}

module.exports = {
    getAllSeries,
    getAnimebyTitle,
    addAnime,
    addReview,
    deleteAnimebyID,
    getCommentsByTitle,
    editAnimebyID,
}
