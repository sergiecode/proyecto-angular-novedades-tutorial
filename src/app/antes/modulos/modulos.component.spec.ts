import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosComponent } from './modulos.component';

describe('ModulosComponent', () => {
  let component: ModulosComponent;
  let fixture: ComponentFixture<ModulosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModulosComponent]
    });
    fixture = TestBed.createComponent(ModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
