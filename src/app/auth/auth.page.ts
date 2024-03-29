import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authSercice:AuthserviceService,
    private storage:StorageService) { }

  ngOnInit() {
      // this.storage.setItem("token","jhghjghj");
      this.storage.clearStore();
  }

}
