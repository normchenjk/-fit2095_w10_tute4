import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee, EmployeeDbService } from '../employee-db.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  empId: string;
  empName: string;
  empDept: string;
  empSalary: number;

  constructor(private empDbService: EmployeeDbService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee() {
    const empObject: Employee = {
      id: this.empId,
      name: this.empName,
      dept: this.empDept,
      salary: this.empSalary
    };

    this.empDbService.addNewEmployee(empObject).subscribe();
    this.router.navigate(["/listEmployees"]);
  }
}
