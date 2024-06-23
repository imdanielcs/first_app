import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.page.html',
  styleUrls: ['./indicador.page.scss'],
})
export class IndicadorPage implements OnInit {
  indicators: any[] = []; 
  errorMessage: string = '';

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.apiService.getData().subscribe(
      (response: any) => {
        // Convierte el objeto en un array de indicadores
        this.indicators = Object.keys(response).filter(key => key !== 'version' && key !== 'autor' && key !== 'fecha').map(key => response[key]);
        console.log('Indicators:', this.indicators);
      },
      (error: string) => {
        this.errorMessage = error;
      }
    );
  }
}
