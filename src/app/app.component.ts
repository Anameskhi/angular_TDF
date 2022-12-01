import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'forms_angular';
  topics = ['Angular', 'React', 'Vue']
   topicHasError = true
  userModel = new User('Rob','an@gm.com',571087888,"default","morning",true)

  validateTopic(value: string){
    if(value === "default"){
      this.topicHasError = true
    }else{
      this.topicHasError = false
    }

  }
  onSubmit(){

  }
}