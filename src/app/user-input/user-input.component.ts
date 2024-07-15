import { Component } from '@angular/core';

import { InvestmentService } from '../investment.service';

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

  constructor(private investmentService: InvestmentService) {}

  onFormSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturnValue,
      duration: +this.duration,
    });
    // this.calculate.emit({
    //   initialInvestment: +this.initialInvestment,
    //   annualInvestment: +this.annualInvestment,
    //   expectedReturn: +this.expectedReturnValue,
    //   duration: +this.duration,
    // });
  }
}
