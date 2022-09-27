import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOKAL_KEY = "videoplayer-current-time";

const onPlay = function (data) {
    console.log(data.seconds);
    localStorage.setItem(LOKAL_KEY, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));


let saveData = localStorage.getItem(LOKAL_KEY);
if (saveData) {
    player.setCurrentTime(saveData);
};











