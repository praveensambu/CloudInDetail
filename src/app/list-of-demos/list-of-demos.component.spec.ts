import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDemosComponent } from './list-of-demos.component';

describe('ListOfDemosComponent', () => {
  let component: ListOfDemosComponent;
  let fixture: ComponentFixture<ListOfDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfDemosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
