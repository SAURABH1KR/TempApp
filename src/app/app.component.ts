import { Component } from '@angular/core';

@Component({
  selector: 'temp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Temperature Converter';
  tempInCelsius: number = 0;
  tempInFahrenheit: number = 273.15;
  tempInKelvin: number = 32;

  CalculateWhenC(): void {
    this.tempInFahrenheit = (this.tempInCelsius * 9 / 5) + 32;
    this.tempInKelvin = +this.tempInCelsius + +273.15;
    this.tempInCelsius = this.tempInCelsius;
  }

  CalculateWhenF(): void {
    this.tempInCelsius = (+this.tempInFahrenheit-32)*5/9;
    this.tempInKelvin = +this.tempInCelsius + 273.15;
  }

  CalculateWhenK(): void {
    this.tempInCelsius = +this.tempInKelvin - 273.15;
    this.tempInFahrenheit = +this.tempInCelsius * 9/5 + 32;
  }

}




