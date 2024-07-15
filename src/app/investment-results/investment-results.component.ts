import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

interface result {
  annualInvestment: number;
  interest: number;
  totalAmountInvested: number;
  totalInterest: number;
  valueEndOfYear: number;
  year: number;
}

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultsData;
  }
}
