import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

import { CalculatorPage } from "../calculator/calculator";

import {HeightConverterPage} from "../height-converter/height-converter";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  calculatorTab = CalculatorPage;
  aboutTab = AboutPage;
  heightConverterTab = HeightConverterPage

  constructor() {

  }
}
