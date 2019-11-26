import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pointofsale',
  templateUrl: './pointofsale.component.html',
  styleUrls: ['./pointofsale.component.css'],
  inputs: ['parentData']
})
export class PointofsaleComponent{
  public parentData: string;
  show = false;
  shows = false;
  showed = false;
  toggleShow(){
    this.show = !this.show;
  }

  result: string = '';
  result1: string = '';
  order: string = 'Order Summary \n\n';
  longButtons: string[] = ['Clear'];
  pays: string[] = ['Pay'];
  news: string[] = ['New'];
  button13s: string[] = ['1','2','3'];
  button46s: string[] = ['4','5','6'];
  button79s: string[] = ['7','8','9'];
  parent: string;
  displayparent: string='\n\nPayment ';
  displaychange: string='\n\nChange: ';
  
  private prevValue: string = '';
  private curValue: string = '';

  calculate(value: string){
    if(value=='Pay'){
      this.displaychange = '\n\nChange: ';
      this.displayparent = '\n\nPayment ';
      this.displayparent +=this.parentData;
      this.parent=this.parentData;
      this.parent +='-';
      this.parent += this.result;
      this.parent = eval(this.parent);
      this.displaychange +=this.parent;
      if(this.parent>'0'){
        this.shows = true;
        this.showed = false;
      }else{
        this.showed = true;
        this.shows = false;
      }
    }
  }

  addToExpression(value: string){
    
    if(value=='1'){this.result1 += 'Item '+value+' x 1 @ ';value='10'}if(value=='2'){this.result1 += 'Item '+value+' x 1 @ ';value='20'}if(value=='3'){this.result1 += 'Item '+value+' x 1 @ ';value='30'}
    if(value=='4'){this.result1 += 'Item '+value+' x 1 @ ';value='40'}if(value=='5'){this.result1 += 'Item '+value+' x 1 @ ';value='50'}if(value=='6'){this.result1 += 'Item '+value+' x 1 @ ';value='60'}
    if(value=='7'){this.result1 += 'Item '+value+' x 1 @ ';value='70'}if(value=='8'){this.result1 += 'Item '+value+' x 1 @ ';value='80'}if(value=='9'){this.result1 += 'Item '+value+' x 1 @ ';value='90'}
    if(this.result !=''){
      this.prevValue = this.curValue;
      this.curValue = value;
      this.result += '+';
    }

    if(value =='Clear' || value =='New'){
      this.show = false;
      this.shows = false;
      this.showed = false;
      this.result = '';
      this.result1 = '';
      this.parent = '';
      this.displaychange = '\n\nChange: ';
      this.displayparent = '\n\nPayment ';
    }else{
      this.result += value;
      this.result1 += value;
      this.result1 += '\t'+value+'.00php';
      this.result1 += '\n';
      this.result = eval(this.result);
    }

  }
}
