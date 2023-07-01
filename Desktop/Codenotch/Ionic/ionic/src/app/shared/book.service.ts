import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getBook(id: number): Observable<Book> {
    let url = `${this.url}/${id}`;
    return this.http.get<Book>(url);
  }

  addBook(book: Book): Observable<any> {
    return this.http.post(this.url, book);
  }

  updateBook(id: number, book: Book): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.put(url, book);
  }

  deleteBook(id_book: number): Observable<any> {
    const url = `${this.url}/${id_book}`;
    return this.http.delete(url);
  }
}