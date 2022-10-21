import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matches:any
  players:any
  constructor(private matchesService:MatchesService,private route:Router,private playerService:PlayersService) { }

  ngOnInit(): void {
    this.getAllMatches()
    this.getAllPlayers()
    
    
    // this.matches=JSON.parse(localStorage.getItem("matches")|| '[]')
    // this.players=JSON.parse(localStorage.getItem("plays") || '[]')
    // console.log('********',this.players);

    
  }

  delete(id:any)

  {
    //  let pos 
    //  for (let i=0; i<this.matches.length;i++)
    //  {
    //   if(this.matches[i].id==id)
    //   pos=i
    //  }

    //  this.matches.splice(pos,1)
    //  localStorage.setItem("matches",JSON.stringify(this.matches))
    this.matchesService.delete(id).subscribe(()=>{
      this.getAllMatches()

    });
  }



  deleteplayers(id:any)
  {
    //  let pos 
    //  for (let i=0; i<this.players.length;i++)
    //  {
    //   if(this.players[i].id==id)
    //   pos=i
    //  }

    //  this.players.splice(pos,1)
    //  localStorage.setItem("players",JSON.stringify(this.players))
    this.playerService.delete(id).subscribe(()=>{this.getAllPlayers()})
  }

getAllMatches(){
  this.matchesService.getAllMatches().subscribe((data)=>{this.matches=data})
}
getAllPlayers(){
  this.playerService.getAllPlayers().subscribe((data)=>{this.players=data})
}

navigate(id:any){
  this.route.navigate([`editmatch/${id}`])
}
navigater(id:any){
  this.route.navigate([`editplayers/${id}`])
}



}
