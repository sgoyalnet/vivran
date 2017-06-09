import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlEncodeDecodeComponent } from './urlencodedecode/urlencodedecode.component';
import { Base64EncodeDecodeComponent } from './base64encodedecode/base64encodedecode.component';

const routes: Routes = [
  { path: '', redirectTo: '/urlencodedecode', pathMatch: 'full' },
  { path: 'urlencodedecode',  component: UrlEncodeDecodeComponent },
  { path: 'base64encodedecode',  component: Base64EncodeDecodeComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}