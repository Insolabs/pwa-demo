import { Component } from "@angular/core";
import { ApiProvider } from "../../providers/api/api";
import { ToastController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public users: any[];
  constructor(private _api: ApiProvider, private _toast: ToastController) {
    this.doRefresh();
  }

  doRefresh(refresher?: any) {
    this._api
      .getUser()
      .then(persons => {
        console.log("My persons", persons);

        if (this.users) {
          if (this.users[0].dob == persons[0].dob) {
            this._toast
              .create({
                message: "Sem conexão com a internet. Tente mais tarde.",
                duration: 2000,
                position: "top"
              })
              .present();
            if (refresher) refresher.complete();
          } else {
            this.users = persons;
            if (refresher) refresher.complete();
          }
        } else {
          this.users = persons;
          if (refresher) refresher.complete();
        }
      })
      .catch(err => {
        console.log("Err:", err);
        this._toast
          .create({
            message: "Sem conexão com a internet. Tente mais tarde.",
            duration: 2000,
            position: "top"
          })
          .present();
        if (refresher) refresher.complete();
      });
  }

  ionViewDidLoad() {}
}
