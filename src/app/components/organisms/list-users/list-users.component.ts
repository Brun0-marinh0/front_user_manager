import { Component } from '@angular/core';
import { listAll } from '../../../../interfaces/listAll';
import { AccountService } from '../../../account/shared/account.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent {
  isLoading = true
  listAll: listAll[] = []

  constructor(private accountService: AccountService ){
    this.getListAll()
  }


  getListAll(): void {
    this.accountService.getAll().subscribe(
      (data: listAll[]) => {
        this.listAll = data;
        console.log('Dados obtidos:', this.listAll);
        this.isLoading = false
      },
      (error) => {
        console.error('Erro ao obter dados:', error);
      }
     
    );
  }
}
