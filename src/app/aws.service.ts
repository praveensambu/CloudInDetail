import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IContact } from './models/contact.model';
import { IBlogPost } from './models/blogPost.model';
import { map } from 'rxjs/operators';
const contactUrl = 'https://44g0u4ha5j.execute-api.us-east-1.amazonaws.com/Dev/contact';
const blogPostUrl = 'https://44g0u4ha5j.execute-api.us-east-1.amazonaws.com/Dev/blogpost';

const headers = new HttpHeaders();
headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class AwsService {
  public blogPosts: IBlogPost[];
  constructor(private httpService: HttpClient) { }

  public getcontacts(): Observable<any> {
     return this.httpService.get<any>(contactUrl);
 }

 public addContact(contact: IContact): Observable<any> {
  return this.httpService.post<IContact>(contactUrl, contact);
 }

 public addBlogPost(post: IBlogPost): Observable<any>  {
  return this.httpService.post<IBlogPost>(blogPostUrl, post);
}

public getPosts(): Observable<IBlogPost[]> {
  return this.httpService.get<any>(blogPostUrl, {
    headers
    }).pipe(map(res => {
    this.blogPosts = JSON.parse(res.body);
    return this.blogPosts;
}));
}
}
