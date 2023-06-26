import { Component } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  projects: Project[] = [
    {
      title: 'QR-Based Attendance System',
            technologies: 'React, Angular, NodeJS, Bootstrap, Figma, Python, MongoDB',
            description: [
              'Developed a QR-based attendance system using Angular as the frontend framework, ensuring a modern and intuitive user interface.',
              'Collaborated with a multidisciplinary team to design and implement the backend using Python, ensuring smooth integration between frontend and backend components.',
              'Utilized  components, services, and routing modules to implement a user-friendly and responsive web application.',
            ]
    },

    {
      title:'DrinksOnUs - A Frontend Website for Alcohol delivery systems',
      technologies:'Figma, Angular, SCSS, Tailwind CSS, Rxjs',
      description: [
        'Developed a front-end website for Alcohol delivery systems using Figma, Angular, SCSS, Tailwind CSS, and Rxjs.',
        'Implemented design using Figma, Tailwind CSS and Canva',
        'Utilized  components, services, and routing modules to implement a user-friendly and responsive web application.',
      ]

    },
  ];

}
