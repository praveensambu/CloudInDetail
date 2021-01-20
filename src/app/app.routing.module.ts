import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog/blog-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BrowserModule } from '@angular/platform-browser';
import { BlogsComponent } from './blog/blogs.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogsComponent},
  { path: 'blog/:categoryId/:postId', component: BlogPostComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: '', component: HomeComponent }];

// configures NgModule imports and exports
@NgModule({
  imports: [BrowserModule , RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

