const names = ['Стас', 'Алина', 'Андрей', 'Серега', 'Саша', 'Максим'];

for (let i = 0; i < names.length; i++) {
    $('.name-list').append('<div class="name-list__wrapper">' +
        '<input id="label' + i + '" class="check" type="checkbox"><label for="label' + i + '" class="name-list__player">' + names[i] + '</label></div>');
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

$('#generate').on('click', getPlayers);

function getPlayers() {
    $('.player-list__player').remove();
    $('.player-list__conveyor').attr('style', ' ')
    const $checked = $('.check').filter(':checked');
    const players = $checked.map(function () {
        return $(this).next('.name-list__player').text();
    });
    if (players.length > 4) {
        for (let i = 0; i < players.length; i++) {
            $('.player-list__conveyor').append('<span class="player-list__player">' + players[i] + '</span>');
        }

    } else {
        for (let j = 0; j < 2; j++) {
            for (let i = 0; i < players.length; i++) {
                $('.player-list__conveyor').append('<div class=""><span class="player-list__player">' + players[i] + '</span>');
            }
        }
    }
}

$('#twist').on('click', getWinner);

function getRandomTwisting() {
    $.keyframe.define([{
    name: 'twisting',
    '0%': {'transform': 'translateX('+getRandom(-70, 70)+'%)'},
    '10%': {'transform': 'translateX('+getRandom(-70, 70)+'%)'}, //getRandom(min, max)
    '30%': {'transform': 'translateX('+getRandom(-70, 70)+'%)'}, //getRandom(min, max)
    '60%': {'transform': 'translateX('+getRandom(-70, 70)+'%)'}, //getRandom(min, max)
    '80%': {'transform': 'translateX('+getRandom(-70, 70)+'%)'}, //getRandom(min, max)
    '100%': {'translateX': 'translateX('+getRandom(-70, 70)+'%)'} //getRandom(min, max)
}]);
}


function getWinner() {
    getRandomTwisting();
// $('.player-list__conveyor').playKeyframe('twisting 1s ease-in-out 0s forwards')
    $('.player-list__conveyor').playKeyframe({
        name: 'twisting',
        duration: "5s",
        timingFunction: 'ease-in-out',
        iterationCount: '1',
        direction: 'reverse',
        fillMode: 'forwards'
    });
};
// $(selector).pauseKeyframe();

