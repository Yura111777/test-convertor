import { Component } from '@angular/core';
import {ConvertorComponent} from "../convertor/convertor.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ConvertorComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
