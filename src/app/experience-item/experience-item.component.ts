import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {
  @Input() title: string = ''; 
  @Input() subtitle: string = ''; 
  @Input() period: string = ''; 
}
