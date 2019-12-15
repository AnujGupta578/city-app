import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CityComponent } from './component/city-component/city.component';


const routes: Routes = [
  {
    path: 'city-list',
    component: CityComponent
  },
  {
    path: '',
    redirectTo: '/city-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/city-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
