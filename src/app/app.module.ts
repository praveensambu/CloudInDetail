import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material.module';
import {AwsService} from './aws.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogPostComponent } from './blog/blog-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill';
import { TitleFormatPipe } from './tutorials/TitleFormatPipe';
import { BlogsComponent } from './blog/blogs.component';
import { IntroductionComponent } from './Certifications/Containers/introduction/introduction.component';
import { ResultsComponent } from './Certifications/Containers/results/results.component';
import { QuestionComponent } from './Certifications/Containers/question/question.component';
import { QuestionTemplateComponent } from './Certifications/question/question-template.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ListOfDemosComponent } from './list-of-demos/list-of-demos.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TutorialsComponent,
    BlogPostComponent,
    BlogsComponent,
    AddPostComponent,
    TitleFormatPipe,
    QuestionComponent,
    ResultsComponent,
    IntroductionComponent,
    QuestionTemplateComponent,
    LoadingIndicatorComponent,
    ListOfDemosComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    QuillModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    AngularEditorModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [AwsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
