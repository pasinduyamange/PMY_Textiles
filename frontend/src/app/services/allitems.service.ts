import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import {
  ALLITEMS_URL, ALLITEMS_BY_SEARCH_URL, ALLITEMS_BY_TAG_URL, ALLITEMS_BY_ID_URL
} from '../shared/constants/urls';
import { Allitems } from '../shared/models/Allitems';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class AllitemsService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Allitems[]> {
    return this.http.get<Allitems[]>(ALLITEMS_URL);
  }

  getAllitemsBySearchTerm(searchTerm: string) {
    return this.http.get<Allitems[]>(ALLITEMS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(ALLITEMS_BY_TAG_URL);
  }

  getAllItemsByTag(tag: string): Observable<Allitems[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Allitems[]>(ALLITEMS_BY_TAG_URL + tag);
  }

  getAllitemById(itemId:string):Observable<Allitems>{
    return this.http.get<Allitems>(ALLITEMS_BY_ID_URL + itemId);
  }

}
