import { Component, Input } from "@angular/core";
import { ApiProvider } from "../../providers/api/api";

@Component({
  selector: "user-card",
  templateUrl: "user-card.html"
})
export class UserCardComponent {
  @Input() user: any;
  constructor(private _api: ApiProvider) {}
  ngOnInit() {
    this.user.likes = Math.floor(Math.random() * 100);
    this.user.comments = Math.floor(Math.random() * 20);
    this.user.image = "/assets/imgs/placeholder.gif";
    this._api.getDoggo().then(doggo => {
      console.log("my doggo", doggo);
      this.user.image = doggo.message;
    });
    // this.user.image = `https://firebasestorage.googleapis.com/v0/b/pwa-demo-insolabs.appspot.com/o/cat${Math.floor(
    //   Math.random() * 10
    // )}.jpeg?alt=media`;
  }
}
