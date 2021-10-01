"use strict";
exports.__esModule = true;
var controlPanel_1 = require("./controlPanel");
var trackInformation_1 = require("./trackInformation");
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer(controlPanel, trackInformation) {
        if (controlPanel === void 0) { controlPanel = null; }
        if (trackInformation === void 0) { trackInformation = null; }
        this.controlPanel = controlPanel || new controlPanel_1["default"]();
        this.trackInformation = trackInformation || new trackInformation_1["default"]();
    }
    return MusicPlayer;
}());
var musicPlayer = new MusicPlayer();
console.log(musicPlayer);
