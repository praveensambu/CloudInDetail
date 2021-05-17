import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPostsComponentComponent } from './category-posts-component.component';

describe('CategoryPostsComponentComponent', () => {
  let component: CategoryPostsComponentComponent;
  let fixture: ComponentFixture<CategoryPostsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryPostsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPostsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
