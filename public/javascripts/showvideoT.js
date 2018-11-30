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
                var username = item.usernombre;;
                var descripcion = item.descripcion;

                var context = {
                    title: titulo,
                    url: url,
                    user: username,
                    descripcion: descripcion
                }

                $("#main-content").append(template(context));

                getComments();
            });
        }
    });

    function getComments(){
        $.ajax({
            type: "GET",
            url: "/api/getcomments/" + id,
            success: function (comment) {
                var source = $('#comment-template').html();
                var template = Handlebars.compile(source);
    
                comment.forEach(function(item) {
    
                    var texto = item.texto;
                    var fecha = new Date(item.fecha);
                    var username = item.usernombre;
    
                    var context = {
                        texto: texto,
                        fecha: fecha.toUTCString(),
                        username: username
                    }
    
                    $("#comments-container").append(template(context));
    
                });
            }
        });
    }

});