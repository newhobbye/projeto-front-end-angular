import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'; //SEMPRE QUE FOR USAR ESSA P# DE NGMODEL importar este COCO!

import {HttpClientModule} from '@angular/common/http'; //Gerenciador de modulos http global (Por isso esta no module!)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionariosService } from './funcionarios.service'; //Import do FuncionariosService no app.module

@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  //tambem precisa ser colocado aqui nos imports
    FormsModule //import do formsModule para usar o ngModel
  ],
  providers: [FuncionariosService, HttpClientModule], //Declaração do FuncionariosService no providers // e tambem HttpClientModule aqui
  bootstrap: [AppComponent]
})
export class AppModule { }
