import { Component, OnInit } from '@angular/core';
import { IonicSharedModule } from 'src/app/modules/ionic-shared/ionic-shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpVerificationComponent } from "../otp-verification/otp-verification.component";
import { TwoStepProcessStatus } from 'src/app/utils/enums';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicSharedModule, OtpVerificationComponent],
  providers: [AuthService]  // Ensure AuthService is provided here

})
export class LoginComponent implements OnInit {
  step = TwoStepProcessStatus.LoginInitiated;
  OTP = 0;
  // token = '';
  mobileForm: FormGroup;
  mobileNumber: string = '';
  userId: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastController : ToastController
  ) {
    this.mobileForm = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });


  }

  async presentToast(position: 'top' | 'bottom', message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }


  handleMobileSubmit() {
    if (this.mobileForm.valid) {
      this.mobileNumber = this.mobileForm.value.mobileNumber.toString();
      this.authService.login(this.mobileForm.value).subscribe((data) => {
        if (data.otp !== '0') {
          this.presentToast('bottom', 'OTP sent succesfully')
          this.OTP = data.otp;
          this.userId = data.userId
          this.step = TwoStepProcessStatus.OTPVerified;

          //     this.step = 2;
          //     localStorage.setItem('Phone', this.mobileForm.value.mobileNumber.toString())
          //     localStorage.setItem('authToken', this.token.toString())
          //     localStorage.setItem('userId', this.userId.toString())
          //     // this.showSnackbar('OTP Sent Succesfully');
          //   } else {
          //     // this.showSnackbar('Invalid User')
        }
        else{
          this.presentToast('bottom', 'Invalid User')
        }
      })
    }

  }

  handleOtpSubmit() {
    // if (this.otpForm.valid) {
    //   if (this.otpForm.value.otp == '000000') {
    //     this.router.navigate(['/dashboard']);
    //   } else {
    //     alert('OTP is not valid')
    //   }
    // }

    if (this.mobileForm.valid) {
      // let Obj = {
      //   Phone: localStorage.getItem('Phone'),
      //   Otp: this.OTP
      // }
      // this.commonService.verifyOtp(Obj).subscribe((data) => {
      //   if (data.data) {
      //     this.router.navigate(['/dashboard']);
      //   }
      //   else {
      //     // this.showSnackbar('Invalid OTP');
      //   }
      // })
    };
  }

  ngOnInit() { }

}
