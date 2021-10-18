//step 1
var favourites = ["Fast1","Fast2","Fast3","Fast4","Fast5"];
console.log(favourites[1]);
//window.document.write("<hr>");
console.log("\n\n\n");
//step 2
var movies = new Array(5);
movies[0] = "Fast1";
movies[1] = "Fast2";
movies[2] = "Fast3";
movies[3] = "Fast4";
movies[4] = "Fast5";
console.log(movies[0]);
console.log("\n\n\n");

//step 3
movies[movies.length] = "Haunted";
window.document.write(movies.length);
console.log("\n\n\n");

//step 4
movies = ["Die Hard 1","Die Hard 2","Die Hard 3","Die Hard 4","Die Hard 5"];
delete movies[0];
console.log(movies);
console.log("\n\n\n");

//step 5
movies = ["Harry Potter 1","Harry Potter 2","Harry Potter 3","Harry Potter 4","Harry Potter 5","Harry Potter 6","Harry Potter 7"];
for(var i=0;i<movies.length;i++){
    console.log(movies[i]);
}
console.log("\n\n\n");

//step 6
//movies = ["Harry Potter 1","Harry Potter 2","Harry Potter 3","Harry Potter 4","Harry Potter 5","Harry Potter 6","Harry Potter 7"];
for(part in movies){
    console.log(movies[part]);
}

console.log("\n\n\n");

//step 7
movies = ["Die Hard", "Harry Potter 4", "Indiana Jones", "Inception", "Escape Plan", "Tom & Jerry", "Harry potter 5" ];
movies = movies.sort();
for(i in movies){
    console.log(movies[i]);
}
console.log("\n\n\n");

//step 8
var leastFavMovies = ["Justice League","Wonder Woman","Ant man"];
window.console.log("Movies I like:\n\n");
for (var i in movies){
    console.log(movies[i]);
}
window.console.log("\n\nMovies I regret watching:\n\n");
for(var i in leastFavMovies){
    console.log(leastFavMovies[i]);
}
console.log("\n\n\n");
//step 9
movies = movies.concat(leastFavMovies);
movies = movies.sort();
movies = movies.reverse();
for(var i in movies){
    console.log(movies[i]);
}
console.log("\n\n\n");

//step 10
console.log(movies.pop());
