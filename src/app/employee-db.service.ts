import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDbService {
  private employees: Employee[] = [];

  constructor(private http: HttpClient) {
    this.http.get("/employees").subscribe((data: Employee[]) => {
      this.employees = data;
    });
   }

  getEmployees() {
    return this.employees;
  }

  addNewEmployee(employee: Employee) {
    this.employees.push(employee);

    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type" : "application/json"})
    };

    return this.http.post("/employees", employee, httpOptions);
  }
}

export interface Employee {
  id: string;
  name: string;
  dept: string;
  salary: number;
}