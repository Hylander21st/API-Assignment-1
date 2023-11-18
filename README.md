# Alden's Anime  Module

This Node.js module simulates interactions with a anime website, allowing users to search for anime, post reviews and ratings, get a random anime, and more.

## Installation

Please make sure to download and install node.js. After that, please download



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

This function returns an array of all the anime which contains "keyword" in their title.

```javascript
console.log(JSON.stringify(alden.getAnimebyTitle('Attack'), null, 2))
``` 

## Get Comments by Title 

This function returns an array of all the comments of a specific Anime.


```javascript
console.log(alden.getCommentsByTitle("My Hero Academia"))
``` 

## Get Random Anime 

This function returns a random Anime.

```javascript
console.log(alden.getRandomAnime())
``` 

## Add Anime 

This function adds a new Anime into array.

```javascript
console.log(alden.addAnime(4, "Name", "Genres", episodes, "Description", year, "Studio"))
``` 

## Add Review 

This function adds a review to a new anime.
A new review will include a rating and a comment.
This will affect the average ratings of anime.

```javascript
console.log(alden.addReview(id, rating, "Comment"))
``` 

## Edit Anime by ID

This function edits the details of a certain anime by ID. 

```javascript
console.log(alden.editAnimebyID(id, "title", "genre", episodes, "description", year, "studio"))
``` 

## Delete Anime by ID

This function deletes the details of an anime by ID.

```javascript
console.log(JSON.stringify(alden.deleteAnimebyID(3), null, 2))
``` 
