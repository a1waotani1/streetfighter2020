var $ken = $('.ken'),
    $guile = $('.guile'),
    $kenPos, $guilePos;

setInterval(function () {
    $kenPos = $ken.offset();
    console.log('$ken:', $kenPos);
    $guilePos = $guile.offset();
    console.log('$guile:', $guilePos);
    console.log('interval:', $guilePos.left - $kenPos.left);
}, 250);

var isColision = function () {
    return ($guilePos.left - $kenPos.left <= 200 && $guilePos.left - $kenPos.left >= -200) ? true : false;
};

var punch = function () {
    $ken.addClass('punch');
    if (isColision()) {
        $guile.addClass('hit1');
        setTimeout(function () { $guile.removeClass('hit1'); }, 500);
    }
    setTimeout(function () { $ken.removeClass('punch'); }, 150);
};
var kick = function () {
    $ken.addClass('kick');
    if (isColision()) {
        $guile.addClass('hit1');
        setTimeout(function () { $guile.removeClass('hit1'); }, 500);
    }
    setTimeout(function () { $ken.removeClass('kick'); }, 500);
}; var rkick = function () {
    $ken.addClass('reversekick');
    if (isColision()) {
        $guile.addClass('hit2');
        setTimeout(function () { $guile.removeClass('hit2'); }, 500);
    }
    setTimeout(function () { $ken.removeClass('reversekick'); }, 500);
};

$('#a').click(kick);
$('#d').click(rkick);
$('#space').click(punch);

$(document).on('keydown keyup', function (e) {
    if (e.type == 'keydown') {

        if (e.keyCode == 32
            && !$ken.hasClass('punch')
        ) {
            punch();
        }
        if (e.keyCode == 65
            && !$ken.hasClass('kick')
        ) {
            kick();
        }
        if (e.keyCode == 68
            && !$ken.hasClass('reversekick')
        ) {
            rkick();
        }
        console.log(e.keyCode);
        return false;
    }

    const result = ['グー', 'チョキ', 'パー'];

    $('#space').on('click', function () {
        let compChoice = Math.floor(Math.random() * 3);
        if (compChoice == 0) {
            $('#p1healthnum').text('TIE');
            $('#p2healthnum').text('TIE');
        } else if (compChoice == 1) {
            $('#p1healthnum').text('200');
            $('#p2healthnum').text('-20HP');
        } else {
            $('#p1healthnum').text('-40HP');
            $('#p2healthnum').text('200');
        }
    })
    $('#a').on('click', function () {
        let compChoice = Math.floor(Math.random() * 3);
        if (compChoice == 0) {
            $('#p1healthnum').text('-20HP');
            $('#p2healthnum').text('200');
        } else if (compChoice == 1) {
            $('#p1healthnum').text('TIE');
            $('#p2healthnum').text('TIE');
        } else {
            $('#p1healthnum').text('200');
            $('#p2healthnum').text('-30HP');
        }
    })
    $('#d').on('click', function () {
        let compChoice = Math.floor(Math.random() * 3);
        if (compChoice == 0) {
            $('#p1healthnum').text('200');
            $('#p2healthnum').text('-20HP');
        } else if (compChoice == 1) {
            $('#p1healthnum').text('-30HP');
            $('#p2healthnum').text('200');
        } else {
            $('#p1healthnum').text('TIE');
            $('#p2healthnum').text('TIE');
        }
    })
});
