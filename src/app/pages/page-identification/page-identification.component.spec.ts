import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIdentificationComponent } from './page-identification.component';

describe('PageIdentificationComponent', () => {
  let component: PageIdentificationComponent;
  let fixture: ComponentFixture<PageIdentificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageIdentificationComponent]
    });
    fixture = TestBed.createComponent(PageIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
