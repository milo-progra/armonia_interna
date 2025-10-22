import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos.component';
import { ServiciosComponent } from './components/servicios.component';
import { ContactoComponent } from './components/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/inicio' }
];
