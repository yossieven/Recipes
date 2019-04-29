import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNavBarComponent } from './category-nav-bar.component';

describe('CategoryNavBarComponent', () => {
  let component: CategoryNavBarComponent;
  let fixture: ComponentFixture<CategoryNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
