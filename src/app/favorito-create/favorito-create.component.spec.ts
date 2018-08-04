import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritoCreateComponent } from './favorito-create.component';

describe('FavoritoCreateComponent', () => {
  let component: FavoritoCreateComponent;
  let fixture: ComponentFixture<FavoritoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
