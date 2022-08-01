import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {ItemOverviewComponent} from './item-overview/item-overview.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
