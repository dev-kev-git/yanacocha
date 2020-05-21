import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ActivityFromsComponent } from './componentes/activity-froms/activity-froms.component';
import { ActivityMainComponent } from './componentes/activity-main/activity-main.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AlertaComponent } from './componentes/alerta/alerta.component';
import { HistorialComponent } from './componentes/historial/historial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ActivityFromsComponent,
    ActivityMainComponent,
    NavbarComponent,
    AlertaComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
