import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarPlate} from '../../../car-plate-interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarPlateService {
  apiURL= 'http://localhost:3333/carPlates';
  constructor(private httpClient:HttpClient) { }
  public CreateCarPlate(carPlate:CarPlate):Observable<CarPlate>{
    return this.httpClient.post<CarPlate>(`${this.apiURL}/create`,carPlate);
  }
  public UpdateCarPlate(carPlate:CarPlate):Observable<CarPlate>{
    return this.httpClient.put<CarPlate>(`${this.apiURL}/put/${carPlate._id}`,carPlate);
  }
  public DeleteCarPlate(id:number){
    return this.httpClient.delete(`${this.apiURL}/delete/${id}`);
  }
  public GetCarPlateById(id:number):Observable<CarPlate>{
    return this.httpClient.get<CarPlate>(`${this.apiURL}/get/${id}`);
  }
  public GetCarPlates():Observable<CarPlate[]>{
    return this.httpClient.get<CarPlate[]>(`${this.apiURL}/get`);
  }
}
