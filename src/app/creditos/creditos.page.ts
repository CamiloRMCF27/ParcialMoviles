/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { MenuController}from '@ionic/angular';
@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.page.html',
  styleUrls: ['./creditos.page.scss'],
})
export class CreditosPage implements OnInit {

  constructor(private MenuCtrl: MenuController) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.MenuCtrl.toggle();
  }

}
