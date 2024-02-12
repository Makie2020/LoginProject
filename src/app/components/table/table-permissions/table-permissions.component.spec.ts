import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePermissionsComponent } from './table-permissions.component';

describe('TablePermissionsComponent', () => {
  let component: TablePermissionsComponent;
  let fixture: ComponentFixture<TablePermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePermissionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
