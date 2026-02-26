import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-dashboards',
  imports: [IGX_LIST_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxButtonDirective],
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent {
  public listSelectedItem5?: string;
}
