import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  /**
    * TODO @Input to set icon name
    * Result :
    * <app-icon [iconName]="'sun-fill'"></app-icon>
    * I want to display an icon with a filled sun
    *
    * Steps :
    * 1 - Install bootstrap icon library
    * 2 - Include icon's CSS file into your Angular project
    * 3 - Test if it working with this example :
    *   <i class="bi-alarm"></i>
    *
    * 4 - Adapt to use the @Input value and replace the class
    */
  @Input() iconName: string = '';

  getIconClass() {
    // Define a method to generate the class dynamically based on the input iconName
    return `bi-${this.iconName}`;
  }

}
