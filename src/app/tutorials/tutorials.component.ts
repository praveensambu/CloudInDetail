import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AwsService } from '../aws.service';
import { ICategory, IBlogPost } from '../models/blogPost.model';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {
 public blogPosts: IBlogPost[] = [];
 public  categories: ICategory[] = [
  {id: 1, name: 'AWS Developer'},
  {id: 2, name: 'AWS Cloud Practioner'},
  {id: 3, name: 'Aws associate Architect'},
  {id: 4, name: 'AWS Case Studies'}
];
  constructor(private aws: AwsService, private router: Router) {
    this.init();
  }

  init() {
  }

  ngOnInit() {
    let blogPost: IBlogPost;
    blogPost = {
      slug : '',
      intro : '',
      postId : '',
      categoryId : '3',
      category: '',
      title : '',
      datePosted : '',
      htmlContent : '',
      postedBy : '',
      tags : '',
      headerPhotoUrl: ''
    };
    this.aws.getPosts(blogPost)
    .subscribe((data: any) => {
      data.forEach(a => {
        a.intro = a.Introduction;
        a.title = a.Title;
        a.postId = a.PostId;
        if (a.HeaderPhotoUrl != null)
        {
          a.headerPhotoUrl = a.HeaderPhotoUrl;
        }
        else
        {
          a.headerPhotoUrl = 'https://cloudonaut.io/images/2020/12/move@330w2x.webp';
        }
        this.blogPosts.push(a);
        });
    });

  }

  goTo(slug) {
    this.router.navigate(['blog/' + slug ]);
  }
}
