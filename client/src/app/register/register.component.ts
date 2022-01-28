import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter(); //enviar eventos hacia el padre
  model: any = {}; //modelo donde se reciben datos del html
  
  constructor(private accountService: AccountService, private toaster: ToastrService) { 

  }

  ngOnInit(): void {
  }

  register()
  {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.toaster.error(error.error);
    });
    this.cancel();
  }
  cancel()
  {
    console.log("canceled");
    this.cancelRegister.emit(false); //enviar datos a traves del evento emit
  }
}
