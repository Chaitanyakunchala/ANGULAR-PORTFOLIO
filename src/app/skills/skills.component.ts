import { Component } from '@angular/core';

// Define the Skill interface
interface Skill {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // Define the skills array with the Skill interface
  skills: Skill[] = [
    { name: 'JavaScript', description: 'Experienced with JavaScript and modern frameworks.', icon: 'fab fa-js' },
    { name: 'Angular', description: 'Proficient in Angular for building dynamic web applications.', icon: 'fab fa-angular' },
    { name: 'HTML & CSS', description: 'Strong skills in HTML5 and CSS3 for creating responsive designs.', icon: 'fab fa-html5' },
    { name: 'Java', description: 'Experienced in Java for server-side development.', icon: 'fab fa-java' },
    { name: 'C', description: 'A general-purpose, procedural programming language.', icon: 'fas fa-code' },
    { name: 'Python', description: 'A high-level, interpreted language known for its readability and simplicity.', icon: 'fab fa-python' },
    { name: 'MySQL', description: 'An open-source relational database management system.', icon: 'fas fa-database' },
    { name: 'SQLite', description: 'A lightweight, self-contained SQL database engine.', icon: 'fas fa-database' },
    { name: 'PostgreSQL', description: 'An advanced, open-source relational database system known for its reliability and feature set.', icon: 'fas fa-database' }
    // Add more skills as needed
  ];
}
