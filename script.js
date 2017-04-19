
console.log('script src');

$(document).ready(onReady);

function onReady () {
}

$.ajax({
  url: 'http://www.omdbapi.com/?t=Am%C3%A9lie&y=2001',
  success: function(response) {
    console.log('this is the response ->', response);
    console.log('movie title ->', response.Title);
    // console.log('movie actors ->', response.Actors);
    // put title on the DOM
    $('#movie').append('<h1>' + "Movie Title:  " + response.Title + '</h1>').marquee({ duration: 8000,gap: 600,duplicated: true});
    $('#image-holder').append('<img src='+ response.Poster +'>');
    $('#plot').append('<div>' + "Movie Summary:  " + response.Plot + '</div>');
  }
});
