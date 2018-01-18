import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ShotsService {

  constructor(private http: Http) { }


  getShots() {
    return this.http.get('https://api.dribbble.com/v1/shots?per_page=10&access_token=c6d6ae8f82e0f0e339ff9bac3ab4b267609ebd623f3d916942aadbf01cbcad68').map((res:Response) => res.json());
  }

  getDetailShot(id){
    return this.http.get('https://api.dribbble.com/v1/shots/' + id + '?access_token=c6d6ae8f82e0f0e339ff9bac3ab4b267609ebd623f3d916942aadbf01cbcad68').map((res:Response) => res.json());
  }


}
