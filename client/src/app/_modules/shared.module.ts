import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { TabsModule } from "ngx-bootstrap/tabs";


@NgModule({
  declarations: [],
    imports: [
      CommonModule,
      BsDropdownModule.forRoot(),
      ToastrModule.forRoot({
        positionClass: "toast-bottom-right" //posicion donde se muestra la notificacion
      }),
      TabsModule.forRoot()
    ], 
    exports:[
      BsDropdownModule,
      ToastrModule,
      TabsModule
    ]
})

export class SharedModule { }
