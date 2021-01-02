import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AwsService } from '../aws.service';
import { IBlogPost, ICategory } from '../models/blogPost.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  public id: number;
  public posts: any[] = [];
  public post: IBlogPost;
  public  categories: ICategory[] = [
    {id: 1, name: 'AWS Developer'},
    {id: 2, name: 'AWS Cloud Practioner'},
    {id: 3, name: 'Aws associate Architect'},
    {id: 4, name: 'AWS Case Studies'}
  ];
  constructor(private route: ActivatedRoute,
              private router: Router, private aws: AwsService) {


  }

  ngOnInit() {
    this.id = this.route.snapshot.params.postId;
    this.aws.getPosts()
    .subscribe((data: any) => {
      data.Items.forEach(a => {
        a.intro = a.Title;
        a.title = a.Title;
        a.htmlContent = a.HtmlContent;
        a.postId = 1;
        this.posts.push(a);
        this.post = this.posts.find(b => b.postId == this.id);
        this.post.category = this.categories.find(x => x.id === a.id).name;
        });
    });

  }

}
