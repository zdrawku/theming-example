import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_LIST_DIRECTIVES, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective } from 'igniteui-angular';
import { DashboardsComponent } from './dashboards.component';

describe('DashboardsComponent', () => {
  let component: DashboardsComponent;
  let fixture: ComponentFixture<DashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_LIST_DIRECTIVES, IgxIconComponent, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
