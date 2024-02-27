import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybingingComponent } from './propertybinging.component';

describe('PropertybingingComponent', () => {
  let component: PropertybingingComponent;
  let fixture: ComponentFixture<PropertybingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertybingingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertybingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
