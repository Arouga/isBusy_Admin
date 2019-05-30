import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  feedback: any[];
  constructor(feedbackService : FeedbackService) {
    feedbackService.getFeedback().subscribe(
        res => {
              console.log(res);
              this.feedback = res;
        }, 
        
        err => {
              console.log(err);
        }
      )
   }

  ngOnInit() {
  }

}

