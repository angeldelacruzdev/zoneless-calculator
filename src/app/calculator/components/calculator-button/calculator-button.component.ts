import { ChangeDetectionStrategy, Component, ElementRef, input, output, signal, viewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'calculator-button',
  standalone: true,
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDobleSize()',
    '[class.w-1/4]': '!isDobleSize()'
  },
  encapsulation: ViewEncapsulation.None
})
export class CalculatorButtonComponent {
  public isPressed = signal(false)
  public onClick = output<string>()
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  public isCommand = input(false, {
    transform: (value: boolean | string) => typeof value === 'string' ? value === '' : value
  })

  public isDobleSize = input(false, {
    transform: (value: boolean | string) => typeof value === 'string' ? value === '' : value
  })


  handleClick() {
    if (!this.contentValue()?.nativeElement) return;

    const value = this.contentValue()?.nativeElement.innerText;

    this.onClick.emit(`${value?.trim()}`)
  }

  public keyBoardPressedStyle(key: string) {
    console.log(this.contentValue())
    if (!this.contentValue()) return;

    const value = this.contentValue()!.nativeElement.innerText;

    if (value != key) return;

    this.isPressed.set(true);

    setTimeout(() => {
      this.isPressed.set(false);
    }, 100)

  }
}
