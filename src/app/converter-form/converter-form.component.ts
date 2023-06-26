
import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.css']
})
export class ConverterFormComponent {
  amount: number | undefined;
  fromCurrency: string | undefined;
  toCurrency: string = ''; ;
  convertedAmount: number | undefined;

  convertCurrency() {
    const apiKey = 'f20f3a09454ba29be43b9f9b66bf512e'; // Replace with your actual API key
    const apiUrl = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&base=${this.fromCurrency}&symbols=${this.toCurrency}`;

    axios.get(apiUrl)
      .then(response => {
        const rate = response.data.rates[this.toCurrency];
        if (this.amount && rate) {
          this.convertedAmount = this.amount * rate;
        } else {
          this.convertedAmount = undefined;
        }
      })
      .catch(error => {
        console.error('Error fetching conversion rates:', error);
        this.convertedAmount = undefined;
      });
  }
}
