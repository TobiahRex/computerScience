/*
Querying Trees:

Sometimes, in addition to flat arrays, we need to query trees. Trees pose a challenge because we need to flatten them into arrays in order to apply filter() and map() operations on them. In this section we'll define a concatAll() function that we can combine with map() and filter() to query trees.

Exercise 9: Flatten the movieLists array into an array of video ids

Let's start by using two nested forEach loops to collect the id of every video in the two-dimensional movieLists array.
*/

function queryingTrees() {
	var movieLists = [
		{
			name: "New Releases",
			videos: [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "Dramas",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	],
	allVideoIdsInMovieLists = [];

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use two nested forEach loops to flatten the movieLists into a list of
	// video ids.
	movieLists.forEach((list) => {
		list.videos.forEach((movie) => {
			allVideoIdsInMovieLists.push(movie.id);
		});
	});
	// ------------   INSERT CODE HERE!  -----------------------------------

	return allVideoIdsInMovieLists;

}
// -----------------------------------------------------------------------------
/*
Flattening trees with nested forEach expressions is easy because we can explicitly add items to the array. Unfortunately it's exactly this type of low-level operation that we've been trying to abstract away with functions like map() and filter(). Can we define a function that's abstract enough to express our intent to flatten a tree, without specifying too much information about how to carry out the operation?

Exercise 10: Implement concatAll()

Let's add a concatAll() function to the Array type. The concatAll() function iterates over each sub-array in the array and collects the results in a new, flat array. Notice that the concatAll() function expects each item in the array to be another array.
*/

Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		// ------------ INSERT CODE HERE! ----------------------------
		// Add all the items in each subArray to the results array.
		results = results.concat(subArray);
		// ------------ INSERT CODE HERE! ----------------------------
	});

	return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array
// console.log([[1,2,3],[4,5,6],[7,8,9]].concatAll());


