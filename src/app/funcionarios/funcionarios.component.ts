import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from '../funcionarios.service'; //Import do service FuncionariosService
import { FuncionarioModel } from './funcionario.model'; //entidade model

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionario: FuncionarioModel = new FuncionarioModel(); //importada a classe FuncionarioModel
  funcionarios: Array<any> = new Array();
  public id: string ='';




  constructor(private funcionariosService: FuncionariosService) { } //Declaração no construtor do FuncionariosServices apos import

  ngOnInit(): void { //é chamado após o Angular inicializar, lida com qualquer tarefa de inicialização adicional.
    this.listarFuncionarios();
    this.buscarFuncionarioId(this.funcionario.cpf);
  }

  /*atualizar(id: number){                                     //recebe funcionario da classe
     this.funcionariosService.atualizarFuncionario(id, this.funcionario).subscribe(funcionario =>{
     this.funcionario = new FuncionarioModel();
      this.listarFuncionarios();

      }, err =>{
         console.log('Erro ao atualizar', err);
        });

  }*/


  remover(id:number){
    this.funcionariosService.removerFuncionario(id).subscribe(funcionario =>{
      this.funcionario = new FuncionarioModel();
      this.listarFuncionarios(); //Chama a função para atualizar os dados inseridos no banco

      }, err =>{
         console.log('Erro ao cadastrar', err);
        });
  }

  cadastrar(){
    console.log(this.funcionario);               //recebe funcionario da classe
    this.funcionariosService.cadastrarFuncionario(this.funcionario).subscribe(funcionario =>{ //chama a função e envia o POST
     this.funcionario = new FuncionarioModel(); //cria um novo funcionario só para limpar a variavel do form
      this.listarFuncionarios(); //Chama a função para atualizar os dados inseridos no banco

      }, err =>{
         console.log('Erro ao cadastrar', err);
        });

  }

  listarFuncionarios(){
    this.funcionariosService.listarFuncionarios().subscribe(funcionarios => { //chamada do metodo Http no funcionariosService(Construtor!)
      this.funcionarios = funcionarios;
    }, err =>{
      console.log('Erro ao listar os alunos', err);

    });
  }

  buscarFuncionarioId(id:string){
    this.funcionariosService.buscarFuncionarioId(id).subscribe(funcionario =>{
    this.funcionario = funcionario; //atribui o funcionario que veio da request para a classe
    //this.funcionario = new FuncionarioModel();
    }, err =>{
      console.log('Erro ao buscar por id', err);

    });


  }

}
