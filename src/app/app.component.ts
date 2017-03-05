import { Component, OnInit } from '@angular/core';

import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isEditing = false;
  examplePerson = { "firstName": "", "lastName": "" };
  examplePeople = [
    new Person("Daryl", "Duckmanton", false), 
    new Person("Kobe", "Bryant", true),
    new Person("Michael", "Jordan", true)
  ];
  formPerson: Person;
  
  ngOnInit() {
    this.createBlankPersonForForm();
  }

  editPerson(person: Person) {
    this.isEditing = true;
    this.formPerson = person;
  }

  savePerson() {
    if(!this.isEditing) {
      this.examplePeople.push(this.formPerson);
    }
    else {
      this.isEditing = false;
    }
    
    // So that the pure pipe will be applied
    // We need to change the reference of the examplePeople
    // collection.
    let currentList = this.examplePeople;
    this.examplePeople = new Array<Person>();

    for(var i = 0; i < currentList.length; i++) {
      this.examplePeople.push(currentList[i]);
    }

    this.createBlankPersonForForm();
  }

  private createBlankPersonForForm() {
    this.formPerson = new Person("","", false);
  }
}
