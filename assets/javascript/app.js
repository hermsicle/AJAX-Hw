$(document).ready(function () {
    createBtn();
})


//Create a function that loops through the array and create button.
function createBtn() {
    var topics =
        [
            'apple', 'carrot', 'watermelon', 'avocado', 'cucumber', 'asparagus', 'celery', 'broccoli',
            'banana', 'corn', 'mushrooms', 'pinapple', 'pumpkin', 'coconut', 'kiwi'
        ]
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>" + topics[i] + "</button>");
        btn.addClass("jsonData");
        btn.attr("data-name", topics[i]);
        btn.attr("onclick", "displayGifs('" + topics[i] + "')");
        btn.appendTo("#buttons");
    }
}

function displayGifs(topic) {
    //var topic = $(this).attr('data-name'); 
    const queryUrl = 'https://api.giphy.com/v1/gifs/search?q=' +
        topic + '&api_key=OvLuQaaXhKQu4K1uM7YL7gXdvstfNCiw&limit=10&offset=0&rating=G&lang=en';
    //const api_key = '&api_key=OvLuQaaXhKQu4K1uM7YL7gXdvstfNCiw';
    $.ajax({
        method: 'GET',
        url: queryUrl,
    }).then(function (response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            //Create a if statement for rating 
            if (results[i].rating !== 'r' && results[i].rating !== 'pg-13') {
                //Creating a div for the gif
                var gifDiv = $('<div>');
                //Soring the results items rating
                var rating = results[i].rating;
                //Create a paragraph tag with the results rating
                var p = $('<p>').text("Rating: " + rating);
                var img = $('<img>');
                var imgURL = results[i].images.original_still.url; //this is the still URL 
                img.attr('src', imgURL);
                gifDiv.append(p);
                gifDiv.append(img);
                $('#gif-container').prepend(gifDiv);
            }
        }
    })
}





