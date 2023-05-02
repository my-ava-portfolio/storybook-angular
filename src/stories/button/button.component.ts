import { Component, Input } from '@angular/core';

@Component({
  selector: 'set-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

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
