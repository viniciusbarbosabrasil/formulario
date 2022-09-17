import { Component, OnInit } from '@angular/core';
import { CepServiceService } from 'src/app/services/cep-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { getLocaleDayPeriods } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  Nome: string = ''
  Email: string = ''
  cep: string = ''
  logradouro: string = ''
  cidade: string = ''
  bairro: string = ''
  uf: string = ''


  constructor(private cepsService: CepServiceService) { }

  ngOnInit(): void { }

  consultaCep(valor: any, form: any){
    
    this.cepsService.buscar(valor.cep).subscribe((dados) => {console.log(dados)});

    this.cepsService.buscar(valor.cep).subscribe((dados) => this.populaForm(dados, form));
  }

  populaForm(dados: any, form: any) {

    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
    })

  }


}
