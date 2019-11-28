import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service : DataService) { }
  emps : any;
  ngOnInit() {
    this.service.select().subscribe((result)=>{
      console.log(result);
      this.emps = result;
    });
  }

}
