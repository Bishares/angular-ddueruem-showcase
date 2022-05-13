import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { User } from '../fetch-data/user.model';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-material-elements',
  templateUrl: './material-elements.component.html',
  styleUrls: ['./material-elements.component.scss'],
})
export class MaterialElementsComponent implements OnInit {
  gifVisible = false;

  prog = 0;
  timeIntervalSeconds = 0.5;

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  myControl = new FormControl();
  options: User[] = [
    { name: 'Mary' } as User,
    { name: 'Shelley' } as User,
    { name: 'Igor' } as User,
  ];
  filteredOptions!: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );
  }

  loadProgress() {
    setInterval(() => {
      this.addTenPercent();
    }, this.timeIntervalSeconds * 1000);
  }

  addTenPercent() {
    if (this.prog < 100) {
      this.prog = this.prog + 10;
    }
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
