import { Component } from '@angular/core';
import Developer from '../models/developer.model';
import Skill from '../models/skill.model';

@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css']
})


export class DeveloperComponentComponent {
  currentDevelopper: Developer = new Developer(
    "LAMIRI", 
    "Samy", 
    35, 
    "Homme", 
    "Y en aurait trop à dire donc je m'arrête là.", 
    [
      new Skill("Javascript", "https://static.javatpoint.com/images/javascript/javascript_logo.png", "https://developer.mozilla.org/fr/docs/Web/JavaScript"), 
      new Skill("PHP","https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/197px-PHP-logo.svg.png","https://www.php.net"),
      new Skill("MySQL","https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/langfr-330px-MySQL.svg.png","https://www.mysql.com"),
    ]);

}
