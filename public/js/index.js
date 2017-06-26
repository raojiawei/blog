$(function() {

    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();

    var btnRegist = $('#btnRegist');
    btnRegist.on('click', function() {

        $.ajax({
            type: 'POST',
            url: '/api/user/register',
            data: {
                username: username,
                password: password
            },
            dataType: 'json',
            success: function(result) {
                console.log(result);
            }
        });

    });


    var btnLogin = $('#btnLogin');
    btnLogin.on('click', function() {

        $.ajax({
            type: 'POST',
            url: '/api/user/login',
            data: {
                username: username,
                password: password
            },
            dataType: 'json',
            success: function(result) {
                console.log(result);
            }
        });

    });


    var btnExit = $('#btnExit');
    btnExit.on('click', function() {
        $.ajax({

            url: '/api/user/loginout',
            success: function(result) {
                if (!result.code) {

                    window.location.reload();
                    
                }

            }

        });
    });

});