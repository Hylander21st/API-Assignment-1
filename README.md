# Alden's Anime  Module

This Node.js module simulates interactions with a anime website, allowing users to search for anime, post reviews and ratings, get a random anime and more.

## Installation

Please make sure to download and install node.js. After that, please make sure to have Alden_animelist.js in the same project folder. 



# Get Started

Firstly, require the module in you project:

```javascript
const alden = require('./Alden_Anime');
```


## Functions

Below, there are examples of how to operate the functions.

## Get All Series

This function returns an array of all the anime currently added.
They are automatically sorted from highest rating to lowest.

```javascript
console.log(alden.getAllSeries())
``` 

## Get Anime by Title 

This function takes in a title string, this need not be the exact title.
This function returns an array of all the anime which contained the string in their exact title.


```javascript
console.log(JSON.stringify(alden.getAnimebyTitle('keyword'), null, 2))
//example:
console.log(JSON.stringify(alden.getAnimebyTitle('Attack'), null, 2))
``` 

## Get Comments by Title 

This function takes in a title.
This function returns an array of all the comments of the specific Anime.


```javascript
console.log(JSON.stringify(alden.getCommentsByTitle("title"), null, 2))
//example:
console.log(alden.getCommentsByTitle("My Hero Academia"))
``` 

## Get Random Anime 

This function returns a random Anime.

```javascript
console.log(alden.getRandomAnime())
``` 

## Add Anime 

This function takes in multiple variables which are id, title, genre, episodes, description, releaseYear, studio.
This function adds a new Anime into array with the given varibles.

```javascript
console.log(alden.addAnime(4, "Name", "Genres", episodes, "Description", year, "Studio"))
//example:
console.log(alden.addAnime(4, "Pluto", "Mystery", 8, "AI detective solves conspiracy", 2023, "Studio M2"))
``` 

## Add Review 

This function takes in a id,rating and comment variable.
This function adds a review to a new anime with the given variables.
A new review will include a rating and a comment.
This will affect the average ratings of the anime.

```javascript
console.log(alden.addReview(id, rating, "Comment"))
//example:
console.log(alden.addReview(1, 7, "Very Good Anime"))
``` 

## Edit Anime by ID

This function takes in a id variable.
This function edits the details of a certain anime by the given id. 

```javascript
console.log(alden.editAnimebyID(id, "title", "genre", episodes, "description", year, "studio"))
//example:
console.log(alden.editAnimebyID(1, "AOT", "Action", 100, "We need to survive against the titans behind the wall", 2013, "Kyoto Animation"))
``` 

## Delete Anime by ID

This function takes in a id variable.
This function deletes the details of an anime by the given id.

```javascript
console.log(JSON.stringify(alden.deleteAnimebyID(id), null, 2))
//example:
console.log(JSON.stringify(alden.deleteAnimebyID(3), null, 2))
``` 
