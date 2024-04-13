import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  

  title = 'VirtusaStoryBuilder';
  Functionality: any;
  UserStories: any;
  url = '/assets/userstories.json';
  url2 = '/assets/userstories.json';
  selectedFileName: string | null = null; // To hold the selected file name

  constructor(private http: HttpClient) {}

  // OnInit lifecycle hook
  ngOnInit(): void {
    // Fetch functionality data
    this.http.get(this.url).subscribe(res => {
      this.Functionality = res;
    });

    // Fetch user stories data
    this.http.get(this.url2).subscribe(res => {
      this.UserStories = res;
    });
  }

  // Handle file selection
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name; // Update selected file name
    } else {
      this.selectedFileName = null; // Reset selected file name if no file is selected
    }
  }

  // Handle file submission
  onSubmit(): void {
    if (this.selectedFileName) {
      console.log(`Submitting the selected file: ${this.selectedFileName}`);
      // Add your logic here for handling file submission and generating a story
      // This could include sending the file to a server or processing it locally
    } else {
      console.log('No file selected for submission.');
    }
  }

  // Navigation function
  navigateTo(route: string): void {
    console.log(`Navigating to: ${route}`);
    // Add your logic here for navigating to different routes
  }

  // Trigger file input
  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click(); // Trigger the file input click
    }
  }

  // Function to retrieve object keys
  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  // Function to retrieve object values
  getObjectValues(obj: any): any[] {
    return Object.entries(obj);
  }
}