import {Component, Pipe} from '@angular/core';
import {Subject} from 'rxjs';

import {liveSearch} from '../live-search.operator';
import {BranchService} from '../branch.service';

@Component({
  selector: 'app-branch-search',
  templateUrl: './branch-search.component.html',
  styleUrls: ['./branch-search.component.scss']
})
export class BranchSearchComponent {
  private queryTextSubject = new Subject<string>();

  readonly branches$ = this.queryTextSubject.pipe(
    liveSearch(queryText => this.branchService.fetchBranches(queryText))
  );

  constructor(private branchService: BranchService) {

  }

  searchBranches(queryText: string) {
    this.queryTextSubject.next(queryText);
  }

}

@Pipe({
  name: "phone"
})
export class PhonePipe {
  transform(rawNum: string) {
    let newStr = "";
    let i = 0;

    rawNum = rawNum.replace(/\s/g, '');

    if (rawNum.charAt(0) == "+") {
      newStr = "+";
      rawNum = rawNum.substr(1);
    }

    for (; i < Math.floor(rawNum.length / 3); i++) {
      newStr = newStr + rawNum.substr(i * 3, 3) + " ";
    }

    return newStr + rawNum.substr(i * 3);
  }
}
