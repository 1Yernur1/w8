import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComments(postId: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  }
}
