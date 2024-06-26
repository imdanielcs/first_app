import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage implements OnInit {

  constructor(
    private animationCtrl: AnimationController,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

  guardar() {
    const button = document.querySelector('#guardar-button');

    if (button) {
      const animation = this.animationCtrl.create()
        .addElement(button)
        .duration(300)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.1)', opacity: '0.7' },
          { offset: 1, transform: 'scale(1)', opacity: '1' }
        ]);

      animation.play();
    } else {
      console.error('El elemento con id "guardar-button" no se encontró en el DOM.');
    }
  }
}
