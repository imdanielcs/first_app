import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BaseChartDirective } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { DbserviceService } from './dbservice.service';
import { HttpClientModule } from '@angular/common/http'; 
import { LogoutButtonComponent } from './logout-button/logout-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutButtonComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BaseChartDirective,
    NgApexchartsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, SQLite, SplashScreen, StatusBar, DbserviceService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
