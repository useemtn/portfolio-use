import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formacion-item',
  standalone: true,
  templateUrl: './formacion-item.component.html',
  styleUrls: ['./formacion-item.component.css']
})
export class FormacionItemComponent {
  @Input() title: string = ''; 
  @Input() org: string = ''; 
  @Input() period: string = ''; 
}
