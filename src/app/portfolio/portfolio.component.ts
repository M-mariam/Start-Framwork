import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  isClicked: boolean = false;
  imgSrc: string = ""
  open(src: string){
    this.imgSrc = src;
    this.isClicked = true;
  }
  close(){
    this.isClicked = false;
  }
}

