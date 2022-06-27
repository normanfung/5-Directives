import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images: Array<{
    description: string | undefined;
    url: number;
  }>;

  imagesLength = 0;

  constructor() {
    (async () => {
      let response = await fetch(
        'https://api.unsplash.com/photos/?client_id=xeHapo1tJJrHk_CeLYQrWBPdazY8RnIWskJswvFbp3I'
      );
      const images = await response.json();
      this.images = [];
      for (let { description, urls } of images) {
        let title = description ? description : 'Untitled';
        this.images.push({ description: title, url: urls.full });
      }
      this.imagesLength = this.images.length;
    })();
  }

  showItem(i: number) {
    return Math.abs(this.currentPage - i) < 5;
  }
}
