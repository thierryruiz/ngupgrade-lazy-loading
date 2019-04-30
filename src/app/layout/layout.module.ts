import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutRoutingModule} from './layout-routing.module';
import { LayoutService } from './layout.service';
import { LayoutResolver } from './layout.resolver';
import { module } from '../core/core.module';
import { UpgradeModule } from '@angular/upgrade/static';
import { setUpLocationSync } from '@angular/router/upgrade';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule,
    UpgradeModule
  ],
  exports: [],
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],entryComponents : [
    MainLayoutComponent
  ],
  providers: [
    LayoutService,
    LayoutResolver
  ],
})
export class LayoutModule { 
  /*
  constructor(private upgrade: UpgradeModule) {
    setAngularJSGlobal(angular);
    this.upgrade.bootstrap(document.body, [module.name]);
    setUpLocationSync(this.upgrade);
  }


  constructor(private upgrade: UpgradeModule) {
    //setAngularJSGlobal(angular);
    //this.upgrade.bootstrap(document.body, ['myExampleModule']);
 }*/

 

}
