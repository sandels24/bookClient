import { Component, OnInit } from '@angular/core';
import {Services} from '../../services/app.services'
import {Book} from './book';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers : [Services]
})
export class FormComponent implements OnInit {

  authorname;
  bookname;
  publisheddate;
  created;
  books = [];
  show = false;

  constructor(private service : Services) { }

  ngOnInit() {
  }

  myClickFunction(event) {
    this.show = false;
    console.log(this.authorname);
    console.log(this.bookname);
    console.log(this.publisheddate);
    this.service.addBook(this.bookname,this.authorname,this.publisheddate).subscribe(data => this.created="Book Created");
 }

 showAllBooks(){

  this.service.getbooks().subscribe(data => { 
    this.books = [];
    data.forEach(element => {
      this.books.push(element);
    });
    this.show = true;
    console.log(this.books);
  });
 }
}
