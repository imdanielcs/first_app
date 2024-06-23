import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AnimationController } from '@ionic/angular';
import { AuthService } from '../auth.service';


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
    private animationCtrl: AnimationController,
    private authService: AuthService,
    private router: Router
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

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
      this.usuario = this.route.snapshot.paramMap.get('usuario') || '';

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
