import { Injectable } from '@angular/core';
import {HttpClient, HttpStatusCode} from '@angular/common/http';
import {CarPlate} from '../../../models/car-plate-interface';
import { Observable } from 'rxjs';
const apiURL= 'http://localhost:3333/carPlates';
@Injectable({
  providedIn: 'root'
})
export class CarPlateService {

  constructor(private httpClient:HttpClient) { }
  public CreateCarPlate(carPlate:CarPlate):Observable<CarPlate>{
    return this.httpClient.post<CarPlate>(`${apiURL}/create`,carPlate);
  }
  public UpdateCarPlate(carPlate:CarPlate):Observable<CarPlate>{
    return this.httpClient.put<CarPlate>(`${apiURL}/put/${carPlate._id}`,carPlate);
  }
  public DeleteCarPlate(id:number):Observable<Record<string,any>>{
    return this.httpClient.delete(`${apiURL}/delete/${id}`);
  }
  public GetCarPlateById(id:number):Observable<CarPlate>{
    return this.httpClient.get<CarPlate>(`${apiURL}/get/${id}`);
  }
  public GetCarPlates():Observable<CarPlate[]>{
    return this.httpClient.get<CarPlate[]>(`${apiURL}/get`);
  }
}
