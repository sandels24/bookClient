import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  authorname;
  bookname;
  publisheddate;
  constructor() { }

  ngOnInit() {
  }

  myClickFunction(event) { 

    alert("Button is clicked");
    console.log(this.authorname);
    console.log(this.bookname);
    console.log(this.publisheddate);
    
 }
}
