import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from '../users/users.model';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.css']
})
export class CreateUserDialogComponent implements OnInit {

  user: UserModel = new UserModel();
  users: Array<any> = new Array();

  constructor(
    private usersService : UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CreateUserDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  addUser()
  {
      this.usersService.addUser(this.user).subscribe(user => 
        {
          this.user =  new UserModel();
        }, error => {console.log('Add user failed', error)})
  }
}