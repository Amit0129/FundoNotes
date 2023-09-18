import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallNoteComponent } from './getall-note.component';

describe('GetallNoteComponent', () => {
  let component: GetallNoteComponent;
  let fixture: ComponentFixture<GetallNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallNoteComponent]
    });
    fixture = TestBed.createComponent(GetallNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
