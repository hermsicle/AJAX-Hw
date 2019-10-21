$(document).ready(function () {

})

//My Topic will be on food
var topics =
    [
        'apple', 'carrot', 'watermelon', 'avocado', 'cucumber', 'asparagus', 'celery', 'broccoli',
        'banana', 'corn', 'mushrooms', 'pinapple', 'pumpkin', 'cocounut', 'kiwi'
    ]



for (var i = 0; i < topics.length; i++) {
    //console.log(topics[i]);
    var buttons = topics[i]
    $('.btn-container').append('<button>' + buttons + '</button>');
    $('<button>' + buttons + '</button>').attr('id', 'btnId')
}


$('button').on('click', function () {
    var food = $(this).attr("btnId");


    const queryUrl = 'https://api.giphy.com/v1/gifs/search?q=' + food +

        '&api_key=OvLuQaaXhKQu4K1uM7YL7gXdvstfNCiw&q=cat&limit=10';

    $.ajax({
        method: 'GET',
        url: queryUrl,
        datatype: JSON,
    }).then(function (response) {
        var results = (response.data[0].images.fixed_height)
        console.log(response.data[0].images.fixed_height);
        $('.gif-container').prepend(results)

    })
})

