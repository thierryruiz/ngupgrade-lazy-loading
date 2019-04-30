import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {LayoutModule} from './layout/layout.module';
import {LayoutService} from './layout/layout.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    // RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
    LayoutModule,
  ],
  providers: [LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
