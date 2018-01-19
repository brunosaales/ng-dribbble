import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ShotsService {

    constructor(private http: Http) { }


    getShots() {
        return this.http.get('https://api.dribbble.com/v1/shots?per_page=15&access_token=a76a821f21bd0e5f9dd065d7c9f5e19f9c97aedb8435f8c15b04b93b2295bc7c').map((res:Response) => res.json());
    }


}
