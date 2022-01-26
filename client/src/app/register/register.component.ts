import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter(); //enviar eventos hacia el padre
  model: any = {}; //modelo donde se reciben datos del html
  
  constructor(private accountService: AccountService) { 

  }

  ngOnInit(): void {
  }

  register()
  {
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
    this.cancel();
  }
  cancel()
  {
    console.log("canceled");
    this.cancelRegister.emit(false); //enviar datos a traves del evento emit
  }
}
