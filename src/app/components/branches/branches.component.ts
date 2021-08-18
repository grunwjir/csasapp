import {Component, OnInit, Input} from '@angular/core';
import {Branch} from "../../models/branch.model";
import {BranchService} from "../../services/branch.service";
import {Paging} from "../../models/paging.model";

const PAGE_SIZE: number = 4;

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  @Input() branches: [Branch] | undefined;
  @Input() paging: Paging = {pageSize: PAGE_SIZE, currentPage: 1, collectionSize: 0}
  private searchText: string = ""

  constructor(private branchService: BranchService) {
  }

  ngOnInit(): void {
  }

  currentPageChanged(currentPage: number): void {
    this.fetchBranches(this.searchText, currentPage, this.paging.pageSize);
  }

  searchTextChanged(text: string) {
    this.searchText = text;
    this.fetchBranches(text, 1, PAGE_SIZE);
  }

  private fetchBranches(searchText: string, currentPage: number, pageSize: number) {
    this.branchService.fetchBranches(searchText, currentPage - 1, pageSize).subscribe(response => {
      this.branches = response.items
      this.paging = {
        pageSize: response.pageSize,
        currentPage: response.pageNumber + 1,
        collectionSize: response.totalItemCount
      }
    })
  }

}
