import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Book } from './Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private booksUrl = 'api/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      map((data) => {
        console.log(JSON.stringify(data));
        return data;
      }),
      catchError(this.handleError)
    );
  }

  getMaxBookId(): Observable<Book> {
    return this.http.get<Book[]>(this.booksUrl).pipe(
      // Get max value from an array
      map((data) =>
        Math.max.apply(
          Math,
          data.map(function (o) {
            return o.id;
          })
        )
      ),
      catchError(this.handleError)
    );
  }

  getBookById(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      tap((data) => console.log('getBook: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  createBook(Book: Book): Observable<Book> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    Book.id = null;
    return this.http.post<Book>(this.booksUrl, Book, { headers: headers }).pipe(
      tap((data) => console.log('createBook: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  deleteBook(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete<Book>(url, { headers: headers }).pipe(
      tap((data) => console.log('deleteBook: ' + id)),
      catchError(this.handleError)
    );
  }

  updateBook(Book: Book): Observable<Book> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.booksUrl}/${Book.id}`;
    return this.http.put<Book>(url, Book, { headers: headers }).pipe(
      tap(() => console.log('updateBook: ' + Book.id)),
      // Return the Book on an update
      map(() => Book),
      catchError(this.handleError)
    );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
