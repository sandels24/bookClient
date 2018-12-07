import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';


@Injectable()
export class Services {
    configUrl = "localhost:8888/books"
    constructor(private http: HttpClient) {

     }
    addBook(name,author) {
        return this.http.get(this.configUrl+"/"+name+"/"+author);
      }
}