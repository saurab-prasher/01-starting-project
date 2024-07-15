import { Component } from '@angular/core';
import type { InvestmentResult } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  resultsData?: {
    annualInvestment: number;
    interest: number;
    totalAmountInvested: number;
    totalInterest: number;
    valueEndOfYear: number;
    year: number;
  }[];
  onCalculateInvestmentResults(data: InvestmentResult) {
    const annualData = [];
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData = annualData;
  }
}
