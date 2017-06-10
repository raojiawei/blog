$(function() {

    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();

    alert(username);
    alert(password);

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
});
