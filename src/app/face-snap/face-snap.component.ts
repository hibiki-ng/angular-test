import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = 'Jean-Michel Jarre';
    this.description = 'Le célèbre artiste de reggaeton';
    this.createdDate = new Date();
    this.snaps = 123;
    this.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Jean_Michel_Jarre_B10-2016.jpg/800px-Jean_Michel_Jarre_B10-2016.jpg';
    this.buttonText = 'Add Snap';
  }

  onSnap() {
    if (this.buttonText === 'Add Snap') {
      this.snaps++;
      this.buttonText = 'Unsnap';
    } else {
      this.snaps--;
      this.buttonText = 'Add Snap';
    }
  }
}
