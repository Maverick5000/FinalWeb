$(document).ready(function () {
    console.log("ready!");

    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

    $.ajax({
        type: "GET",
        url: "/api/getchannels/" + id,
        success: function (channels) {
            var source = $('#channel-template').html();
            var template = Handlebars.compile(source);


            channels.forEach(function (item) {

                var videoList = item.videos;
                var titulo = item.nombre;
                var channelId = item._id;

                var context = {
                    nombre: titulo,
                    id: channelId
                }

                $("#main-content-channels").append(template(context));

                fill(videoList, channelId);

            });
        }
    });

    function fill(videoList, channelId) {
        var sourceV = $('#video-template').html();
        var template2 = Handlebars.compile(sourceV);
        
        videoList.forEach(function (videoId) {
            $.ajax({
                type: "GET",
                url: "/api/getvideos/" + videoId,
                success: function (videoInfo) {


                    var titulo = videoInfo[0].nombre;
                    var url = videoInfo[0].srcUrl;
                    var username = videoInfo[0].usernombre;
                    var descripcion = videoInfo[0].descripcion;
                    var vidId = videoInfo[0]._id;

                    var context2 = {
                        title: titulo,
                        url: url,
                        user: username,
                        descripcion: descripcion,
                        id: vidId
                    }


                    $("#" + channelId).append(template2(context2));
                }
            });

        });
    }

});