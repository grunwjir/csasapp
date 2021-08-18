import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Paging} from "../../models/paging.model";

@Component({
  selector: 'app-branch-paging',
  templateUrl: './branch-paging.component.html',
  styleUrls: ['./branch-paging.component.scss']
})
export class BranchPagingComponent implements OnInit {
  @Input() paging!: Paging
  @Output() currentPageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged() {
    this.currentPageChanged.emit(this.paging.currentPage)
  }

}
