import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormPage } from '../form/form.page';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage {

  constructor(private navCtrl: NavController) { }

  goToFormPage() {
    this.navCtrl.navigateForward('/form');
  }

  goToViewPage() {
    this.navCtrl.navigateForward('/home');
  }
}