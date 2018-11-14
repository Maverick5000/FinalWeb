$(document).ready(function () {
    console.log("ready!");

    $.ajax({
        type: "GET",
        url: "/api/getvideos",
        success: function (videos) {
            var source = $('#index-template').html();
            var template = Handlebars.compile(source);

            videos.forEach(function(item) {

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