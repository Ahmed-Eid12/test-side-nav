import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'style.css']
})
export class AppComponent {
  toggle = false;

  toggleList() {
    this.toggle = !this.toggle;
  }
}
