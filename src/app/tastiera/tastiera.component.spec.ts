import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TastieraComponent } from './tastiera.component';

describe('TastieraComponent', () => {
  let component: TastieraComponent;
  let fixture: ComponentFixture<TastieraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TastieraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TastieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
