import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosViewerComponent } from './favoritos-viewer.component';

describe('FavoritosViewerComponent', () => {
  let component: FavoritosViewerComponent;
  let fixture: ComponentFixture<FavoritosViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritosViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
