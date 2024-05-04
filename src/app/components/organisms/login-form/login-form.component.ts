import { Component } from '@angular/core';
import { AccountService } from '../../../account/shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  login = {
    email: '',
    password: ''
  }

  constructor(
    private accountService: AccountService,
    private router: Router
  ){}

  async onSubmit() {
    try{
      const result = await this.accountService.login(this.login)
      console.log(`Login efetuado: ${result}`)

      this.router.navigate([''])
    }catch(error){
      console.error(error)
    }
  }
}
