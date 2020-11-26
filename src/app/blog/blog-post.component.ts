import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AwsService } from '../aws.service';
import { IBlogPost } from '../models/blogPost.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  public id: number;
  public posts: any[] = [];
  public post: IBlogPost;
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
        console.log(this.post);
        });
    });

  }

}
