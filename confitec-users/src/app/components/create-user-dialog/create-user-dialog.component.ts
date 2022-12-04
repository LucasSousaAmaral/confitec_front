import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from '../users/users.model';
import Swal from 'sweetalert2';

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
        }
        , error => 
        {
          let errors:string = '';
          let title:string = '';

          if(error.error.errors)
          {
            title = error.error.title;
            const arrayOfObj = Object.entries(error.error.errors).map((e) => ( { [e[0]]: e[1] } ));
  
            for(let i = 0; i < arrayOfObj.length; i++)
            {
              errors += 'Property: ' + Object.keys(arrayOfObj[i])[0] + '<br>' + Object.values(arrayOfObj[i]) + '<br><br>'
  
            }
          }
          else
          {
            title =  error.error.Message;

            for(let i = 0; i < error.error.ValidationFailures.length; i++)
            {
              errors += error.error.ValidationFailures[i].ErrorMessage+ '<br><br>';
            }
            console.log('validation errors')
            console.log(error.error.ValidationFailures)

          }

          Swal.fire({
            title: title,
            timer: 3000,
            html: errors,
            icon: 'error'
          })
          
        });
  }
}