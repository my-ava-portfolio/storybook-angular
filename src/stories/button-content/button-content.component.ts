import { Component, Input } from '@angular/core';

@Component({
  selector: 'set-button-content',
  templateUrl: './button-content.component.html',
  styleUrls: ['./button-content.component.scss']
})
export class ButtonContentComponent {

  @Input()
  colorClasse: 'primary' | 'secondary' = 'primary';

  @Input()
  isSmall: boolean = false;

  @Input()
  label = 'A button';

  public get classes(): string[] {
    const smallButton = this.isSmall ? 'btn-sm' : ''
    const colorButton = 'btn-' + this.colorClasse

    return [colorButton, smallButton];
  }

}
