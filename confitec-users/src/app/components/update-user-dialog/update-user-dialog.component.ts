import { Component, Inject, OnInit } from '@angular/core';
import { UserModel } from '../users/users.model';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user-dialog',
  templateUrl: './update-user-dialog.component.html',
  styleUrls: ['./update-user-dialog.component.css']
})
export class UpdateUserDialogComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(
    private usersService : UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<UpdateUserDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  updateUser(user: any)
  {
      this.usersService.updateUser(user).subscribe(user => 
        {
          console.log(user);
        }, error => {console.log('Update user failed', error)})
  }
  close(){
    this.dialogRef.close(true);
 }
}