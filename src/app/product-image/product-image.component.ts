import { Product } from '../product.model';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';


}
