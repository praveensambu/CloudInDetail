import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IContact } from './models/contact.model';
const contactUrl = 'https://44g0u4ha5j.execute-api.us-east-1.amazonaws.com/Dev/contact';

@Injectable({
  providedIn: 'root'
})
export class AwsService {
  constructor(private _httpService: HttpClient) { }

  public getcontacts(): Observable<any> {
     return this._httpService.get<any>(contactUrl);
 }

 public addContact(contact: IContact): Observable<any> {
  return this._httpService.post<IContact>(contactUrl, contact);
 }
}
