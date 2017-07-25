/**
 * Created by lizarusi on 21.07.17.
 */
export class Filters {
  static defaultFilters() {
    return new Filters(
      [
        {
          name: 'Best Match',
          value: 'bestMatch'
        },
        {
          name: 'Price Descending',
          value: 'priceDescending'
        }
      ],
      [
        '15-20',
        '20-25',
        '25-30',
      ],
      [
        'pull&bear',
        'zara'
      ]
    )
  }
  constructor(public sortBy: string | Array<object> = '',
              public priceRanges: object = {'All': true},
              public brands: object  = {'All': true}) {}
}
  //=^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^=
  // addFilter(filterName, option) {
  //   console.log(this);
  //   console.log(option);
  //   this[filterName].push(option);
  //   console.log(this);
  //
  // }
  // removeFilter(filterName, removedOption) {
  //   this[filterName] = this[filterName]
  //                      .filter((a) =>
  //                      !this.isEquivalent(removedOption, a));
  // }
  // getStatus(filterName, option) {
  //   for (let index in this[filterName]) {
  //     if (this.isEquivalent(this[filterName][index], option))
  //       return true
  //   }
  //   return false;
  // }
  // private isEquivalent(a: object, b: object): boolean {
  //   const aNames = Object.getOwnPropertyNames(a);
  //   const bNames = Object.getOwnPropertyNames(b);
  //   if (aNames.length !== bNames.length) {
  //     return false;
  //   }
  //   for (let index in aNames) {
  //     let key = aNames[index];
  //     if (a[key] !== b[key])
  //       return false;
  //   }
  //   return true;
  // }
  //=^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^==^_^=
