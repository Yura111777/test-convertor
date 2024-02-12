import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { CurrencyResponse } from '../../interfaces/currency-response';
import { FormsModule } from '@angular/forms';
import { ionRefresh } from '@ng-icons/ionicons';
import { NgIcon, NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-convertor',
  standalone: true,
  imports: [FormsModule, NgIcon, NgIconComponent],
  providers: [
    provideIcons({
      ionRefresh,
    }),
  ],

  templateUrl: './convertor.component.html',
  styleUrl: './convertor.component.scss',
})
export class ConvertorComponent implements OnInit {
  currency: CurrencyResponse[] = [];
  selectInput = '1';
  selectOutput = '1';
  valInput = 0;
  valOutput = 0;
  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.getCurrency().subscribe((res) => {
      this.currency = res;
    });
  }

  convert(val: number, type: string): void {
    if (type === 'input') {
      this.valInput = val;
      this.valOutput =
        (parseInt(this.selectInput) / parseInt(this.selectOutput)) *
        this.valInput;
    } else {
      this.valOutput = val;
      this.valInput =
        (parseInt(this.selectOutput) / parseInt(this.selectInput)) *
        this.valOutput;
    }
  }

  changeConvert(type: string): void {
    if (type === 'input') {
      this.valOutput =
        (parseInt(this.selectInput) / parseInt(this.selectOutput)) *
        this.valInput;
    } else {
      this.valInput =
        (parseInt(this.selectOutput) / parseInt(this.selectInput)) *
        this.valOutput;
    }
  }

  protected readonly Number = Number;
}
