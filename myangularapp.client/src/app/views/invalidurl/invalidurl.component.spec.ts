import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidurlComponent } from './invalidurl.component';

describe('InvalidurlComponent', () => {
  let component: InvalidurlComponent;
  let fixture: ComponentFixture<InvalidurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvalidurlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvalidurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
