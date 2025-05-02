import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroScreenComponent } from './retro-screen.component';

describe('RetroScreenComponent', () => {
  let component: RetroScreenComponent;
  let fixture: ComponentFixture<RetroScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
