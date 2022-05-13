import { Component, OnInit } from '@angular/core';
import { FeatureModelService } from './feature-model.service';
import { User } from './user.model';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.scss'],
})
export class FetchDataComponent implements OnInit {
  users: User[] = [];
  tablecaption = 'Users';
  displayedColumns: string[] = [
    'id',
    'name',
    'username',
    'email',
    'phone',
    'website',
  ];
  public selectedValues: string[] = [];

  constructor(private featureModelService: FeatureModelService) {}

  ngOnInit(): void {
    this.selectedValues = this.displayedColumns;
  }

  public onValChange(val: any) {
    this.selectedValues = val;
  }

  fetchUsers() {
    this.featureModelService
      .getUsers()
      .subscribe((data: User[]) => (this.users = data));
  }
}
