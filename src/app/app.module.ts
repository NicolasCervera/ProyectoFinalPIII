import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import​ { ​HttpClientModule​ } ​from​​'@angular/common/http'​;
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/Navbar/menu.component';
import { PrincipalComponent } from './componentes/Card/principal.component';
import { EditarClienteComponent } from './componentes/EditarCliente/editar-cliente.component';
import { UsuarioComponent } from './componentes/Cliente/usuario.component';
import { PaginaConstruccionComponent } from './componentes/pagina-construccion/pagina-construccion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    EditarClienteComponent,
    UsuarioComponent,
    PaginaConstruccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ​HttpClientModule,
    FormsModule​
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
