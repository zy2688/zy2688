$(function () {
    $('.music_list_title').on('click', function (event) {
        $(this).next('.music_box_list').toggle(0, function () {
            //console.log("1");
        }, function () {
            //console.log("0");
        });
    });
});

