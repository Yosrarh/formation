import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
matchUrl="http://localhost:3000/matches"
  constructor(private http:HttpClient) { }

  getAllMatches(){
    return this.http.get<{res:any}>(this.matchUrl)
  }
  addMatch(form:any){
    return this.http.post<{res:any}>(this.matchUrl,form)
  }
  delete(id:any)
  {
    return this.http.delete(this.matchUrl+'/'+id)
  }
  getMatchById(id:any){
    return this.http.get<{res:any}>(`${this.matchUrl}?id=${id}`)
  }
updateMatch(form:any){
  return this.http.put<{res:any}>(`${this.matchUrl}/${form.id}`,form)
}
}
