import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostListDto } from '../models/post.model';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {


  constructor(private router: Router) {
    this.init();
  }

  @Input() posts: Array<PostListDto> = [];

  init() {
  }

  ngOnInit() {
    this.posts = [{
      title: 'Post #1',
      slug: 'post-1',
      intro: 'some very important lorem ipsum text'

    },{
      title: 'Post #2',
      slug: 'post-2',
      intro: 'some very important lorem ipsum text'

    },{
      title: 'Post #3',
      slug: 'post-3',
      intro: 'some very important lorem ipsum text'

    },{
      title: 'Post #4',
      slug: 'post-4',
      intro: 'some very important lorem ipsum text'
    }];
  }

  goTo(slug) {
    console.warn(slug);
    this.router.navigate(['blog/' + slug ]);
  }
}
