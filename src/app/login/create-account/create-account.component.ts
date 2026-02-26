import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective } from 'igniteui-angular';

@Component({
  selector: 'app-create-account',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, FormsModule, RouterLink],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  public value?: string;
  public value1?: string;
  public value2?: string;
  public value3?: string;
}
