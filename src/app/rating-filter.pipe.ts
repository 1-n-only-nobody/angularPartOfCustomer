import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingFilter'
})
export class RatingFilterPipe implements PipeTransform {

  transform(filterValue: any[], arg1: any, arg2: any, arg3: any, args?: any): any {

    const KeyValues = filterValue.values();

    let tempArray: any[] = [];

    let temp: any;

    if (arg1 === 'rating') {
      for (let index = 0; index < filterValue.length; index++) {
        temp = KeyValues.next();
        if (temp.value[arg1] >= 3) {
          tempArray.push(temp.value);
        }
        // console.log(temp.value);
      }
      if (arg2 === 'location' && arg3 !== '') {
        const extraArray: any[] = [];
        for (let index = 0; index < tempArray.length; index++) {
          const element = tempArray[index];
          if (element[arg2] === arg3) {
            extraArray.push(element);
            console.log(element);
          }
        }
        tempArray = extraArray;
      }
    }

    return tempArray;
  }

}
