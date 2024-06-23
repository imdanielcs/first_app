import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbserviceService } from '../dbservice.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private dbservice: DbserviceService,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  async login() {
    try {
      const usuario = this.usuario;
      const password = this.password;
      const isValidUser = await this.dbservice.validarUsuario({ usuario, password });
      if (isValidUser) {
        this.authService.login();
        this.router.navigate([`/home/${usuario}`]);  // Aquí usamos comillas inversas para la interpolación
      } else {
        this.presentAlert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error validating user:', error);
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  navigateTo(event: Event, page: string) {
    event.preventDefault();
    this.router.navigate([`/${page}`]);
  }
}