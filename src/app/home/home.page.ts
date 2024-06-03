import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = '';
  fechaHora: string = '';

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private animationCtrl: AnimationController
  ) {}

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

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('Params:', params); // Agrega este log para depurar
      this.usuario = params['usuario'];
      console.log('Usuario:', this.usuario); // Agrega este log para depurar
    });

    this.actualizarFechaHora();
    setInterval(() => {
      this.actualizarFechaHora();
    }, 1000);
  }
  actualizarFechaHora() {
    const now = new Date();
    this.fechaHora = now.toLocaleString();
  }
}
