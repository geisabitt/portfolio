import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  showAllText: boolean = false;

  toggleShowText(): void {
    this.showAllText = !this.showAllText;
  }
}
