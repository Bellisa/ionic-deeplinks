import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Deeplinks } from "@ionic-native/deeplinks";
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private deeplinks: Deeplinks) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.deeplinks.route({
        '/': HomePage,
        '/about': AboutPage
      }).subscribe( (match) => {
        console.log('Sucesso ao linkar rota!');
        console.log(JSON.stringify(match));
      }, (noMatch) => {
        console.log('Erro ao linkar rota');
        console.log(JSON.stringify(noMatch));
        
      })
    });
  }
}
