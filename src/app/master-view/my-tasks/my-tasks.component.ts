import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CALENDAR_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxBadgeComponent, IgxButtonDirective, IgxDialogComponent, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-my-tasks',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CALENDAR_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxBadgeComponent, IgxIconComponent, IgxButtonDirective, IgxAvatarComponent, FormsModule],
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent {
  @ViewChild('editTaskDialog', { static: true, read: IgxDialogComponent})
  private editTaskDialog?: IgxDialogComponent;

  public listSelectedItem?: string;
  public listSelectedItem1?: string;
  public listSelectedItem2?: string;
  public listSelectedItem3?: string;
  public listSelectedItem4?: string;
  public value = 'This is the Task Name';
  public value1 = 'This is a sample description of a task. It should have the most important things that should be achieved.';
  public value2?: string;


  public clickListItem(): void {
    this.listSelectedItem4 = '0';
    this.editTaskDialog?.toggle();
  }

  public clickListItem1(): void {
    this.listSelectedItem4 = '1';
    this.editTaskDialog?.toggle();
  }
}
