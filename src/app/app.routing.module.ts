import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog/blog-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BrowserModule } from '@angular/platform-browser';
import { BlogsComponent } from './blog/blogs.component';
import { IntroductionComponent } from './Certifications/Containers/introduction/introduction.component';
import { QuestionComponent } from './Certifications/Containers/question/question.component';
import { ResultsComponent } from './Certifications/Containers/results/results.component';
import { CategoryPostsComponentComponent } from './category-posts-component/category-posts-component.component';
import { ListOfDemosComponent } from './list-of-demos/list-of-demos.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogsComponent},
  { path: 'blog/:category/:title', component: BlogPostComponent },
  { path: 'blog/:category/', component: CategoryPostsComponentComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'intro', component: IntroductionComponent, pathMatch: 'full' },
  { path: 'question', component: QuestionComponent, pathMatch: 'full' },
  { path: 'question/:questionId', component: QuestionComponent, pathMatch: 'full' },
  { path: 'results', component: ResultsComponent, pathMatch: 'full' },
  { path: 'demos', component: ListOfDemosComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }];

// configures NgModule imports and exports
@NgModule({
  imports: [BrowserModule , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

