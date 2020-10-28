import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: TutorialsComponent },
  { path: 'blog/:slug', component: BlogComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: '', component: HomeComponent }];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

