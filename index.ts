import ControlPanel from "./controlPanel";
import TrackInformation from "./trackInformation";

class MusicPlayer {
  protected controlPanel: ControlPanel;
  protected trackInformation: TrackInformation;

  public constructor(
    controlPanel: ControlPanel = null,
    trackInformation: TrackInformation = null
  ) {
    this.controlPanel = controlPanel || new ControlPanel();
    this.trackInformation = trackInformation || new TrackInformation();
  }
}

const mp = new MusicPlayer();
console.log(mp);
