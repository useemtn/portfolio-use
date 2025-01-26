import { Component } from '@angular/core';
import { ExperienceItemComponent } from '../experience-item/experience-item.component';
import { FormacionItemComponent } from '../formacion-item/formacion-item.component';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ButtonComponentComponent } from '../button-component/button-component.component';
@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [ExperienceItemComponent, FormacionItemComponent, ProjectCardComponent, ButtonComponentComponent],
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent {

}
