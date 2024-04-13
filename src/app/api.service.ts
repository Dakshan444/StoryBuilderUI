import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

 /* private apiUrl = '/assets'; // Replace this with your API endpoint

  
  constructor(private http: HttpClient) {}

    // Method to upload a file to the server
    uploadFile(file: File): Observable<any> {
        const url = '/upload'; // Replace with your server upload URL
        const formData = new FormData();
        formData.append('file', file);

        // Headers are not needed since we are sending FormData
        return this.http.post(url, formData)
            .pipe(
                catchError(this.handleError)
            );
    }

    // Error handling method
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // Client-side error
            console.error('Client-side error:', error.error.message);
        } else {
            // Server-side error
            console.error('Server-side error:', error.status, error.message);
        }
        return throwError('Something went wrong; please try again later.');
    }*/
}
