import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http'
import{Album} from './album';
import'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from 'selenium-webdriver/http';
@Injectable()
export class ProductService {
  private _albumUrl:string='../assets/album.json';
  constructor(private _http:Http) { }

  getAlbum(id:number):Observable<Album>{
    let alb:Album;
    
    return this._http.get(this._albumUrl).map(response=><Album>response.json()) as Observable<Album>;
  }

}
