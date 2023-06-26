import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
  myData: string[][] = [
    ['Name', 'Shubham Prasad'],
    ['Date-of-Birth', '25/09/2001'],
    ['Work Experience', '1 year'],
    ['Education', 'B.Tech in Computer Science'],
  ];

  aboutMe: string[] = [
    'Passionate Web & Blockchain Developer professional with expertise in Frontend, UI/UX, Backend. Experienced in developing and delivering innovative solutions to enhance user experiences.',
    'Strong background in Angular, Python, Nest.js, Node.js, ExpressJs, React js, Vue.js, SQL, Blockchain.',
    'Seeking new opportunities to contribute skills and drive to a forward-thinking organization. Open to job referrals and connections within the industry. '
  ];

}
