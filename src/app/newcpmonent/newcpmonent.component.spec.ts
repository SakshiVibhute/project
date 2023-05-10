import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcpmonentComponent } from './newcpmonent.component';

describe('NewcpmonentComponent', () => {
  let component: NewcpmonentComponent;
  let fixture: ComponentFixture<NewcpmonentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcpmonentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewcpmonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
