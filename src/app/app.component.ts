import { Component } from '@angular/core';
import { isNumber } from 'util';
import { parse } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment1';

  val1;
  val2;
  val3;
  val4;
  flag:boolean = true;
  numbers = [0,1,2,3,4,5,6,7,8,9];
  opr = ['+','-','/','*'];

  constructor() {
    console.log("val1 ", this.val1);
    console.log("val2 ", this.val2);
    console.log("val3 ", this.val3);
    console.log("val4 ", this.val4);
   }

   operation($event) {
      if(this.numbers.includes(parseInt($event.target.value))) {
        if(this.flag) { 
          this.val1 = parseInt($event.target.value);
          this.flag = false;
        }
        else {
          this.val3 = parseInt($event.target.value);
          this.flag = true;
        }
      }

      else if(this.opr.includes($event.target.value)) {
        this.val2 =  $event.target.value;
      }
      
      else if($event.target.value=="=") {
          if(this.val2 == "+") this.val4 = this.addition(this.val1, this.val3);
          else if(this.val2 == "-") this.val4 = this.minus(this.val1, this.val3);
          else if(this.val2 == "/") this.val4 = this.divide(this.val1, this.val3);
          else if(this.val2 == "*") this.val4 = this.multiply(this.val1, this.val3);
      }
      else if($event.target.value=="C") { {
        this.val1 = "";
        this.val2 = "";
        this.val3 = "";
        this.val4 = "";
        this.flag = true;                        
      }
    }  
   }


   addition(intVal1, intVal2) {
     return parseInt(intVal1) + parseInt(intVal2);
   }

   multiply(intVal1, intVal2) { 
    return parseInt(intVal1) * parseInt(intVal2);
   }

  divide(intVal1, intVal2) {
    if(intVal2 == 0 ) return 'infinite';
    return Math.round(parseFloat(intVal1) / parseFloat(intVal2));
  }

  minus(intVal1, intVal2) {
    return parseInt(intVal1) - parseInt(intVal2);
  }

}
