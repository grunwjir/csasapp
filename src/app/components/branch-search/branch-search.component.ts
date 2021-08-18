import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-branch-search',
  templateUrl: './branch-search.component.html',
  styleUrls: ['./branch-search.component.scss']
})
export class BranchSearchComponent implements OnInit {
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter();

  private searchTextSubject: Subject<string> = new Subject<string>();
  private subscription!: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    this.subscription = this.searchTextSubject
      .pipe(debounceTime(250))
      .subscribe((searchText) => this.searchTextChanged.emit(searchText));
  }

  searchBranches(searchText: string) {
    this.searchTextSubject.next(searchText)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
