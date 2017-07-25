/**
 * Created by lizarusi on 25.07.17.
 */
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'keys', pure: false})

export class KeysPipe implements PipeTransform {
  transform(value: object ): Array<any> {
    return Object.getOwnPropertyNames(value);
  }
}
