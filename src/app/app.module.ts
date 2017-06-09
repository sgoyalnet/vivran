import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UrlEncoDedecodeModule } from './urlencodedecode/urlencodedecode.module';
import { Base64EncoDedecodeModule } from './base64encodedecode/base64encodedecode.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UrlEncoDedecodeModule,
    Base64EncoDedecodeModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
