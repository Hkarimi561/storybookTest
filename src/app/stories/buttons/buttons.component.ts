import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'Buttons',
  imports: [
    NgClass
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Input()
  type:'default'|'neutral'|'primary'|'secondary'|'accent'|'ghost' |'link' = 'default';

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  disabled: boolean = false;

  @Input()
  outline: boolean = false;

  @Input()
  loading: boolean = false;

  @Input()
  loadingText: string = 'Loading';

  @Input()
  wide: boolean = false;

  @Input()
  label = 'Button';
  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const outline = this.outline ? 'outline' : '';
    const wide = this.wide ? 'wide' : '';
    const disabled = this.disabled ? 'disabled' : '';
    const loading = this.loading ? 'disabled' : '';
    return ['button',this.size,outline,wide,`${this.type}`,disabled,loading];
  }
}
