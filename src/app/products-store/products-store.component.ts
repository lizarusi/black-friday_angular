/**
 * Created by lizarusi on 17.07.17.
 */
import { Component } from '@angular/core';
import { Filters } from './filters-model';

@Component({
  selector: 'products-store',
  templateUrl: './products-store.component.html',
  styleUrls: ['./products-store.component.scss']
})
export class ProductsStoreComponent {
  public filters = Filters.defaultFilters();
  //TODO: call this in the constructor
  public appliedFilters = new Filters('Best Match');
  constructor() {}
  updateFilters(event, filterName, option) {
    if (event) {
      this.appliedFilters[filterName][option] = true;
    } else {
      delete this.appliedFilters[filterName][option];
    }
  }
  resetFilters(){
    this.appliedFilters = new Filters('Best Match');
  }
}
//=^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^=
// resetFilters(){
//   console.log(this.appliedFilters);
//   this.appliedFilters = new Filters('Best Match');
//   console.log(this.appliedFilters);
// }
// getStatus(filter: string, index: number) {
//   this.appliedFilters.getStatus(filter, this.filters[filter][index])
// }
// onChange($event: any, filter: string, index: number) {
//   if ($event.target.checked) {
//     this.appliedFilters.addFilter(filter, JSON.parse($event.target.value));
//   }
//   else {
//     this.appliedFilters.removeFilter(filter, JSON.parse($event.target.value));
//   }
// }
//=^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^=
