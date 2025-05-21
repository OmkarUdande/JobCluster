import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css']
})
export class PaymentsuccessComponent implements OnInit {
  paymentDetails: any = {};

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.paymentDetails = {
        transactionId: params['transactionId'],
        amount: params['amount'],
        paymentDate: params['paymentDate'],
        status: params['status'],
        message: params['message'],
        courseTitle: params['courseTitle'],
        coursePrice: params['coursePrice']
      };
    });

    console.log("Payment Details:", this.paymentDetails);
  }

  goBack() {
    this.router.navigate(['/courses']);
  }
}
