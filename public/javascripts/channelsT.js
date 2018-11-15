$(document).ready(function () {
    console.log("ready!");

    $.ajax({
        type: "GET",
        url: "/api/getchannels",
        success: function (channels) {
            var source = $('#channel-template').html();
            var sourceV = $('#video-template').html();
            var template = Handlebars.compile(source);
            var template2 = Handlebars.compile(sourceV);

            channels.forEach(function (item) {

                var titulo = item.nombre;
                var username = item.user;
                var id = item._id;

                var context = {
                    nombre: titulo,
                    id: id,
                }

                $("#main-content-channels").append(template(context));

                item.videos.forEach(function (url) {
                    var context2 = {
                        url: url,
                        user: username
                    }

                    $("#" + id).append(template2(context2));
                });

            });
        }
    });

});