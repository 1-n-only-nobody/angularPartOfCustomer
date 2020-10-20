import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  buttonText = 'Add Customer';
  formView = true;
  customerList: Customer[];
  tempCustomerList: Customer[];
  btnText = 'Add';
  tempCustomer: Customer = {
    customerId : 0,
    firstName : '',
    lastName : '',
    email : '',
    phoneNumber : 0
  };

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => this.customerList = data);
  }

  submit(): void {

    if (this.btnText === 'Update') {
      this.service.update(this.tempCustomer).subscribe(
        // data => this.customerList.push(data)
      );
      console.log(this.tempCustomer);
      this.tempCustomer = {
        customerId : 0,
        firstName : '',
        lastName : '',
        email : '',
        phoneNumber : 0
      };
      this.btnText = 'Add';
    } else {

        this.service.add(this.tempCustomer).subscribe(
          data => this.customerList.push(data)
        );
        console.log(this.tempCustomer);
        this.tempCustomer = {
          customerId : 0,
          firstName : '',
          lastName : '',
          email : '',
          phoneNumber : 0
        };
      }
      this.formView = true;
      this.buttonText = 'Add Customer';
  }

  handleEdit(entity: Customer): void {
    this.tempCustomer = entity;
    console.log(this.tempCustomer);
    this.btnText = 'Update';
    this.formView = false;
    this.buttonText = 'Hide Form';
  }

  handleDelete(entity: Customer): void {
    const indexPosition = this.customerList.indexOf(entity);
    // this.scoreList.splice(indexPosition, 1);
    this.service.remove(entity).subscribe(
      data => this.customerList.splice(indexPosition, 1)
    );
    console.log(entity);
  }

  handleFormView(value): void {
    if (value === true) {
      this.formView = false;
      this.buttonText = 'Hide Form';
    } else {
      this.formView = true;
      this.buttonText = 'Add Customer';
    }
  }
}
