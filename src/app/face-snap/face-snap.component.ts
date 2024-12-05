import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent  implements OnInit {
@Input() faceSnap!: FaceSnap;

title!: string;
description!: string;
createdAt!: Date;
snaps!: number;
imageUrl!: string;
snapButtonText!: string;
userHasSnapped!: boolean;

ngOnInit(): void {
  this.title ='Archibald';
  this.description = 'Mon meilleure ami depuis toujours !  ';
  this.createdAt = new Date();
  this.snaps = 0;
  this.imageUrl = 'https://cdn.futura-sciences.com/sources/images/AI-creation.jpg';
  this.snapButtonText = 'Oh Snap !!';
}
onSnaps(): void {
  if (this.userHasSnapped){
    this.unSnap();
  } else {
    this.snap();
  }}
  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
}
}

