import { ChangeDetectionStrategy, Component, HostBinding, input, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400'
  }
})
export class CalculatorButtonComponent implements OnInit {
  public isCommand = input(false, {
    transform: (value: boolean | string) => typeof value === 'string' ? value === '' : value
  })

  ngOnInit(): void {

  }

  @HostBinding('class.bg-indigo-700') get commandStyle() {
    return this.isCommand()
  }


}
