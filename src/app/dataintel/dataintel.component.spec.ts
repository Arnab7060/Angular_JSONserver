import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataintelComponent } from './dataintel.component';

describe('DataintelComponent', () => {
  let component: DataintelComponent;
  let fixture: ComponentFixture<DataintelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataintelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataintelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
