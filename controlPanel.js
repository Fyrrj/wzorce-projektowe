"use strict";
exports.__esModule = true;
var trackInformation_1 = require("./trackInformation");
var ui_1 = require("./ui");
var ControlPanel = /** @class */ (function () {
    function ControlPanel() {
        this.ui = new ui_1["default"]();
        this.audio = this.ui.audio;
        this.musicContainer = this.ui.musicContainer;
        this.playBtn = this.ui.playBtn;
        this.prevBtn = this.ui.prevBtn;
        this.nextBtn = this.ui.nextBtn;
        this.tracks = this.ui.tracks;
        this.trackIndex = this.ui.trackIndex;
    }
    ControlPanel.prototype.playTrack = function () {
        this.musicContainer.classList.add("play");
        this.playBtn.querySelector("i.fas").classList.remove("fa-play");
        this.playBtn.querySelector("i.fas").classList.add("fa-pause");
        this.audio.play();
    };
    ControlPanel.prototype.pauseTrack = function () {
        this.musicContainer.classList.remove("play");
        this.playBtn.querySelector("i.fas").classList.add("fa-play");
        this.playBtn.querySelector("i.fas").classList.remove("fa-pause");
        this.audio.pause();
    };
    ControlPanel.prototype.prevTrack = function () {
        this.trackIndex++;
        if (this.trackIndex > this.tracks.length - 1) {
            this.trackIndex = 0;
        }
        var lt = new trackInformation_1["default"]();
        lt.loadTrack(this.tracks[this.trackIndex]);
        this.playTrack();
    };
    ControlPanel.prototype.nextTrack = function () {
        this.trackIndex++;
        if (this.trackIndex > this.tracks.length - 1) {
            this.trackIndex = 0;
        }
        var lt = new trackInformation_1["default"]();
        lt.loadTrack(this.tracks[this.trackIndex]);
        this.playTrack();
    };
    return ControlPanel;
}());
exports["default"] = ControlPanel;
