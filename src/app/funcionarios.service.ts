import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //import do HttpClient
import { Observable } from 'rxjs'; //Import do observable
import { FuncionarioModel } from './funcionarios/funcionario.model';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  constructor(private http: HttpClient) { } //Declaração de parametro do HttpClient

  cadastrarFuncionario(funcionario: FuncionarioModel): Observable<any>{
    return this.http.post(environment.apiUrl, funcionario);
  }

  buscarFuncionarioId(id:string): Observable<any>{
    return this.http.get(environment.apiUrl.concat(id));
  }

  listarFuncionarios(): Observable<any>{ //ler a respeito do Observable
     return this.http.get(environment.apiUrl); //chamada http que recebe a lista da API
  }

  /*atualizarFuncionario(id: any, funcionario: FuncionarioModel): Observable<any> {


    return this.http.put("http://localhost:5000/funcionario".concat(id), funcionario);
  }*/

  removerFuncionario(id:number){
    return this.http.delete(environment.apiUrl.concat(id.toString()));
  }
}
