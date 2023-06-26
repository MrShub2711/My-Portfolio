import { Component } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'D.A.V PUBLIC SCHOOL, Dhanbad, Jharkhand',
      course: 'Higher Secondary',
      duration: '2017-2019',
      score: '76%'
    },
    {
      institute: 'Sister Nivedita University,Kolkata',
      course: 'B.Tech in CSE',
      duration: '2019-2023',
      score: '8.64 CGPA'
    }
  ]

}
