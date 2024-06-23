import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard.service';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'login', pathMatch: 'full' 
  },
  { 
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) 
  },
  { 
    path: 'home/:usuario', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), 
    canActivate: [AuthguardService],
  },
  {
    path: 'budget',
    loadChildren: () => import('./budget/budget.module').then( m => m.BudgetPageModule),
    canActivate: [AuthguardService],
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then( m => m.ResumePageModule),
    canActivate: [AuthguardService],
  },
  {
    path: 'saving',
    loadChildren: () => import('./saving/saving.module').then( m => m.SavingPageModule),
    canActivate: [AuthguardService],
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'indicador',
    loadChildren: () => import('./indicador/indicador.module').then( m => m.IndicadorPageModule),
    canActivate: [AuthguardService],
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule),
    canActivate: [AuthguardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
