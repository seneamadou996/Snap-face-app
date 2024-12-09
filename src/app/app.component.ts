import {Component, OnInit} from '@angular/core';
import { SnapFaceComponent } from './snap-face/snap-face.component';
import {SnapFace} from "./model/SnapFace";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    SnapFaceComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  snapFace!: SnapFace;
  myOtherSnap!: SnapFace;
  myLastSnap!: SnapFace;

  ngOnInit() {
    this.snapFace = {
      title : 'Archibald',
      description : 'C\'est un ami de tout petit !',
      createdAt: new Date(),
      snaps: 6,
      imageUrl: 'https://cdn.pixabay.com/photo/2022/06/08/15/21/artist-7250697_640.jpg'
    };
    this.myOtherSnap = {
      title : 'Three rock mountain',
      description : 'Un endroid magnifique pour les rendonées.',
      createdAt: new Date(),
      snaps: 4,
      imageUrl: 'https://cdn.pixabay.com/photo/2023/05/28/09/21/south-tyrol-8023213_1280.jpg'
    };
    this.myLastSnap = {
      title : 'Un bon repas',
      description : 'Mmmh que c\'est bon.',
      createdAt: new Date(),
      snaps: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2014/05/03/14/21/meals-337073_1280.jpg'
    };
  }

}
