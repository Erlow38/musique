let right_arrow = document.querySelector('.right-arrow');
let left_arrow = document.querySelector('.left-arrow');

let body = document.querySelector('body');

let background = document.querySelector('.background video');
let title = document.querySelector('h1');
let subtitle = document.querySelector('h2');
let autor = document.querySelector('h3');
let audio = document.querySelector('audio');
let message = document.querySelector('.messagedefilant div');
let message2 = document.querySelector('.messagedefilant div span');

let index = 1;

function rightArrowClick() {
    if (index == 1) {
        left_arrow.style.display = 'block';
        right_arrow.style.display = 'block';

        background.src = 'media/background/bg-cmt.mp4';
        subtitle.innerHTML = 'Écoutez dès maintenant';
        title.innerHTML = 'Call me Tonight';
        autor.innerHTML = 'SoBorn (prod.LILCHICK)';
        audio.src = 'media/music/Call_me_tonight.mp3';

        body.style.background = 'url(media/background-mobile/bg-cmt-mobile.jpg)';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';

        message.setAttribute('data-text', 'Nouveau titre de SoBorn disponible partout ! ⋅ Nouvel EP de SoBorn bientôt disponible');
        message2.innerHTML = 'Nouveau titre de SoBorn disponible partout ! ⋅ Nouvel EP de SoBorn bientôt disponible';

        index = 2;
    } else if (index == 2) {
        left_arrow.style.display = 'block';
        right_arrow.style.display = 'block';

        background.src = 'media/background/bg-soleil.mp4';
        subtitle.innerHTML = 'Écoutez dès maintenant';
        title.innerHTML = 'Soleil';
        autor.innerHTML = 'SoBorn & Erlow (prod.TOMATOMIX)';
        audio.src = 'media/music/Soleil.mp3';

        body.style.background = 'url(media/background-mobile/bg-soleil-mobile.jpg)';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';

        message.setAttribute('data-text', 'Titre de SoBorn et Erlow ⋅ Nouvel EP de SoBorn bientôt disponible');
        message2.innerHTML = 'Titre de SoBorn et Erlow ⋅ Nouvel EP de SoBorn bientôt disponible';

        index = 3;
    } else if (index == 3) {
        left_arrow.style.display = 'block';
        right_arrow.style.display = 'none';

        background.src = 'media/background/bg-coming.mp4';
        subtitle.innerHTML = 'Coming Soon';
        title.innerHTML = 'xxx';
        autor.innerHTML = 'SoBorn';
        audio.src = 'media/music/Coming.mp3';

        body.style.background = 'url(media/background-mobile/bg-coming-mobile.jpg)';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';

        message.setAttribute('data-text', 'SoBorn ⋅ Coming Soon');
        message2.innerHTML = 'SoBorn ⋅ Coming Soon';

        index = 4;
    }
}

function leftArrowClick() {
    if (index == 2) {
        left_arrow.style.display = 'none';
        right_arrow.style.display = 'block';

        background.src = 'media/background/bg-demain.mp4';
        subtitle.innerHTML = 'Écoutez dès maintenant';
        title.innerHTML = 'Demain';
        autor.innerHTML = 'SoBorn & Erlow (prod.nausaah)';
        audio.src = 'media/music/Demain.mp3';

        body.style.background = 'url(media/background-mobile/bg-demain-mobile.jpg)';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';

        message.setAttribute('data-text', 'Titre de SoBorn et Erlow ⋅ Nouvel EP de SoBorn bientôt disponible');
        message2.innerHTML = 'Titre de SoBorn et Erlow ⋅ Nouvel EP de SoBorn bientôt disponible';

        index = 1;
    } else if (index == 3) {
        left_arrow.style.display = 'block';
        right_arrow.style.display = 'block';

        background.src = 'media/background/bg-cmt.mp4';
        subtitle.innerHTML = 'Écoutez dès maintenant';
        title.innerHTML = 'Call me Tonight';
        autor.innerHTML = 'SoBorn (prod.LILCHICK)';
        audio.src = 'media/music/Call_me_tonight.mp3';

        body.style.background = 'url(media/background-mobile/bg-cmt-mobile.jpg)';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';

        message.setAttribute('data-text', 'Nouveau titre de SoBorn disponible partout ! ⋅ Nouvel EP de SoBorn bientôt disponible');
        message2.innerHTML = 'Nouveau titre de SoBorn disponible partout ! ⋅ Nouvel EP de SoBorn bientôt disponible';

        index = 2;
    } else if (index == 4) {
        left_arrow.style.display = 'block';
        right_arrow.style.display = 'block';

        background.src = 'media/background/bg-soleil.mp4';
        subtitle.innerHTML = 'Écoutez dès maintenant';
        title.innerHTML = 'Soleil';
        autor.innerHTML = 'SoBorn & Erlow (prod.TOMATOMIX)';
        audio.src = 'media/music/Soleil.mp3';

        body.style.background = 'url(media/background-mobile/bg-soleil-mobile.jpg)';
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';

        message.setAttribute('data-text', 'Titre de SoBorn et Erlow ⋅ Nouvel EP de SoBorn bientôt disponible');
        message2.innerHTML = 'Titre de SoBorn et Erlow ⋅ Nouvel EP de SoBorn bientôt disponible';

        index = 3;
    }
}

right_arrow.addEventListener('click', rightArrowClick);
left_arrow.addEventListener('click', leftArrowClick);

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 39) {
        rightArrowClick();
    }
    else if (event.keyCode == 37) {
        leftArrowClick();
    }
});