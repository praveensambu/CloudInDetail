import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { IBlogPost } from '../models/blogPost.model';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AwsService } from '../aws.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent implements OnInit {
  htmlContent = '';
  public addPostForm: FormGroup;
  public tags: string[];
  public separatorKeysCodes = [ENTER, COMMA];
  public post: IBlogPost;
  public date = new Date();
  constructor(  private formbuilder: FormBuilder,
                private aws: AwsService,
                private snackBar: MatSnackBar) {
     this.post = {
       slug :'',
       intro :'',
       postId : 0,
       categoryId : 1,
       title : '',
       datePosted : '',
       htmlContent : '',
       postedBy : '',
       tags : ''
     };
   }
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '410px',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

  public ngOnInit() {
    this.addPostForm = this.formbuilder.group({
      title : '',
      datePosted : '',
      htmlContent : '',
      postedBy : '',
      tags : ''
    });
    this.tags = ['walmart', 'male', 'free', 'sale'];
  }

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (((value || '').trim()) && ((this.tags.indexOf(value) < 0))) {
        this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
        input.value = '';
    }

}

public remove(tag: any): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
        this.tags.splice(index, 1);
    }
}

public addPost() {
  if (this.addPostForm.valid) {

      this.post = this.addPostForm.getRawValue();
      this.post.datePosted = '10/17/2020';
      this.post.postedBy = 'PraveenSambu';
      this.post.categoryId = 1;
      this.aws.addBlogPost(this.post).subscribe((post: any) => {
        this.snackBar.open('Thanks For Writing!!!. Will get back soon.');
      });
      console.log(this.post);
  }
}

}
