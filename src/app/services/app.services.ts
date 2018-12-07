import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {Book} from '../main/form/book';


@Injectable()
export class Services {
    configUrl = "http://localhost:8888/books"
    constructor(private http: HttpClient) {
    }
    addBook(name,author,publisheddate) {
        return this.http.get(this.configUrl+"/"+name+"/"+author+"/"+publisheddate);
    }
    getbooks() {
        return this.http.get<Book[]>(this.configUrl+"/");
    }
}