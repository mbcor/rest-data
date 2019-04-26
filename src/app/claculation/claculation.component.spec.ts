import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaculationComponent } from './claculation.component';

describe('ClaculationComponent', () => {
  let component: ClaculationComponent;
  let fixture: ComponentFixture<ClaculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
