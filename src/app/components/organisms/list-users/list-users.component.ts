import { Component } from '@angular/core';
import { listAll } from '../../../../interfaces/listAll';
import { AccountService } from '../../../account/shared/account.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss'
})
export class ListUsersComponent {
  listAll: listAll[] = []

  constructor(private accountService: AccountService ){
    this.getListAll()
  }

  getListAll(): void {
    this.accountService.getAll().subscribe((listAll) => (this.listAll = listAll))
  }
}
