import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { ShotsService } from './shots.service';

import { DetailShotComponent } from '../detail-shot/detail-shot.component';


@Component({
  selector: 'app-shots',
  templateUrl: './shots.component.html',
  styleUrls: ['./shots.component.css']
})
export class ShotsComponent implements OnInit {

  detailShot: MatDialogRef<DetailShotComponent>;

  constructor( private shotsService: ShotsService, private dialog: MatDialog) { }

  shots: {}[];

  ngOnInit() {
    this.getShots();
  }

  getShots() {
   this.shotsService.getShots().subscribe(data => this.shots = data);
 }

 openShot(shot) {
   this.detailShot = this.dialog.open(DetailShotComponent, shot.id);
  }


}
