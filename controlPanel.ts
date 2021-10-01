import TrackInformation from "./trackInformation";
import UI from "./ui";

export default class ControlPanel {
  public ui = new UI();
  public audio = this.ui.audio;
  public musicContainer = this.ui.musicContainer;
  public playBtn = this.ui.playBtn;
  public prevBtn = this.ui.prevBtn;
  public nextBtn = this.ui.nextBtn;
  public tracks = this.ui.tracks;
  public trackIndex = this.ui.trackIndex;

  public playTrack(): void {
    this.musicContainer.classList.add("play");
    this.playBtn.querySelector("i.fas").classList.remove("fa-play");
    this.playBtn.querySelector("i.fas").classList.add("fa-pause");
    this.audio.play();
  }
  public pauseTrack(): void {
    this.musicContainer.classList.remove("play");
    this.playBtn.querySelector("i.fas").classList.add("fa-play");
    this.playBtn.querySelector("i.fas").classList.remove("fa-pause");
    this.audio.pause();
  }
  public prevTrack(): void {
    this.trackIndex++;

    if (this.trackIndex > this.tracks.length - 1) {
      this.trackIndex = 0;
    }

    const lt = new TrackInformation();

    lt.Track(this.tracks[this.trackIndex]);

    this.playTrack();
  }
  public nextTrack(): void {
    this.trackIndex++;

    if (this.trackIndex > this.tracks.length - 1) {
      this.trackIndex = 0;
    }

    const lt = new TrackInformation();

    lt.Track(this.tracks[this.trackIndex]);

    this.playTrack();
  }
}
