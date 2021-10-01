import UI from "./ui";

interface Track {
  loadTrack(): string;
}

export default class TrackInformation implements Track {
  loadTrack(): string {
    return `Aktualnie załadowany track to ${this.title}`;
  }
  public ui = new UI();
  public audio: any = document.getElementById("audio");
  public title = document.getElementById("title");
  public cover: any = document.getElementById("cover");

  public Track(track: string) {
    this.title.innerText = track;
    this.audio.src = `music/${track}.mp3`;
    this.cover.src = `images/${track}.jpg`;
  }
}
