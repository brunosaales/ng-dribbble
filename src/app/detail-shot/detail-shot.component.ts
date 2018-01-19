import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';


@Component({
    selector: 'app-detail-shot',
    templateUrl: './detail-shot.component.html',
    styleUrls: ['./detail-shot.component.css']
})
export class DetailShotComponent implements OnInit {


    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


    ngOnInit() {
    }

}
