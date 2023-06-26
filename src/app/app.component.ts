import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  amount: number | undefined;
  fromCurrency: string | undefined;
  toCurrency: string = "";
  convertedAmount: number | undefined;

  convertCurrency() {
    const apiKey = '84cfa917014976eb5bf98908'; // Replace with your actual API key
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${this.fromCurrency}/${this.toCurrency}/${this.amount}`;

    axios.get(apiUrl)
    .then(response => {
      const rates = response.data.rates;
      const rate = rates[this.toCurrency];
      if (rate) {
        this.convertedAmount = (this.amount ?? 0) * rates[this.toCurrency];
      } else {
        console.error('Invalid currency conversion rate');
        this.convertedAmount = undefined;
      }
    })
    .catch(error => {
      console.error('Error fetching conversion rates:', error);
      this.convertedAmount = undefined;
    });
}
}