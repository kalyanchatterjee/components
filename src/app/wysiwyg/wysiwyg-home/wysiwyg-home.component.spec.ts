import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwygHomeComponent } from './wysiwyg-home.component';

describe('WysiwygHomeComponent', () => {
  let component: WysiwygHomeComponent;
  let fixture: ComponentFixture<WysiwygHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WysiwygHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
