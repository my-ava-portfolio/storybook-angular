import { Component, Input } from '@angular/core';
import { faHome, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'set-button-content',
  templateUrl: './button-content.component.html',
  styleUrls: ['./button-content.component.scss']
})
export class ButtonContentComponent {
  homeIcon= faHome
  closeIcon= faTimes
  @Input()
  colorClass: 'primary' | 'secondary' = 'primary';

  @Input()
  additionnalClasses: string = '';

  @Input()
  isSmall: boolean = false;

  @Input()
  label?: string;

  public get classes(): string[] {
    const smallButton = this.isSmall ? 'btn-sm' : ''
    const colorButton = 'btn-' + this.colorClass

    return [colorButton, smallButton, this.additionnalClasses];
  }

}
