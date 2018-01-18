import { Component, OnInit } from '@angular/core';

import { ShotsService } from '../shots/shots.service';

@Component({
  selector: 'app-detail-shot',
  templateUrl: './detail-shot.component.html',
  styleUrls: ['./detail-shot.component.css']
})
export class DetailShotComponent implements OnInit {

  constructor(private shotsService: ShotsService) { }

  shot: {}[];

  ngOnInit() {
    this.getDetailShot();
  }


  getDetailShot() {
    // this.shotsService.getDetailShot().subscribe(data => this.shot = data);
  }
}
