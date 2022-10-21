import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
@Input() matchInput :any
@Output() newMatches=new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }
  delete(id:any)
  {  let matches=JSON.parse(localStorage.getItem("matches")|| '[]')
     let pos 
     for (let i=0; i<matches.length;i++)
     {
      if(matches[i].id==id)
      pos=i
     }

     matches.splice(pos,1)
     localStorage.setItem("matches",JSON.stringify(matches))
     this.newMatches.emit(matches)
  }
  compare(a:any,b:any){
    if(a>b){return ["green" ,"Win"]}
    if(a<b){return ["red","Loss"]}
    else {return ["yellow","Draw"]}
  }
}
