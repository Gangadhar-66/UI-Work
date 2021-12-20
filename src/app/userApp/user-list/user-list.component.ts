import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { Student } from 'src/app/interfaces/user';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [

  {provide: UserListComponent, useExisting: forwardRef(() => UserListComponent)}
  ]
})
export class UserListComponent implements OnInit {

  studentList!: Student[];

  constructor(private studentService: StudentService) { 
  }

  ngOnInit(): void {
    this.studentList = this.studentService.getStudents();
  }

 
  
}
