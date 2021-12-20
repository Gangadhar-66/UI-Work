import { Injectable } from '@angular/core';
import { Student } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentList : Student[] =[];
  constructor(private http: HttpClient) { }

  getStudents(){
    return this.studentList;
  }

  getStudent(id: string){
    let student: Student| undefined = undefined;
    this.studentList.map(val=>{
      if(val.id == id) student = val;
    });
    return student;
  }

  studentEdit(student: Student){
    let present: Boolean = false;
    this.studentList.map((val, index)=>{
      if(val.id == student.id) {this.studentList[index] = student;present=true}
    });
    return present;
}

  }
