import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicSharedModule } from 'src/app/modules/ionic-shared/ionic-shared.module';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  standalone : true,
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss'],
  imports : [IonicSharedModule]
})
export class OtpVerificationComponent  implements OnInit {
  token: string = '';
  otpForm: FormGroup;
  @Input() mobileNumber : string = '';

  constructor(
    private fb: FormBuilder,
    private authService : AuthService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]]
    });
  }

  ngOnInit() { }

  async presentToast(position: 'top' | 'bottom', message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

  handleOtpSubmit() {
    if (this.otpForm.valid) {
      let Obj = {
        Phone: localStorage.getItem('Phone'),
        Otp: this.otpForm.value.otp.toString()
      }
      this.authService.verifyOtp(Obj).subscribe((data) => {
        if (data.statusCode == 200) {
          this.token = data.data;
          this.router.navigate(['/dashboard']);
        }
        else {
           this.presentToast('bottom', 'Invalid OTP');
        }
      })
    }
  }
}
