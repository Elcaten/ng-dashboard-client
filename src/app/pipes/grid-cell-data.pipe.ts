import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'gridCellData' })
export class GridCellDataPipe implements PipeTransform {
  transform(gridData: any) {
    return gridData.data[gridData.column.dataField.toLowerCase()];
  }
}
