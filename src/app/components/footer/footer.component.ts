import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  changeLanguage(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    if (selectElement) {
      const selectedValue = selectElement.value;
      console.log(selectedValue);  // Do something with the value
    }
  }
}