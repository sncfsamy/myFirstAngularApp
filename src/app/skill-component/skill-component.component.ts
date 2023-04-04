import { Component, Input } from '@angular/core';
import Skill from '../models/skill.model';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent {
  @Input()
  skill: Skill = new Skill();
}
