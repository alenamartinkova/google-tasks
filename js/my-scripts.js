function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $(".google_logout-wrapper").css('display', 'block');
    $(".google_user-information").css('display', 'inline-block');
    $("#username").html(profile.getName());
    $("#useremail").html(profile.getEmail());
    $("#userimage")[0].src = profile.getImageUrl();
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
    $(".google_logout-wrapper").css('display', 'none');
    $(".google_user-information").css('display', 'none');
}