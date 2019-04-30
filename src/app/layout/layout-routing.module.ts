
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LayoutResolver } from './layout.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/core',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { 
        path: 'core', 
        loadChildren: '../angularjs.module#AngularJSModule',
        resolve : {
          ready: LayoutResolver
        }
      },  
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
   
}
