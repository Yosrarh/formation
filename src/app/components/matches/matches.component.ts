import { Component, OnInit } from '@angular/core';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
matches:any=[]
text ="matches"
term:any
constructor(private matchesService:MatchesService) { }

  ngOnInit(): void {
    //this.matches=JSON.parse(localStorage.getItem("matches")||("[]"));
    this.getAllMatches()

  }
updateMatches(x:any){
this.matches=x

}
getAllMatches(){
  this.matchesService.getAllMatches().subscribe((data)=>{this.matches=data})
}
}
