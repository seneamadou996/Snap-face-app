import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-snap-face',
  standalone: true,
  imports: [],
  templateUrl: './snap-face.component.html',
  styleUrl: './snap-face.component.scss'
})
export class SnapFaceComponent implements OnInit {

  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
    this.title = 'Archibald';
    this.description = "C'est un ami de tout petit !";
    this.createdAt = new Date();
    this.snaps = 6;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2022/06/08/15/21/artist-7250697_640.jpg'
  }

}
