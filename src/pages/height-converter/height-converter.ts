import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {CalculatorPage} from "../calculator/calculator";

/**
 * Generated class for the HeightConverterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-height-converter',
  templateUrl: 'height-converter.html',
})
export class HeightConverterPage {

  inch: number = null;
  foot: number = null;
  cm: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeightConverterPage');
  }


  convert() {

    if (this.foot > 0) {
      var tempCM = ((this.foot * 30.48) + (this.inch * 2.54)).toFixed(2);
      this.cm = parseFloat(tempCM);
      this.events.publish('heightCalc', {cm:this.cm});
    }
  }

}
