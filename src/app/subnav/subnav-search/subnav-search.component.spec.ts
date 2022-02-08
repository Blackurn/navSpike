import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnavSearchComponent } from './subnav-search.component';

describe('SubnavSearchComponent', () => {
  let component: SubnavSearchComponent;
  let fixture: ComponentFixture<SubnavSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubnavSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnavSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
