import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentResult } from '../investment-results/investment-results.model';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturnValue: number = 5;
  duration: number = 10;
  @Output() calculate = new EventEmitter<InvestmentResult>();

  onFormSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturnValue,
      duration: +this.duration,
    });
  }
}
