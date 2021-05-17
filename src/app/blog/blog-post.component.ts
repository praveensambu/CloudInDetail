import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AwsService } from '../aws.service';
import { IBlogPost, ICategory } from '../models/blogPost.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit , OnChanges {
  public id: number;
  public posts: any[] = [];
  public post: IBlogPost;
  public loading = false;
  public  categories: ICategory[] = [
    {id: 1, name: 'AWS'},
    {id: 2, name: 'AZure'},
    {id: 3, name: 'GCP'},
    {id: 4, name: 'Docker'}
  ];
  constructor(private route: ActivatedRoute,
              private router: Router, private aws: AwsService) {

   this.post = {
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
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.postId;
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
    blogPost.postId = this.route.snapshot.params.postId;
    blogPost.categoryId = this.categories.find(x => x.name === this.route.snapshot.params.category).id;
    this.aws.getPost(blogPost)
    .subscribe((data: any) => {
      blogPost.headerPhotoUrl = data.HeaderPhotoUrl;
      blogPost.title = data.Title;
      blogPost.htmlContent = data.HtmlContent;
      this.post = blogPost;
      this.loading = false;
    });
  }

  public ngOnChanges()
  {
    // let blogPost: IBlogPost;
    // blogPost = {
    //   slug : '',
    //   intro : '',
    //   postId : '',
    //   categoryId : 1,
    //   category: '',
    //   title : '',
    //   datePosted : '',
    //   htmlContent : '',
    //   postedBy : '',
    //   tags : '',
    //   headerPhotoUrl: ''
    // };
    // blogPost.postId = this.route.snapshot.params.postId;
    // blogPost.categoryId = this.route.snapshot.params.categoryId;
    // this.aws.getPost(blogPost)
    // .subscribe((data: any) => {
    //   console.log(data);
    //   blogPost.title = data.Title;
    //   blogPost.htmlContent = data.HtmlContent;
    //   blogPost.headerPhotoUrl = data.HeaderPhotoUrl;
    //   this.post = blogPost;
    //   this.loading = false;
    // });

  }

}
