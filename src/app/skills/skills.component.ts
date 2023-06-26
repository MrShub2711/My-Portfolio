import { Component } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular',
      level: '100%',
      rating: 80,
    },
    {
      name: 'ReactJS',
      level: '100%',
      rating: 70,
    },
    {
      name: 'HTML5',
      level: '100%',
      rating: 90,
    },
    {
      name: 'Node.js',
      level: '100%',
      rating: 60,
    },
    {
      name: 'Nest.js',
      level: '100%',
      rating: 70,
    },
  ];

}
