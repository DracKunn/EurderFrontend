import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../../model/Item";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Item[], itemName: string): Item[] {
    return items.filter(
      item => item.name.toLowerCase().includes(itemName.toLowerCase())
    );
  }

}
