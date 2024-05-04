import { Component, NgZone, OnDestroy, inject  } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationToIlustrationService } from '../../../login-service/communication-to-ilustration.service';

@Component({
  selector: 'app-ilustration',
  templateUrl: './ilustration.component.html',
  styleUrl: './ilustration.component.scss'
})
export class IlustrationComponent {
  informType: any
  private informTypeSubscription: Subscription;
  private openEyesTimer: any;

  constructor( 
    private communicationService: CommunicationToIlustrationService,
    private ngZone: NgZone
  ){
    this.informTypeSubscription = this.communicationService.informType$.subscribe(informType => {
    this.informType = informType;
      
    });
  }
  
  ngOnDestroy() {
    this.informTypeSubscription.unsubscribe();
    clearTimeout(this.openEyesTimer);
  }

  hello_mouth = true
  openEyes = true

  ngOnInit() {
    this.eyes();
    // this.resetEyes();
    setTimeout(() => {
      this.hello_mouth = false
    }, 1000)

    setTimeout(() => {
      this.eyes();
    }, 3500)
  }

  eyes() {
    this.openEyes = true;
    this.openEyesTimer = this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.openEyes = false;
        });
      }, 3000);
    });
  }

  // resetEyes() {
  //   this.openEyesTimer = this.ngZone.runOutsideAngular(() => {
  //     setTimeout(() => {
  //       this.ngZone.run(() => {
  //         this.eyes()
  //       });
  //     }, 3500);
  //   });
  // }
  
}
