import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle',
})
export class FormatTitlePipe implements PipeTransform {
  transform(value: string): string {
    // Converte o texto para título (primeira letra maiúscula em cada palavra)
    return value
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (firstChar) => firstChar.toUpperCase());
  }
}
