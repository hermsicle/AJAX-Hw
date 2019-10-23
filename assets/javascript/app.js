$(document).ready(function () {
    createBtn();
})

//Create a function that loops through the array and create button.
function createBtn() {
    var topics =
        [
            'apple', 'carrot', 'watermelon', 'avocado', 'cucumber', 'asparagus', 'celery', 'broccoli',
            'banana', 'corn', 'mushrooms', 'pinapple', 'pumpkin', 'cocounut', 'kiwi'
        ]
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>" + topics[i] + "</button>");
        btn.addClass("jsonData");
        btn.attr("data-name", topics[i]);
        btn.attr("onclick", "displayGifs('" + topics[i] + "')");
        btn.appendTo("#buttons");
    }
}

$('<button>').on('click', function () {
    displayGifs();
})


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
            var img = $('<img>');
            var imgURL = results[i].images.fixed_height.url;
            img.attr('src', imgURL);
            $('#gif-container').prepend(img);
        }
    })
}