// -----------------------------------------------------------------------------
/*
concatAll is a very simple function, so much so that it may not be obvious yet how it can be combined with map() to query a tree. Let's try an example...

Exercise 11: Use map() and concatAll() to project and flatten the movieLists into an array of video ids

Hint: use two nested calls to map() and one call to concatAll().
*/
function exc11() {
	var movieLists = [
		{
			name: "New Releases",
			videos: [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "Dramas",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
					"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	];

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use map and concatAll to flatten the movieLists in a list of video ids.
	movieLists = movieLists
	.map((list) => list.videos.map((video) => video.id))
	.concatAll();
	// ------------   INSERT CODE HERE!  -----------------------------------

	return movieLists // Complete this expression!
}
// console.log(exc11());

// -----------------------------------------------------------------------------
/*
Wow! Great work. Mastering the combination of map() and concatAll() is key to effective functional programming. You're half way there! Let's try a more complicated example...

Exercise 12: Retrieve id, title, and a 150x200 box art url for every video

You've managed to flatten a tree that's two levels deep, let's try for three! Let's say that instead of a single boxart url on each video, we had a collection of boxart objects, each with a different size and url.

>>> Create a query that selects {id, title, boxart} for every video in the movieLists.

This time though, the boxart property in the result will be the >>> url of the boxart object with dimensions of 150x200px.

Let's see if you can solve this problem with map(), concatAll(), and filter().

There's just more one thing: you can't use indexers. In other words, this is illegal:

var itemInArray = movieLists[0];

Furthermore, you're not allowed to use indexers in any of the remaining exercises unless you're implementing one of the five functions. There is a very good reason for this restriction, and that reason will eventually be explained. For now, you'll simply have to accept it on faith that this restriction serves a purpose. :-)
*/
function exc12() {
	var movieLists = [
		{
			name: "Instant Queue",
			videos : [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxarts": [
						{
							width: 150,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
						},
						{
							width: 200,
							height: 200,
							url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
						}
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxarts": [
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "New Releases",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxarts": [
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxarts": [
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
						{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	];

	movieLists = movieLists
	.map((list) =>
	list.videos.map((video) =>
	({
		id: video.id,
		title: video.title,
		boxart: video.boxarts,
	})
)
)
.concatAll()
.map((video) => {
	let newBoxArt = '';
	video.boxart
	.filter((art) => (art.height === 200 && art.width === 150))
	.map((attr) => {
		newBoxArt = attr.url;
	})
	video.boxart = newBoxArt;
	return video;
});

// Use one or more map, concatAll, and filter calls to create an array with the following items
/*
[
{
"id": 675465,
"title": "Fracture",
"boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
}, {
"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
{"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
{"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
];
*/

return movieLists // Complete this expression!

}
// console.log(exc12());
// -----------------------------------------------------------------------------
/*
Fantastic job! Now you've learned to use concatAll() alongside map() and filter() to query trees. Notice that map() and concatAll() are very commonly chained together. Let's create a small helper function to help us with this common pattern.

Exercise 13: Implement concatMap()

Nearly every time we flatten a tree we chain map() and concatAll(). Sometimes, if we're dealing with a tree several levels deep, we'll repeat this combination many times in our code. To save on typing, let's create a concatMap function that's just a map operation, followed by a concatAll.
*/

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
	return this.
	map(function(item) {
		// ------------   INSERT CODE HERE!  ----------------------------
		// Apply the projection function to each item. The projection
		// function will return a new child array. This will create a
		// two-dimensional array.
		return projectionFunctionThatReturnsArray(item);
		// ------------   INSERT CODE HERE!  ----------------------------
	}).
	// apply the concatAll function to flatten the two-dimensional array
	concatAll();
};

/*
var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
// collect all the words for each number, in every language, in a single, flat list
var allWords = [0,1,2].
concatMap(function(index) {
return spanishFrenchEnglishWords[index];
});

return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
*/
var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
// console.log([0,1,2].concatMap((index) => spanishFrenchEnglishWords[index]));
// -----------------------------------------------------------------------------
/*
Now, instead of using map().concatAll() to flatten a tree, we can just use concatMap helper function.

Exercise 14: Use concatMap() to retrieve id, title, and 150x200 box art url for every video

Let's repeat the exercise we just performed. However this time we'll simplify the code by replacing the map().concatAll() calls with concatMap().
*/
function exc14() {
	var movieLists = [
		{
			name: "Instant Queue",
			videos : [
				{
					"id": 70111470,
					"title": "Die Hard",
					"boxarts": [
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 654356453,
					"title": "Bad Boys",
					"boxarts": [
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		},
		{
			name: "New Releases",
			videos: [
				{
					"id": 65432445,
					"title": "The Chamber",
					"boxarts": [
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 4.0,
					"bookmark": []
				},
				{
					"id": 675465,
					"title": "Fracture",
					"boxarts": [
						{ width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
						{ width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
						{ width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
					],
					"url": "http://api.netflix.com/catalog/titles/movies/70111470",
					"rating": 5.0,
					"bookmark": [{ id: 432534, time: 65876586 }]
				}
			]
		}
	];
	// My Initial Answer
	// return movieLists.concatMap(({ videos }) =>
	// 	videos.map(({ id, title, boxarts }) =>
	// 		({
	// 			id,
	// 			title,
	// 			boxart: boxarts,
	// 		})
	// 	))
	// 	.map((video) => {
	// 		let newBoxArt = ''
	// 		video.boxart = video.boxart
	// 		.filter(({ width, height }) => (width === 150 && height === 200))
	// 		.map(({ url }) => {
	// 			newBoxArt = url;
	// 		})
	// 		video.boxart = newBoxArt;
	// 		return video;
	// 	});

	/*
	Their Answer
	- Something that was not clear to me with before studying their answer was thinking of concatMap as a pattern that takes a nested data structure from an inner layer, and moves it to an outter layer.  The map is there to be the iterator, but the concat is there to actually do the moving between layers.  So in the future, when you need to move a nested data structure to an upper level, this would be the patter.  Everything else in their answer, is simply there to manipulate the data that we'll eventually move...nothing else.
	*/

	return movieLists.concatMap(({ videos }) =>
		videos.concatMap((video) =>
			video.boxarts
			.filter(({ width }) => width === 150)
			.map((boxart) =>
			({ id: video.id, title: video.title, boxart: boxart.url })
			);
		);
	);
	// movieLists = movieLists.concatMap(function(movieList) {
	//
	// 	let newMovieList = movieList.videos.concatMap(function(video) {
	//
	// 		let newVideo = video.boxarts
	// 		.filter(function(boxart) {
	// 			return boxart.width === 150;
	// 		})
	// 		.map(function(boxart) {
	// 			return {id: video.id, title: video.title, boxart: boxart.url};
	// 		});
	// 		// console.log('newVideo: ', newVideo);
	// 		return newVideo
	// 	});
	// 	console.log('newMovieList: ', newMovieList);
	// 	return newMovieList;
	// });
	// console.log('movieLists: ', movieLists);

	// Use one or more concatMap, map, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];

	return movieLists // Complete this expression!

}
// console.log(exc14());
exc14();
