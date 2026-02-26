import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IsActiveMatchOptions, Router, RouterLink, RouterOutlet } from '@angular/router';
import { IGX_DIALOG_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxDropDownItemComponent, IgxIconButtonDirective, IgxIconComponent, IgxToggleActionDirective } from 'igniteui-angular';

@Component({
  selector: 'app-master-view',
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IgxDropDownItemComponent, IgxIconButtonDirective, IgxToggleActionDirective, IgxButtonDirective, IgxIconComponent, IgxAvatarComponent, IgxBadgeComponent, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {
  public value?: string;

  constructor(
    public router: Router,
  ) {}


  public isActive(path: string): boolean {
    const exactMatch: IsActiveMatchOptions = {
        paths: 'exact',
        matrixParams: 'ignored',
        queryParams: 'ignored',
        fragment: 'ignored'
    }
    return this.router.isActive(path, exactMatch);
  }
}
