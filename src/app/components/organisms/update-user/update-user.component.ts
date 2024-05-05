import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../../account/shared/account.service';
import { listAll } from '../../../../interfaces/listAll';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  @Input() user: any | undefined
  
  account: any = {
    id: '',
    name: '',
    lastName: '',
    email: '',
    isActivated: true
  };

  showModal = false;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    if (this.user) {
      this.account.id = this.user.id;
      
      this.account.name = this.user.name;
      this.account.lastName = this.user.lastName;
      this.account.email = this.user.email;
      this.account.isActivated = this.user.isActivated;
    }
  }
  modal(){
    this.showModal = !this.showModal
  }

  onSubmit(): void {
    this.accountService.putUser(this.account).subscribe(
      (data: listAll) => {
        console.log('atualizado', data)
        window.location.reload();
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
    )
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }
}
