//
// Kissmetrics video tracking
//
// Flags so events only fire once
var _e_played = false;
var _e_10 = false;
var _e_20 = false;
var _e_30 = false;
var _e_40 = false;
var _e_50 = false;
var _e_60 = false;
var _e_70 = false;
var _e_80 = false;
var _e_90 = false;
var _e_100 = false;
var _e_videoName = "Unknown Video";
var videoDuration;

//Default vars for jwplayer and controls
var addedSpeedControls = false;
var currentSpeed = 1;
var speedText = '1';

function initDynamic(hlsUrl, preroll) {
    jwplayer(playerId).setup({
        autostart: true,
        image: "/templates/cp/img/video-placeholder.jpg",
        playlist: [{
            file: preroll
                }, {
            file: hlsUrl
        }],
        width: "100%",
        aspectratio: "16:9",
        displaytitle: 'false',
        displaydescription: 'false',
        visualplaylist: 'false',
        nextUpDisplay: 'false',
        playbackRateControls: 'true',
        preload: 'auto'
    });
};

function initPlayer() {

    // Setup speed controls
    jwplayer().on('ready', function () {
        // Speed controls only work in HTML5
        if (jwplayer().getRenderingMode() == "html5") {
            videoTag = $('#' + playerId).find('video').get(0);
            this.onPlay(controlHidingCallback);
        }
    });

    //Better control hiding for videos that display a terminal
    var controlHidingCallback = function () {
        var player = $('#' + playerId),
            playerControlBar = (player.length) ? player.find('.jw-controls') : $('.jw-controls');

        if (player.length && playerControlBar.length) {
            // Delay 1s then hide control bar
            setTimeout(function () {
                playerControlBar.fadeOut();
            }, 1000);

            // Add hover event
            player.hover(
                function () {
                    playerControlBar.fadeIn();
                }, function () {
                    playerControlBar.fadeOut();
                }
            )
        }
    };

    //Kissmetrics video tracking
    jwplayer().on('time', function (event) {

        // Kissmetrics events and properties
        videoDuration = jwplayer().getDuration();
        var time = Math.round(event.position / videoDuration * 100);

        // Title for LiveLab videos
        if ($("#nowplaying").length) {
            _e_videoName = "LiveLab " + _e_livelabId + ": " + $("#nowplaying").text();
        }

        // Title for Nugget videos
        if ($("#current-nugget-title").length) {
            _e_videoName = "Nugget: " + _e_nuggetName;
        }

        // Title for Lesson videos
        if ($("p.course-name").length) {
            _e_videoName = "Course " + _e_courseId + ": " + _e_lessonName;
        }

        // Creates event once when playing starts
        if (!_e_played) {
            // Kissmetrics API
            // console.log(_e_videoName + ' Started');
            _kmq.push(['record', 'Video Started', {'Video Name': _e_videoName}]);
            _e_played = true;
        }

        if (time == 10) {
            if (!_e_10) {
                // Kissmetrics API
                // console.log(_e_videoName + ' 10%');
                _kmq.push(['record', 'Video at 10%', {'Video Name': _e_videoName}]);
                _e_10 = true;
            }
        }

        if (time == 20) {
            if (!_e_20) {
                // Kissmetrics API
                // console.log(_e_videoName + ' 20%');
                _kmq.push(['record', 'Video at 20%', {'Video Name': _e_videoName}]);
                _e_20 = true;
            }
        }

        if (time == 30) {
            if (!_e_30) {
                // Kissmetrics API
                // console.log(_e_videoName + ' 30%');
                _kmq.push(['record', 'Video at 30%', {'Video Name': _e_videoName}]);
                _e_30 = true;
            }
        }

        if (time == 40) {
            if (!_e_40) {
                // Kissmetrics API
                // console.log(_e_videoName + ' 40%');
                _kmq.push(['record', 'Video at 40%', {'Video Name': _e_videoName}]);
                _e_40 = true;
            }
        }

        if (time == 50) {
            if (!_e_50) {
                // Kissmetrics API
                // console.log(_e_videoName + ' 50%');
                _kmq.push(['record', 'Video at 50%', {'Video Name': _e_videoName}]);
                _e_50 = true;
            }
        }

        if (time == 60) {
            if (!_e_60) {
                // Kissmetrics API
                // console.log(_e_videoName + ' 60%');
                _kmq.push(['record', 'Video at 60%', {'Video Name': _e_videoName}]);
                _e_60 = true;
            }
        }

        if (time == 70) {
            if (!_e_70) {
                // Kissmetrics API
                // console.log(_e_videoName + ' 70%');
                _kmq.push(['record', 'Video at 70%', {'Video Name': _e_videoName}]);
                _e_70 = true;
            }
        }

        if (time == 80) {
            if (!_e_80) {
                // Kissmetrics API
                // console.log(_e_videoName + ' 80%');
                _kmq.push(['record', 'Video at 80%', {'Video Name': _e_videoName}]);
                _e_80 = true;
            }
        }

        if (time == 90) {
            if (!_e_90) {
                // Kissmetrics API
                // console.log(_e_videoName + ' 90%');
                _kmq.push(['record', 'Video at 90%', {'Video Name': _e_videoName}]);
                _e_90 = true;
            }
        }

        if (time == 100) {
            if (!_e_100) {
                // Kissmetrics API
                // console.log(_e_videoName + ' 100%');
                _kmq.push(['record', 'Video Completed', {'Video Name': _e_videoName}]);
                _e_100 = true;
            }
        }
    });

}

function addSpeedControls(videoTag) {
    if (addedSpeedControls == false) {
        $('#' + playerId).find('.jw-icon-hd').before('<div class="jw-icon jw-icon-inline jw-button-color jw-reset playSpeed">' + speedText + 'x</div>');
        addedSpeedControls = true;
        $('.playSpeed').on("click", function () {
            switch (currentSpeed) {
                case 1:
                    currentSpeed = 1.25;
                    speedText = 1.25;
                    break;
                case 1.25:
                    currentSpeed = 1.5;
                    speedText = 1.5;
                    break;
                case 1.5:
                    currentSpeed = 1.75;
                    speedText = 1.75;
                    break;
                case 1.75:
                    currentSpeed = 2;
                    speedText = 2;
                    break;
                case 2:
                    currentSpeed = .5;
                    speedText = .5;
                    break;
                case .5:
                    currentSpeed = .75;
                    speedText = .75;
                    break;
                case .75:
                    currentSpeed = 1;
                    speedText = 1;
                    break;
            }
            $.cookie("jwplayer.savedPlaybackRate", currentSpeed, {path: '/'});
            $.cookie("jwplayer.savedPlaybackText", speedText, {path: '/'});
            videoTag.playbackRate = currentSpeed;
            videoTag.defaultPlaybackRate = currentSpeed;
            $('.playSpeed').html(speedText + 'x');
        });
    }
}




