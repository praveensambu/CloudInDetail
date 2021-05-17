import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AwsService } from '../aws.service';
import { ICategory, IBlogPost } from '../models/blogPost.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
 public blogPosts: IBlogPost[] = [];
 public  categories: ICategory[] = [
  {id: 1, name: 'AWS'},
  {id: 2, name: 'AZure'},
  {id: 3, name: 'GCP'},
  {id: 4, name: 'Docker'}
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
      categoryId : 1,
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
        a.category = this.categories.find(x => x.id === a.categoryId).name;
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
