import { Component } from '@angular/core';
import { SnapFaceComponent } from './snap-face/snap-face.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    SnapFaceComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
