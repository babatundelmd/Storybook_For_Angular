import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../Model/Photo.model';

@Component({
  selector: 'app-photo-ui-card',
  templateUrl: './photo-ui-card.component.html',
  styleUrls: [ './photo-ui-card.component.css' ]
})
export class PhotoUiCardComponent implements OnInit {
  @Input() name: string;
  @Input() jobDescription: string;
  @Input() email: string;
  @Input() phone: number;
  @Input() photo: Photo;


  constructor () { }

  ngOnInit () {
  }

}
