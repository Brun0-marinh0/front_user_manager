import { Component } from '@angular/core';
import { AccountService } from '../../../account/shared/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {
  account = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    roleId: ''
  }
  constructor(
    private accountService: AccountService
  ){}

  async onSubmit(){
    try {
      const result = await this.accountService.createAccount(this.account)

      console.log('conta criada com sucesso!',result)
    } catch (error){
      console.error(error)
    }
  }
}
