import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { from, Observable } from 'rxjs';
import { RoadMap } from '../home_tab/roadMap';
import { Comment, User } from './Comment';
import { CustomTranslateService } from '../shared/services/custom-translate.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentsListService {
  //urls
  private url_get_user: String = '/getUser/';
  private url_comments: String = '/getComments/';
  private avg_url: string = '/getAverageComments/';
  public comments: Array<Comment> = [];
  public user: User;

  constructor(
    private http: HttpClient,
    private router: Router,
    public alertController: AlertController,
    private nativeStorage: NativeStorage,
    private cts: CustomTranslateService
  ) {
    this.ngOnInit();
  }

  ngOnInit() {
    let acessToken = localStorage.getItem('token');
    this.http
      .get(environment.apiUrl + this.url_get_user + acessToken)
      .subscribe((data) => {
        this.user = new User(data['UserAttributes'][5].Value);
      });
  }

  public getUser(): User {
    return this.user;
  }

  public get_comments(id: Number): Array<Comment> {
    this.comments = [];
    this.http
      .get(environment.apiUrl + this.url_comments + id)
      .subscribe((data) => {
        for (let pos in data) {
          this.comments.push(
            new Comment(
              data[pos].pontuation,
              data[pos].comment,
              data[pos].roadId,
              data[pos].username
            )
          );
        }
      });
    return this.comments;
  }

  public getAverageComments(road_map_id: number): Observable<any> {
    return this.http.get<number>(environment.apiUrl + this.avg_url + 1);
  }
}
