import { Component, Input } from '@angular/core';

@Component({
  selector: 'set-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {

  @Input()
  url?: string;

  @Input()
  urlLabel?: string;

}
