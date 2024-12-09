import {Component, Input, OnInit} from '@angular/core';
import {SnapFace} from "../model/SnapFace";

@Component({
  selector: 'app-snap-face',
  standalone: true,
  imports: [],
  templateUrl: './snap-face.component.html',
  styleUrl: './snap-face.component.scss'
})
export class SnapFaceComponent implements OnInit {

  buttonText!: string;

  @Input()
  snapFace!: SnapFace;

  ngOnInit() {
    this.buttonText = 'Oh snaps !';
  }

  onSnaps() {
    if (this.buttonText === 'Oh snaps !') {
      this.snapFace.snaps++;
      this.buttonText = 'Oops, unsnaps !';
    } else {
      this.snapFace.snaps--;
      this.buttonText = 'Oh snaps !'
    }
  }

}
