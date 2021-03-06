import { Injectable } from '@angular/core';
import​ { ​HttpClient​ } ​from​​'@angular/common/http'​;
import​ { ​Observable​ } ​from​​'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private​​http​: ​HttpClient​) { }


  obtengoUsuarios() : ​Observable​<​any​>{
    ​return​​ this​.​http​.​get​(​"https://gorest.co.in/public/v1/users"​);

  }
}
