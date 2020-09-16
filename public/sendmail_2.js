$(document).ready(function() {
    $("#btn-send-contact").click(function(){
        console.log("Validate data on fields..");
        var uname = $("#uname").val();
        var email = $("#email").val();
        var phone = $("#questn").val();
        var comment = $("#msg").val();

        if(uname != "" && email != "" && phone != "" && comment != ""){
            console.log("call php");
            $.ajax({
                // En data puedes utilizar un objeto JSON, un array o un query string
                data: {"uname" : uname, "email" : email, "phone" : phone, "msg" : comment},
                type: "POST",
                // Formato de datos que se espera en la respuesta
                dataType: "json",
                // URL a la que se enviará la solicitud Ajax
                url: "scripts/sendmail_2.php",
            })
            .done(function(data, textStatus, jqXHR) {
                if (console && console.log){
                    console.log("Envío Correcto");
                }
                /* mensaje de notificacion de correo enviado */
                $.notify({
                    icon: 'glyphicon glyphicon-envelope',
                    title: 'Correo Enviado',
                    message: '<strong>'+ uname +'</strong> Recibimos tu mensaje, pronto nos pondremos en contacto. Gracias'
                },{
                    type: 'info'
                });

                $("#uname").val("");
                $("#email").val("");
                $("#questn").val("");
                $("#msg").val("");
            })
            .fail(function(jqXHR, textStatus, errorThrown ){
                if (console && console.log){
                    console.log("Falla en el envío: " + textStatus);
                }

                $("#uname").val("");
                $("#email").val("");
                $("#questn").val("");
                $("#msg").val("");
            });
        }
    });
});
