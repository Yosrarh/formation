import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-addmatch',
  templateUrl: './addmatch.component.html',
  styleUrls: ['./addmatch.component.css']
})
export class AddmatchComponent implements OnInit {
  addMatchForm: FormGroup
  match: any = {}
  id:any
  title:any

  constructor(private formBuilder: FormBuilder,private matchService:MatchesService,private route:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get("matchId")
    console.log("hear id",this.id);
    if (this.id) {
      this.title="EDIT"
      this.getMatchById()
    } else {
      this.title="ADD"
    
    }
    this.addMatchForm = this.formBuilder.group({
      teamone: [""],
      teamtwo: [""],
      scoreone: [""],
      scoretwo: [""],
    })
  }
 
    // let matchId = JSON.parse(localStorage.getItem("matchId") || "1")
    // this.match.id = matchId

    addEditMatch() {

      if (this.id) {
        
        console.log("heeeeeeeee",this.match);
        
        this.matchService.updateMatch(this.match).subscribe(()=>{
          this.route.navigate(["/admin"])
        })
      } 
      else {
        console.log("here form match **********", this.match);
        let matchId = JSON.parse(localStorage.getItem("matchId") || '1')
        this.match.id = matchId
        this.matchService.addMatch(this.match).subscribe((res) => {
          console.log("hereeeee res");
    
          this.route.navigate(["/admin"])
    
        })
      
      }
   
      // 
      // let matches= JSON.parse(localStorage.getItem("matches")|| '[]')
  
      // this.match.id=matchId
      // matches.push(this.match)
  
      // localStorage.setItem("matches", JSON.stringify(matches) )
      // localStorage.setItem("matchId", JSON.stringify(matchId+1) )
  
  
    }
  
  
    getMatchById(){
      this.matchService.getMatchById(this.id).subscribe((res)=>{
        console.log("match by id",res);
        this.match=res[0]
        
      })
    }}