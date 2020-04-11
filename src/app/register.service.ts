import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor() {}

  getEmployees() {
    return [
      { id: 1, name: 'Mani' },
      { id: 2, name: 'Sasi' },
      { id: 3, name: 'Ram' },
      { id: 4, name: 'Suji' }
    ];
  }
}
