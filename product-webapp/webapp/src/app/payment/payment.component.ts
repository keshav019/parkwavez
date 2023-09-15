import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})


export class PaymentComponent {

  amount!: number;
  backendUrl = 'http://localhost:8087/user/Create_Order';
  constructor(private http: HttpClient) {}

   paymentStart() {

    this.http.post(this.backendUrl,{"amount":this.amount}).subscribe(
      (response) => {
          console.log(response);
          this.openPaymentForm(response);
      },
      error => {
        console.log(error);
      }
    );

   }
   openPaymentForm(response: any) {
    var options = {
      order_id: response.id,
      key:'rzp_test_aPJeknHS2DZpsD',
      amount: response.amount,
      currency: 'INR',
      name:'PARKWAVEZ',
      description:'Payment gateway',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE3Mcuw4UiAE-DaAbiEgy8I-KUMlljWwbpuf_XbzTJeG1GWTynmagoqsFLQhaxKxEsFwA&usqp=CAU',

      handler:(response:any) => {
        if(response!=null&& response.razorpay_payment_id!= null){
        this.processResponse(response);
        this.updatePaymentOnServer(response.razorpay_payment_id,response.razorpay_order_id,"Paid");
        }
        else{
          alert("Payment failed..");
        }
      },
      prefill:{
        name:'',
        mobile:'',
        email:'',
      },
      notes:{
        address:'Parking Booking'
      },
      theme:{
        color:'#007bff'
      }
    };
    var razorOb =new Razorpay(options);
    razorOb.open();
   }
   processResponse(resp:any){
    console.log(resp);
   }

   updatePaymentOnServer(payment_id: any, order_id: any, status: string){

    this.http.post('http://localhost:8087/user/update_order',{"payment_id":payment_id,
    "order_id":order_id,
    "status":status}).subscribe(
      (response) => {
      console.log(response);
      alert("PAID SUCCESSFULLY");
    },
    error => {
      alert("Your payment is succesful but not updated to our server")
    }
   );

   }

}
