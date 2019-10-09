import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ServicesComponent } from './components/services/services.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: './components/body/body.module#BodyModule'
      },
      {
        path: 'about',
        loadChildren: './components/about-me/about-me.module#AboutMeModule'
      },
      {
        path: 'services',
        loadChildren: './components/services/services.module#ServicesModule'
      },
      {
        path: '**',
        loadChildren: './components/not-found/not-found.module#NotFoundModule'
      }
    ]
  },
  {
    path: '**',
    loadChildren: './components/not-found/not-found.module#NotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
