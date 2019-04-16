import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'flames';value;count=0;Name1;position=1;length;index;Name2;first;second;i;j;final_length;sum;a=['F','L','A','M','E','S'];
  find_flames(object1){
    this.Name1=object1.name1;
    this.Name2=object1.name2;
    this.first=this.Name1;
    this.second=this.Name2;
    console.log(this.first,this.second)
    for(this.i=0;this.i<this.Name1.length;this.i++){
      this.second=this.second.replace(this.Name1[this.i],'');
    }
    for(this.j=0;this.j<this.Name2.length;this.j++){
      this.first=this.first.replace(this.Name2[this.j],'');
    }
    this.sum=this.first+this.second;
    this.final_length=this.sum.length;
    console.log(this.final_length);
   

for(this.i=6;this.i>1; this.i--)
{
  	 this.value=((this.final_length%this.i)+this.position)-1;
  	if(this.value>this.i)
  	{
    	this.value=this.value%this.i;
  	}
  	if(this.value==0)
  	{
    	this.value=this.a.length;
  	}
  	this.a.splice(this.value-1,1);
  	this.position=this.value;
    console.log(this.a);
}
  
  if(this.a[0]=="F"){
    console.log("FRiends");
  }
  if(this.a[0]=="L"){
    console.log("l");
  }
  if(this.a[0]=="A"){
    console.log("affection");
  }if(this.a[0]=="M"){
    console.log("Marrriage");
  }if(this.a[0]=="E"){
    console.log("Enemy");
  }if(this.a[0]=="S"){
    console.log("Sister/brother");
  }
}

}
 /*for(this.i=0;this.i<this.a.length;this.i++){
      if(this.final_length==this.i+1){
        this.this.value=this.a[this.i];
        this.index=this.a.indexOf(this.this.value);
        this.a.splice(this.index,1);
        console.log(this.a);
        }
      }
      loop:for(this.i=0;this.i<this.a.length;this.i++){
        this.count++;
        if(this.count==this.final_length){
          this.this.value=this.a.length%6;
          this.a.length=this.a[this.this.value];
          console.log(this.this.value);
          this.index=this.a.indexOf(this.a.length);
          this.a.splice(this.index,1);
          console.log(this.a);
          if(this.a.length!=1){
            continue loop;
          }
          else {
            break;
          }
        }
      }
      console.log("out of for loop",this.a);
      if(this.a[0]=="F"){
        console.log("FRiends");
      }
      if(this.a[0]=="L"){
        console.log("l");
      }
      if(this.a[0]=="A"){
        console.log("affection");
      }if(this.a[0]=="M"){
        console.log("Marrriage");
      }if(this.a[0]=="E"){
        console.log("Enemy");
      }if(this.a[0]=="S"){
        console.log("Sister/brother");
      }
    }
    for(this.i=0;this.i<6;this.i++){
      this.this.value=(1%this.i);
      if(this.this.value<this.i){
        this.this.value=this.this.value%this.i;
      }
    }
    
    this.a.splice(this.this.value-1,1);
  
    
     loop:for(this.i=0;this.i<this.a.length;this.i++){
    console.log(this.a.length)
    this.count++;if(this.i>=this.a.length && this.a.length!=1){
      this.i=0;continue loop;
    }
    else if(this.count==this.final_length){
      this.this.value=this.a[this.i];
        this.index=this.a.indexOf(this.this.value);
        this.a.splice(this.index,1);this.count=0;
        console.log(this.a)
      console.log(this.a.length)
    }
        
 if(this.a.length!=1 && this.i>this.a.length){
    this.i=0;
     continue loop;
  }
  else if(this.a.length!=1  && this.i<this.a.length){
    continue loop;
  }
  
    else{
      this.i=0;this.count=0;
      continue loop;
    
  }
}
 if(this.a.length==1){
    
  switch(this.a[0]){
    case 'F':
    console.log("friends");
    break;
    case 'L':
    console.log("l");
    break;
    case 'A':
    console.log("A");
    break;
    case 'M':
    console.log("M");
    break;
    case 'E':
    console.log("E");
    break;
    case 'S':
    console.log("S");
    break;
    default:
    console.log("wrong answer");
  }
}*/


