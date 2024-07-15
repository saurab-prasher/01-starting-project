import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() results?: result[];
}
