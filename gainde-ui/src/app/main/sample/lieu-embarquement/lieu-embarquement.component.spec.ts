import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuEmbarquementComponent } from './lieu-embarquement.component';

describe('LieuEmbarquementComponent', () => {
  let component: LieuEmbarquementComponent;
  let fixture: ComponentFixture<LieuEmbarquementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LieuEmbarquementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LieuEmbarquementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
