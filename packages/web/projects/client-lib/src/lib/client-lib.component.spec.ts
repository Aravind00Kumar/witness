import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLibComponent } from './client-lib.component';

describe('ClientLibComponent', () => {
  let component: ClientLibComponent;
  let fixture: ComponentFixture<ClientLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
