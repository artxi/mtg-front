import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetService {

  constructor(private httpClient: HttpClient) { }

  getSets() {
    return this.httpClient.get('http://localhost:3000/sets')
  }
}
