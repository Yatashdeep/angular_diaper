import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;

  public AnimationBarOption;

  TitleMsg:any="Title";
  MessageMsg:any="Message Body";
  LocationMsg:any="Location";

  constructor(private _chartsService: ChartsService) { }  

  ngOnInit() {
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
  }

  onKeyTitle(event){
    if(event.target.value == ""){
      this.TitleMsg="Title";
    }
    else {
      this.TitleMsg=event.target.value;
    }
  console.log(event.target.value);
  }
   onKeyMessage(event){
       if(event.target.value == ""){
      this.MessageMsg="Message Body";
    }
    else {
      this.MessageMsg=event.target.value;
    }
    console.log(event.target.value);
  }

  onKeyLocation(event){
       if(event.target.value == ""){
      this.LocationMsg="Location";
    }
    else {
      this.LocationMsg=event.target.value;
    }
    console.log(event.target.value);
  }

}
