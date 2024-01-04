import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsServerlessWorkshopComponent } from './aws-serverless-workshop.component';

describe('AwsServerlessWorkshopComponent', () => {
  let component: AwsServerlessWorkshopComponent;
  let fixture: ComponentFixture<AwsServerlessWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsServerlessWorkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsServerlessWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
