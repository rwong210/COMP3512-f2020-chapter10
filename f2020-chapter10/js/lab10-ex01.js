const titles = ["Girl with a Pearl Earring","Artist Holding a Thistle","Portrait of Eleanor of Toledo"];

const years = [1864, 1642, 1890, 1950];


const paintings = [ {title: "Girl with a Pearl Earring", artist: "Vermeer", year: 1665}, 
                  {title: "Artist Holding a Thistle", artist: "Durer", year: 1493}, 
                  {title: "Burial at Ornans", artist: "Courbet", year: 1849},
                  {title: "Sunflowers", artist: "Van Gogh", year: 1889},
                  {title: "Portrait of Eleanor of Toledo", artist: "Bronzino", year: 1544},
                  {title: "Wheatfield with Crows", artist: "Van Gogh", year: 1890},
                  {title: "Music in the Tuileries Gardens", artist: "Manet", year: 1862},
                  {title: "Balcony", artist: "Manet", year: 1868}];


/* add code here */

const sortedTitles = titles.sort();
console.log(sortedTitles);

// const sortedPaintingsByYear = paintings.sort( function(a,b){
//     if (a.year < b.year)
//     return -1;
//     else if (a.year > b.year)
//     return 1;
//     else 
//     return 0;
// });
// console.log(sortedPaintingsByYear);

const sortedPaintingsByYear = paintings.sort( (a,b) => {
    return a.year < b.year ? -1 : 1;

});

const nineteenthCentury = paintings.filter(painting => (painting.year >= 1800 && painting.year < 1900));
console.log(nineteenthCentury);

const manet = paintings.find ( painting => painting.artist == "Manet");
console.log (manet);

paintings.forEach ( p => console.log (p.title + ' by ' + p.artist));

const re = new RegExp('with', 'i');
const regexEx = paintings.filter( p => p.title.match(re) );
console.log(regexEx);

//adds the titles array to the end of the moreTitles array
const moreTitles = ["Balcony", "Sunflowers", ...titles];
console.log(moreTitles);

//same as above but with out spread operator (... elipses)
const moreTitlesOldFashioned = ["Balcony", "Sunflowers"];
for (let t of titles){
    moreTitlesOldFashioned.push(t);
}
console.log(moreTitlesOldFashioned);

//create a new array based on data within another array
console.log('--- create new simple array form existing array of objects');
const artists1 = [];
for (let painting of paintings) {
    artists1.push(painting.artist);
}
console.log(artists1);

// returns an new array after performing the function on each element of the original array
const artists2 = paintings.map( function (painting) {
    return painting.artist;
});
console.log(artists2);

//same as above with arrrow function
const artists3 = paintings.map( painting => painiting.artist );
console.log(artists3);
