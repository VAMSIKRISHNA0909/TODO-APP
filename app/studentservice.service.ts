import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {
  students=[
            {"Name":" Y S V VAMSI KRISHNA","Registration":"201900396","Department":"CSE","Semester":5},
            {"Name":"SAI SAMPATH","Registration":"202000110","Department":"ECE","Semester":3},
            {"Name":"MAHESH","Registration":"201800199","Department":"ME","Semester":7},
            {"Name":"GOPI","Registration":"201900300","Department":"CSE","Semester":5},
            {"Name":"ARJUN","Registration":"202000001","Department":"CE","Semester":1}
          ]
  getdetails()
  {
    return this.students
  }
  constructor() { }
}
