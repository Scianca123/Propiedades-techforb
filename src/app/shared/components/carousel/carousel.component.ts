import { Component, input } from '@angular/core';
import { DotspagerComponent } from '../dotspager/dotspager.component';
import { CardComponent } from '../card/card.component';
import { Property } from '../../../features/properties/interfaces/property';

@Component({
  selector: 'app-carousel',
  imports: [DotspagerComponent,CardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  properties=input.required<Property[]>();
  visibleProperties: Property[] = [];
  itemsPerPage: number = 1;
  currentPage: number = 1;

  ngOnChanges(): void {
    this.updateVisibleProperties();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateVisibleProperties();
  }

  private updateVisibleProperties(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.visibleProperties = this.properties().slice(startIndex, startIndex + this.itemsPerPage);
  }
}
