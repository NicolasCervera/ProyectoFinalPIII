import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrincipalComponent } from "./componentes/Card/principal.component";
import { EditarClienteComponent } from "./componentes/EditarCliente/editar-cliente.component";
import { UsuarioComponent } from "./componentes/Cliente/usuario.component";
import { PaginaConstruccionComponent } from "./componentes/pagina-construccion/pagina-construccion.component";

const routes: Routes = [
  { path: "", component: PrincipalComponent },
  { path: "principal", component: PrincipalComponent },
  { path: "usuario", component: UsuarioComponent },
  { path: "pagina", component: PaginaConstruccionComponent },
  { path: "clientes/editar/:id", component: EditarClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
