import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InspectionApiService {
  readonly inspectionAPIUrl = environment.inspectionAPIUrl;

  constructor(private http: HttpClient) {}

  //Inspections
  getInspectionList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/InvoiceTrans');
  }

  addInspection(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/InvoiceTrans', data);
  }

  updateInspection(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/InvoiceTrans/${id}`, data);
  }

  deleteInpection(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/InvoiceTrans/${id}`);
  }

  //Inspection Types
  getInspectionTypeList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/inspectionTypes');
  }

  addInspectionType(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/inspectionTypes', data);
  }

  updateInspectionType(id: number | string, data: any) {
    return this.http.put(
      this.inspectionAPIUrl + `/inspectionTypes/${id}`,
      data
    );
  }

  deleteInpectionType(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/inspectionTypes/${id}`);
  }

  //Statuses
  getStatusList(): Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/status');
  }

  addStatus(data: any) {
    return this.http.post(this.inspectionAPIUrl + '/status', data);
  }

  updateStatus(id: number | string, data: any) {
    return this.http.put(this.inspectionAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id: number | string) {
    return this.http.delete(this.inspectionAPIUrl + `/status/${id}`);
  }
}
