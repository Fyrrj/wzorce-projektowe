export default class UI {
  public audio: any = document.getElementById("audio");
  public title = document.getElementById("title");
  public cover: any = document.getElementById("cover");
  public musicContainer = document.getElementById("music-container");
  public playBtn: any = document.getElementById("play");
  public prevBtn: any = document.getElementById("prev");
  public nextBtn: any = document.getElementById("next");
  public tracks: string[] = ["Hells Bells", "Billie Jean", "Numb"];
  public trackIndex: number = 2;
}
