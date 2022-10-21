import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-addplayers',
  templateUrl: './addplayers.component.html',
  styleUrls: ['./addplayers.component.css']
})
export class AddplayersComponent implements OnInit {
  addPlayers: FormGroup
  players: any = {}
  
  id:any
  title:any


  constructor(private formBuilder: FormBuilder,private playservice:PlayersService,private route:Router,private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {

    this.id=this.activatedRoute.snapshot.paramMap.get("playId")
    console.log("hear id",this.id);
    if (this.id) {
      this.title="EDIT"
      this.getPlayById()
    } else {
      this.title="ADD"
    
    }

    this.addPlayers = this.formBuilder.group({
      firstname: [""],
      lastname: [""],
    })
  }
   addEditPlayer() {
    if (this.id) {
        
      console.log("heeeeeeeee",this.players);
      
      this.playservice.updatePlayer(this.players).subscribe(()=>{
        this.route.navigate(["/admin"])
      })
    } 
    else {
      console.log("here form match **********", this.players);
      let playId = JSON.parse(localStorage.getItem("matchId") || '1')
      this.players.id = playId
      this.playservice.addPlayer(this.players).subscribe((res) => {
        console.log("hereeeee res");
  
        this.route.navigate(["/admin"])
  
      })
    
    }


    // console.log("here form match ***************", this.players);
    // let playerid = JSON.parse(localStorage.getItem("playerid") || "1")
    // let plays = JSON.parse(localStorage.getItem("plays") || "[]")

    // this.players.id = playerid
    // plays.push(this.players)

    // localStorage.setItem("plays", JSON.stringify(plays))
    // localStorage.setItem("playerid", JSON.stringify(playerid + 1))


  }

  getPlayById(){
    this.playservice.getPlayerById(this.id).subscribe((res)=>{
      console.log("play by id",res);
      this.players=res[0]
      
    })


  }

}
