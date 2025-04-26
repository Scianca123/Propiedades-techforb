import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-dotspager',
  imports: [],
  templateUrl: './dotspager.component.html',
  styleUrl: './dotspager.component.scss'
})
export class DotspagerComponent {
  selected:boolean=true;
  itemsPerPage=input.required<number>();
  pageChange=output<number>();
  totalItems=input.required<number>(); 
  currentPage=0;
  get pages(): number[] {
    return Array.from({ length: Math.ceil(this.totalItems() / this.itemsPerPage()) }, (_, i) => i);
  }
  onClick(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }
}
