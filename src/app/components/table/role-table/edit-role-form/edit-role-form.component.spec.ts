import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoleFormComponent } from '../../role-page/edit-user-form/edit-user-form.component';

describe('EditRoleFormComponent', () => {
  let component: EditRoleFormComponent;
  let fixture: ComponentFixture<EditRoleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRoleFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
