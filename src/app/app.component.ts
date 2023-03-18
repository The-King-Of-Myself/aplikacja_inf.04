import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  email: string = '';
  password: string = '';
  repeated_password: string = '';
  message: string = '';

  onSubmit(){
    // this.message = `działa`;
    if (!this.email.includes('@')){
      this.message=`Nieprawidłowy adres e-mail: ${this.email}`;
      return;
    }
    if (this.password!==this.repeated_password){
      this.message=`Hasła różnią się.`;
      return;
    }
    this.message=`Witaj ${this.email}`;
  }
}



// formularz zgodnie z bootstrapem