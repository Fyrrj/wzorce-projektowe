"use strict";
exports.__esModule = true;
var UI = /** @class */ (function () {
    function UI() {
        this.audio = document.getElementById("audio");
        this.title = document.getElementById("title");
        this.cover = document.getElementById("cover");
        this.currTime = document.querySelector("#currTime");
        this.durTime = document.querySelector("#durTime");
        this.progress = document.getElementById("progress");
        this.musicContainer = document.getElementById("music-container");
        this.playBtn = document.getElementById("play");
        this.prevBtn = document.getElementById("prev");
        this.nextBtn = document.getElementById("next");
        this.tracks = ["Hells Bells", "Billie Jean", "Numb"];
        this.trackIndex = 2;
    }
    return UI;
}());
exports["default"] = UI;
