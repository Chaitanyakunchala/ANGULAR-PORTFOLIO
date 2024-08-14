import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      image: 'assets/images/SW-3.png',
      title: 'STOPWATCH',
      description: 'The Stopwatch project is a web-based tool featuring a user-friendly interface with Start, Resume, and Restart buttons. The Start button initiates the stopwatch, allowing users to begin timing. The Resume button lets users continue from where they left off if the stopwatch was paused, while the Restart button resets the timer to zero, enabling a new timing session.',
      link: 'https://stopwatch-gamma-wheat.vercel.app/',
      tags: ['Html', 'javascript', 'css']
    },
    {
      image: 'assets/images/tc-1.png',
      title: 'TIC TOC TOE',
      description: 'This Tic-Tac-Toe game is a classic implementation built using HTML, CSS, and JavaScript. It features a user-friendly 3x3 grid where two players can take turns placing their marks (X or O). The game includes real-time win detection to identify the winning combinations or a draw, and a reset button to start a new game easily. ',
      link: 'https://tic-toc-toe-dun.vercel.app/',
      tags: ['JavaScript', 'HTML', 'CSS']
    },
    {
      image: 'assets/images/cal.png',
      title: 'CALCULATOR',
      description: 'This project is a basic yet functional calculator designed to perform fundamental arithmetic operations. It features a user-friendly interface with buttons for addition, subtraction, multiplication, and division, as well as a display area for input and results.',
      link: 'https://calculator-eta-orcin.vercel.app/',
      tags: ['Html', 'javascript', 'css']
    }
  ];
}
