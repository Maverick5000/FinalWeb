$(document).ready(function () {
    console.log("ready!");

    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

    $.ajax({
        type: "GET",
        url: "/api/getvideos/" + id,
        success: function (video) {
            var source = $('#index-template').html();
            var template = Handlebars.compile(source);

            video.forEach(function(item) {

                var titulo = item.nombre;
                var url = item.srcUrl;
                var username = item.usernombre

                var context = {
                    title: titulo,
                    url: url,
                    user: username
                }

                $("#main-content").append(template(context));

            });
        }
    });

});