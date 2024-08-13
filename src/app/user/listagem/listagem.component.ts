import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/model/user';
import { UserFirestoreService } from 'src/app/shared/services/user-firestore.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  dataSource: MatTableDataSource<User>;
  colunasVisiveis = ['name', 'email']

  constructor(private userFireStoreService: UserFirestoreService) {
    this.dataSource = new MatTableDataSource<User>();
  }

  ngOnInit(): void {
    this.userFireStoreService.getAll().subscribe(users => {
      this.dataSource = new MatTableDataSource<User>(users);
    })
  }
}
