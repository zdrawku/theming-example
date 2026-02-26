import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-sign-in',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxCheckboxComponent, FormsModule, RouterLink],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public value?: string;
  public value1?: string;
  public checked = false;
}
