import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { module } from './core/core.module';
import { UpgradeModule } from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';

/**
 * This module is written at the beginning of the upgrade process.
 * It does not need to change with the upgrade process.
 */

@Component({ template: `` })
export class EmptyComponent { 
  constructor(){
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
export class AngularJSModule {
  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(upgrade: UpgradeModule) {
    upgrade.bootstrap(document.body, [module.name]);
    setUpLocationSync(upgrade);
  }
}