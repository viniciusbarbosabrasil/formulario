import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private httpCliente: HttpClient ) { }

  buscar(cep: string){
    console.log(cep)
    return this.httpCliente.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

}
