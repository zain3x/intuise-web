import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSanlogComponent } from './web-sanlog.component';

describe('WebSanlogComponent', () => {
  let component: WebSanlogComponent;
  let fixture: ComponentFixture<WebSanlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSanlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSanlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
