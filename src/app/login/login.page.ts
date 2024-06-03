import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() { }

  login() {
    if (this.usuario.trim() === 'Daniel' && this.password.trim() === '1234') {
      this.router.navigate(['/home', this.usuario]);
    } else {
      this.presentAlert('Usuario o contraseña incorrecta');
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
}
