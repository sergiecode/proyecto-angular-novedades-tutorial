import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent {

  firstName = signal('Angular');
  lastName = signal('Code');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    effect(() => console.log('Name changed:', this.fullName()));
  }

  setName(newName: string) {
    this.firstName.set(newName);
  }

}
