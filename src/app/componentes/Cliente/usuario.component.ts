import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios:any;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }


  obtenerUsuarios() {
    this.usuarioService.obtengoUsuarios()
      .subscribe(
        res => {
          this.usuarios = res.data;
          console.log(this.usuarios);
        },
        err => console.error(err)
      );
  }

}
