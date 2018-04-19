import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ApiProvider } from "../providers/api/api";
import { HttpClientModule } from "@angular/common/http";
import { CapitalizePipe } from "../pipes/capitalize/capitalize";
import { UserCardComponent } from "../components/user-card/user-card";

@NgModule({
  declarations: [MyApp, HomePage, CapitalizePipe, UserCardComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider
  ]
})
export class AppModule {}
