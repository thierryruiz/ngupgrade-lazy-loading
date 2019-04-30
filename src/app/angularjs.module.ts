import { Component, NgModule, AfterContentInit
 } from '@angular/core';
import { RouterModule } from '@angular/router';

import { module } from './core/core.module';
import { UpgradeModule } from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';
import { LayoutService } from './layout/layout.service';

/**
 * This module is written at the beginning of the upgrade process.
 * It does not need to change with the upgrade process.
 */

@Component({ template: `` })
export class EmptyComponent { 
  constructor(private upgrade: UpgradeModule){
    console.log( "Create Empty component");
  } 
}

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    UpgradeModule,
    RouterModule.forChild([
      { path: '**', component: EmptyComponent }
    ])
  ]
})
export class AngularJSModule
 {
  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(
    private upgrade: UpgradeModule,
    private layoutService: LayoutService
    ) {
    
    
    this.layoutService.ready$().subscribe( (ready)=> {
      if (ready) {
        this.upgrade.bootstrap(document.body, [module.name]);
        setUpLocationSync(this.upgrade);
      }
    })
   
  }

  //ngDoBootstrap(){
  //  this.upgrade.bootstrap(document.body, [module.name]);
  //  setUpLocationSync(this.upgrade);
  //}



}