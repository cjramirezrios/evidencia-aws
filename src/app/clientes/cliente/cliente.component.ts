import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit{
  dataSource!:Client[];
  displayedColumns=['id','name','lastname','phone'];
  options:any=[];
  colums=['delete'];
  constructor(private clientService:ClientService){}
  ngOnInit(): void {
    this.clientService.getAllClients().subscribe(resp=>{
      resp.body.forEach(element => {
        this.options.push({delete:'delete'});
      });
      console.log(this.options)
      this.dataSource=resp.body;
      console.log(this.dataSource);
      
    })
  }
  
  
  
}
