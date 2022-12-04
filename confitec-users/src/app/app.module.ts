import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {UsersService} from './services/users.service'
import { MaterialExampleModule } from './material.module';

import { UsersComponent } from './components/users/users.component';
import { CreateUserDialogComponent } from './components/create-user-dialog/create-user-dialog.component';
import { UpdateUserDialogComponent } from './components/update-user-dialog/update-user-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserDialogComponent,
    UpdateUserDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    HttpClientModule
  ],
  providers: [UsersService, HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
