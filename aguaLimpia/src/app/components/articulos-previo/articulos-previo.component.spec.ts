import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosPrevioComponent } from './articulos-previo.component';

describe('ArticulosPrevioComponent', () => {
  let component: ArticulosPrevioComponent;
  let fixture: ComponentFixture<ArticulosPrevioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticulosPrevioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosPrevioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
