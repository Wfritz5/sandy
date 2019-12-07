console.log('it works');

$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault();
        console.log('Clicked Button');

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElement = $('.status')
        statusElement.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElement.append('<div>Email is valid</div>')
        } else {
            event.preventDefault();
            statusElement.append('<div>Email is not valid</div>')
        }

        if (subject.length >= 2) {
            statusElement.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault();
            statusElement.append('<div>Subject is not valid</div>')
        }

        if (message.length >= 5) {
            statusElement.append('<div>message is valid</div>')
        } else {
            event.preventDefault();
            statusElement.append('<div>message is not valid</div>')
        }


    })
});