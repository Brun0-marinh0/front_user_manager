import { Component, Input } from '@angular/core';
import { AccountService } from '../../../account/shared/account.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss'
})
export class DeleteUserComponent {
  @Input()idUser!: string;
  @Input() nameUser: string | undefined

  isShow = false

    constructor(private accountService: AccountService){}

  showModal(){
    this.isShow = !this.isShow
  }

  delete(id:string) {
    this.accountService.deleteUser(id).subscribe(
      (data:any) =>{
        console.log('deletado', data)
        this.isShow = false
        window.location.reload();
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    )
  }
}
