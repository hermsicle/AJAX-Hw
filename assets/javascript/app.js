$(document).ready(function () {

})

//My Topic will be on food
var topics =
    [
        'apple', 'carrot', 'watermelon', 'avocado', 'cucumber', 'asparagus', 'celery', 'broccoli',
        'banana', 'corn', 'mushrooms', 'pinapple', 'pumpkin', 'cocounut', 'kiwi'
    ]


function btn() {
    for (var i = 0; i < topics.length; i++) {
        //console.log(topics[i]);
        var buttons = topics[i]
        $('.btn-container').append('<button>' + buttons + '</button>');
        $('<button>' + buttons + '</button>').attr('id', 'btnId')
    }
}
btn();



$('button').on('click', function () {
    var food = $(this).attr("btnId");


    const queryUrl = 'https://api.giphy.com/v1/gifs/search?q=' + food +

        '&api_key=OvLuQaaXhKQu4K1uM7YL7gXdvstfNCiw&q=food&limit=10&offset=0&rating=G&lang=en';

    $.ajax({
        method: 'GET',
        url: queryUrl,
        datatype: JSON,
    }).then(function (data) {
        console.log(data);
    })

})


