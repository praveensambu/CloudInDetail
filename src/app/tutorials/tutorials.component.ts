import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AwsService } from '../aws.service';
import { IBlogPost } from '../models/blogPost.model';
import { PostListDto } from '../models/post.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {
 public blogPosts: IBlogPost[] = [];

  constructor(private aws: AwsService, private router: Router) {
    this.init();
  }

  // @Input() posts: Array<PostListDto> = [];

  init() {
  }

  ngOnInit() {
    this.aws.getPosts()
    .subscribe((data: any) => {
      data.Items.forEach(a => {
        a.intro = a.Title;
        a.title = a.Title;
        a.postId = 1;
        this.blogPosts.push(a);
        });
    });

  }

  goTo(slug) {
    console.warn(slug);
    this.router.navigate(['blog/' + slug ]);
  }
}
