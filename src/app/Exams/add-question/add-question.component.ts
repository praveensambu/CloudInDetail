import { Component, OnInit } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { HelperService } from '../services/helper.service';
import { Option, Question, Quiz, QuizConfig } from '../models/index';

@Component({
  selector: 'app-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css'],
  providers: [QuizService]
})
export class AddQuestionComponent implements OnInit {

    constructor(private quizService: QuizService) { }

    ngOnInit() {
    }
}
