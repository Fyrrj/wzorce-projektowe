"use strict";
exports.__esModule = true;
var ui_1 = require("./ui");
var TrackInformation = /** @class */ (function () {
    function TrackInformation() {
        this.ui = new ui_1["default"]();
        this.audio = document.getElementById("audio");
        this.title = document.getElementById("title");
        this.cover = document.getElementById("cover");
        this.currTime = document.querySelector("#currTime");
        this.durTime = document.querySelector("#durTime");
        this.progress = document.getElementById("progress");
    }
    TrackInformation.prototype.loadTrack = function (track) {
        this.title.innerText = track;
        this.audio.src = "music/" + track + ".mp3";
        this.cover.src = "images/" + track + ".jpg";
    };
    return TrackInformation;
}());
exports["default"] = TrackInformation;
