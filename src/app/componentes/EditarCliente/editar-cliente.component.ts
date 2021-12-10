import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../servicios/cliente.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  constructor(private _location: Location, private clienteService:ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  cliente: any = {
    id: 0,
    name:"",
    email:"",
    gender:"",
    status:""
  };


  ngOnInit() {
    let params = this.activatedRoute.snapshot.params;
    
    if (params.id) {
      this.clienteService.obtengoClientes()
        .subscribe(
          res => {
            console.log(res);
            
            let cli=res.data.filter(x=> x.id==params.id) 
            
            this.cliente = cli[0]
            console.log("Cliente: ", this.cliente)
          },
          err => console.log(err)
        )
    }
  }
}
