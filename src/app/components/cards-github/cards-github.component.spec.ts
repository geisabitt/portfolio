import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGithubComponent } from './cards-github.component';

describe('CardsGithubComponent', () => {
  let component: CardsGithubComponent;
  let fixture: ComponentFixture<CardsGithubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsGithubComponent]
    });
    fixture = TestBed.createComponent(CardsGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
