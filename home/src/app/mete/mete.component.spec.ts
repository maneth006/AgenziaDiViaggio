import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteComponent } from './mete.component';

describe('MeteComponent', () => {
  let component: MeteComponent;
  let fixture: ComponentFixture<MeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
