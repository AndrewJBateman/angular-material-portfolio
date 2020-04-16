import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Angular SEO Integration, blog CRUD, contact, projects, portfolio' },
      { name: 'robots', content: 'index' },
      { name: 'author', content: 'Andrew Bateman' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2019-04-16', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' }
    ]);
  }

}
