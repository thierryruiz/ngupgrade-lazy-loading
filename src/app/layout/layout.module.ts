import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutRoutingModule} from './layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule
  ],
  exports: [],
  declarations: [
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
