import { Component, OnInit } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  input_first_name: string;
  input_last_name: string;
  input_email: string;
  input_female: string;
  input_male: string;
  input_id: number = 5;
  isChecked: boolean = false;
  userbck: Users[];
  users = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female'
    },
    {
      id: 2,
      first_name: 'Giavani',
      last_name: 'Frediani',
      email: 'gfrediani1@senate.gov',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Noell',
      last_name: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Willard',
      last_name: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male'
    }
  ];
  addCandidate() {
    this.users.push({
      id: this.input_id,
      first_name: this.input_first_name,
      last_name: this.input_last_name,
      email: this.input_email,
      gender: this.input_male ? 'Male' : 'Female'
    });
    this.input_id = this.input_id + 1;
  }

  filterByGender(gender: string) {
    this.userbck = this.users;
    this.users = this.users.filter(item => item.gender.includes(gender));
  }
}
