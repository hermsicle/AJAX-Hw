$(document).ready(function () {
    //Array for searched topics to be added
    var topics = [];

    function displayGifs() {
        var x = $(this).data('search');
        console.log(x);
    
        const queryUrl = 'https://api.giphy.com/v1/gifs/search?q=' +
            x + '&api_key=OvLuQaaXhKQu4K1uM7YL7gXdvstfNCiw&limit=10&offset=0&rating=G&lang=en';

        $.ajax({
            method: 'GET',
            url: queryUrl,
        }).then(function (response) {
            var results = response.data;
            for (var i = 0; i < results.length; i++) {
                    var gifDiv = $('<div>');
                    var rating = results[i].rating;
                    var p = $('<p>').text("Rating: " + rating);
                    var img = $('<img>');
                    var imgURL = results[i].images.original_still.url; //this is the still URL
                    var gifURL = results[i].images.fixed_height.url; //moving gif
                    img.addClass('gif');
                    img.attr('data-state', 'still');
                    img.attr('data-animate', gifURL);
                    img.attr('data-still' , imgURL);
                    img.attr('src', imgURL);
                    gifDiv.append(p);
                    gifDiv.append(img);
                    $('#gif-container').prepend(gifDiv);
            }
        })
    }
    

    //Submit button click event takes search term from form input, trims and pushes to topics array, displays button
    $("#addFruit").on("click", function (event) {
        event.preventDefault();
        var newFruit = $("#user-input").val().trim();
        topics.push(newFruit);
        console.log(topics);
        $("#user-input").val('');
        displayButtons();
    });

    //Function iterates through topics array to display button with array values in "myButtons" section of HTML
    function displayButtons() {
        $("#myButtons").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $('<button class="btn btn-primary">');
            a.attr("id", "fruit");
            a.attr("data-search", topics[i]);
            a.text(topics[i]);
            $("#myButtons").append(a);
        }
    }


    displayButtons();

    //Click event on button with id of "fruit" executes displayNetflixShow function
    $(document).on("click", "#fruit", displayGifs);

    //Click event on gifs with class of "gif" executes pausePlayGifs function
    $(document).on("click", ".gif", pausePlayGifs);

    //Function accesses "data-state" attribute and depending on status, changes image source to "data-animate" or "data-still"
    function pausePlayGifs() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    }

});
