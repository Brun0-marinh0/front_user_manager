import { Component } from '@angular/core';
import { AccountService } from '../../../account/shared/account.service';
import { Router } from '@angular/router';
import { CommunicationToIlustrationService } from '../../../login-service/communication-to-ilustration.service';

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

  informType = {
    isTyping: false,
    passwordTyping: false,
    isShowPassword: false
  }
  

  typingTimer: any

  constructor(
    private accountService: AccountService,
    private router: Router,
    private communicationService: CommunicationToIlustrationService
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

  handleInput(){
    this.informType.passwordTyping = false
    this.informType.isTyping = true
    console.log(this.informType.isTyping)
    if(this.typingTimer){
      clearTimeout(this.typingTimer)
    }
    this.typingTimer = setTimeout(() => {
      this.informType.isTyping = false
      console.log(this.informType.isTyping)
    }, 500)
    this.communicationService.sendInformType(this.informType);
  }

  password(){
    this.handleInput()
    this.dontLook()
  }

  dontLook(){
    this.informType.passwordTyping = true
    this.communicationService.sendInformType(this.informType);
  }

  showPassword(){
    this.informType.isShowPassword = !this.informType.isShowPassword
    this.communicationService.sendInformType(this.informType);
  }

}
