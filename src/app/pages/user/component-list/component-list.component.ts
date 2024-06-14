import { Component, output } from '@angular/core';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrl: './component-list.component.css'
})
export class ComponentListComponent {

  
  isOpened = false; // Flag to control sidebar visibility

  toggleSidebar() {
    this.isOpened = !this.isOpened;
  }
}
