import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  playerUrl="http://localhost:3000/players"
  constructor(private http:HttpClient) { }

  getAllPlayers(){
    return this.http.get<{res:any}>(this.playerUrl)
  }
  addPlayer(form:any){
    return this.http.post<{res:any}>(this.playerUrl,form)
  }
  delete(id:any)
  {
    return this.http.delete(this.playerUrl+'/'+id)
  }
  getPlayerById(id:any){
    return this.http.get<{res:any}>(`${this.playerUrl}?id=${id}`)
  }
updatePlayer(form:any){
  return this.http.put<{res:any}>(`${this.playerUrl}/${form.id}`,form)
}
}