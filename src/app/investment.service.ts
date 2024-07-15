import { Injectable } from '@angular/core';
import { InvestmentResult } from './investment-results/investment-results.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  resultsData?: {
    annualInvestment: number;
    interest: number;
    totalAmountInvested: number;
    totalInterest: number;
    valueEndOfYear: number;
    year: number;
  }[];
  calculateInvestmentResults(data: InvestmentResult) {
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
