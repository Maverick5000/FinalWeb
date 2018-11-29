$(document).ready(function () {
    console.log("ready!");

    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

   

    $.ajax({
        type: "GET",
        url: "/api/editvideos/" + id,
        success: function (video) {
            var source = $('#edit-template').html();
            var template = Handlebars.compile(source);

            video.forEach(function(item) {

                var title = item.nombre;
                var url = item.srcUrl;
                var username = item.usernombre;;
                var descripcion = item.descripcion;

                var context = {
                    title: title,
                    url: url,
                    user: username,
                    descripcion: descripcion
                }

                $("#content").append(template(context));

            });
        }
    });
 

});