import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletbookComponent } from './deletbook.component';

describe('DeletbookComponent', () => {
  let component: DeletbookComponent;
  let fixture: ComponentFixture<DeletbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
