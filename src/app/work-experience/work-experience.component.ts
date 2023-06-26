import { Component } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {
  workExpList: WorkExperience[] = [
    {
      role: 'Blockchain Developer',
      company: 'Vara Infrovate Priate Ltd',
      duration: 'Jan,2023 - July,2023',
      description: [
        'Developed a blockchain application that allows users to create, view, and delete transactions.',
        'Worked on the blockchain using the Hyperledger Fabric.',
        'Developed and deployed chaincodes on the Hyperledger']
    },
    {
      role: 'Front-End Developer',
      company: 'Rosa Tech Private Ltd.',
      duration: 'Sept,2022 - Nov,2022',
      description: [
        'Implemented modern frontend technologies such as HTML5, CSS3, and JavaScript to create seamless user experiences.',
        'Worked closely with backend developers to integrate frontend components with server-side logic, ensuring smooth data flow and functionality.',
      ]
    },
    {
      role: 'Technical Content Writer',
      company: 'GAO Tek',
      duration: 'Nov,2020 - Feb,2021',
      description: [
        'Collaborated closely with subject matter experts, engineers, and marketing teams to gather information and ensure the accuracy and technical correctness of the content.',
        'Actively participated in brainstorming sessions and content planning meetings, contributing ideas for new content initiatives and strategies.',
      ]
    }
  ];



}
