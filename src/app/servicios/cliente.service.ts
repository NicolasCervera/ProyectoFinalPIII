import { Injectable } from '@angular/core';
import​ { ​HttpClient​ } ​from​​'@angular/common/http'​;
import​ { ​Observable​ } ​from​​'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor​(​private​​http​: ​HttpClient​) { }
  obtengoClientes() : ​Observable​<​any​>{
    ​return​​ this​.​http​.​get​(​"https://gorest.co.in/public/v1/users"​);
  }
}
