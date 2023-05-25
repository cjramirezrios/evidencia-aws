import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, ClientResponse } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private API='https://22wdvftrud.execute-api.sa-east-1.amazonaws.com';
  constructor(private http:HttpClient) { }

  getAllClients():Observable<ClientResponse>{
    return this.http.get<ClientResponse>(`${this.API}/clientes`);
  }

  removeClient(id:string){
    return this.http.delete(`${this.API}/client/${id}`);
  }
}
