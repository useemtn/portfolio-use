import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})

export class ProjectCardComponent {
  @Input() projectLink: string = '';
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() description: string = '';
  @Input() technologies: { src: string; alt: string; width: string; height: string }[] = [];
  @Input() codeLink: string = '';  
}
