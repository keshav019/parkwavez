import { Component } from '@angular/core';

// const Razorpay = require('razorpay');
const Razorpay: any = {}; //Added this line and commented line 3 and 15
//declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  amount!: number;
  rzp: any;
  // Razorpay = require('razorpay');

  paymentStart() {
    console.log('Payment started..');
    if (!this.amount || this.amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    // Send a request to your server to create an order
    fetch('http://localhost:8087/user/Create_Order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: this.amount }),
    })
      .then((response) => response.json())

      .then((response) => {
        console.log(response.status);
        if (response.status === 'created') {
          const options = {
            key: 'rzp_test_aPJeknHS2DZpsD',
            amount: response.amount,
            currency: 'INR',
            name: 'Parkwavez',
            description: 'Payment',
            image: '',
            order_id: response.id,
            handler: (response: {
              razorpay_payment_id: any;
              razorpay_order_id: any;
              razorpay_signature: any;
            }) => {
              console.log(response.razorpay_payment_id);
              console.log(response.razorpay_order_id);
              console.log(response.razorpay_signature);
              console.log('Payment successful!!');
              alert('Payment done successfully');
            },
            prefill: {
              name: '',
              email: '',
              contact: '',
            },
            notes: {
              address: 'PARKWAVEZ',
            },
            theme: {
              color: '#3399cc',
            },
          };
          console.log('code run till here');
          const rzp = new Razorpay();
          rzp.on(
            'payment.failed',
            function (response: {
              error: {
                code: any;
                description: any;
                source: any;
                step: any;
                reason: any;
                metadata: { order_id: any; payment_id: any };
              };
            }) {
              console.log(response.error.code);
              console.log(response.error.description);
              console.log(response.error.source);
              console.log(response.error.step);
              console.log(response.error.reason);
              console.log(response.error.metadata.order_id);
              console.log(response.error.metadata.payment_id);
              alert('Payment Failed');
            }
          );

          rzp.open();
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Something went wrong !!');
      });
  }
}
