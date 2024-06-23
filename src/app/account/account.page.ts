import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../dbservice.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  username: string = '';
  password: string = '';
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  pais: string = '';

  constructor(
    private dbservice: DbserviceService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ) { }

  async navigateTo(event: Event, page: string) {
    const target = event.target as HTMLElement;

    const animation = this.animationCtrl.create()
      .addElement(target)
      .duration(500)
      .fromTo('opacity', '0.5', '1')
      .fromTo('transform', 'translateX(100%)', 'translateX(0)');

    await animation.play();
    this.navCtrl.navigateForward(`/${page}`);
  }

  async createAccount() {
    try {
      await this.dbservice.insertUsuario(this.username, this.password, this.nombre, this.apellido, this.email, this.pais);
      console.log('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  ngOnInit() { }
}
