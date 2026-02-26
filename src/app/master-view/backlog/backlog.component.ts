import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomersType } from '../../models/northwind/customers-type';
import { EmployeesType } from '../../models/northwind/employees-type';
import { OrdersType } from '../../models/northwind/orders-type';
import { SuppliersType } from '../../models/northwind/suppliers-type';
import { NorthwindService } from '../../services/northwind.service';

@Component({
  selector: 'app-backlog',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxIconButtonDirective, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, FormsModule],
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public listSelectedItem6?: string;
  public value?: string;
  public filtersVisible = false;
  public northwindOrders: OrdersType[] = [];
  public northwindCustomers: CustomersType[] = [];
  public northwindEmployees: EmployeesType[] = [];
  public northwindSuppliers: SuppliersType[] = [];

  constructor(
    public northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.northwindService.getOrders().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindOrders = data
    );
    this.northwindService.getCustomers().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindCustomers = data
    );
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindEmployees = data
    );
    this.northwindService.getSuppliers().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindSuppliers = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
