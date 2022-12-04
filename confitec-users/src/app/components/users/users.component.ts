import { Component, OnInit, Inject  } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { UserModel } from './users.model';
import { CreateUserDialogComponent } from '../create-user-dialog/create-user-dialog.component';
import { UpdateUserDialogComponent } from '../update-user-dialog/update-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: UserModel = new UserModel();
  // userId :number; 
  users: Array<any> = new Array();
  displayedColumns: string[] = ['userId', 'userName', 'surName', 'email', 'birthDate','scholarity', 'actions'];


  constructor(
    private usersService : UsersService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers()
  {
      this.usersService.listUser().subscribe(users => 
        {
          this.users = users;
          console.log(users);
        }, error => 
        {
          console.log('Getting users failed.', error)
        });
  }

  deleteUser(userId:any)
  {
      this.usersService.deleteUser(userId).subscribe(user => 
        {
          this.listUsers();
        }, error => {console.log('Deleting user failed', error)})
  }

  openUpdateDialog(updateUser:any): void {
    this.dialog.open(UpdateUserDialogComponent, {
      width: '500px',
      data : updateUser
    }).afterClosed().subscribe(()=> this.listUsers());
  }

  openCreateDialog(): void {
    this.dialog.open(CreateUserDialogComponent, {
      width: '500px'
    }).afterClosed().subscribe(()=> this.listUsers());
  }
}