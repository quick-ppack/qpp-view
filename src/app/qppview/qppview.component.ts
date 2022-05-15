import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-qppview',
  templateUrl: './qppview.component.html',
  styleUrls: ['./qppview.component.scss']
})
export class QPPViewComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  async upload_selected(event: any)
  {
    const files = event.target.files;

    console.log(files);
  //  let b = await this.http.get("http://localhost:5084/api/qpp/download/ab");
  const formData = new FormData();
    let progress = 0;
  for (const file of files) {
    formData.append(file.name, file);
  }

  formData.set("Name", "testName");
  formData.set("Author", "testAuthor");
  formData.set("ShortDescription", "testDesc");
  formData.set("LongMD5Description", "longDesc");

const uploadReq = new HttpRequest('POST', "https://localhost:7234/api/qpp/upload", formData, {
  reportProgress: true,
});

this.http.request(uploadReq).subscribe(event => {
  if (event.type === HttpEventType.UploadProgress) {
    progress = Math.round(100 * event.loaded / event.total!);
    console.log(progress);
  };
});

  }

  async upload()
  {
    let b = (this.http.get<string>("https://localhost:7234/api/qpp/download/ab")).subscribe();
    console.log(b);
  }

}
