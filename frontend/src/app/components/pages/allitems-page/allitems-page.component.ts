import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AllitemsService } from 'src/app/services/allitems.service';
import { Allitems } from 'src/app/shared/models/Allitems';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {QuestionsService} from "../../../services/quections.service";
import {IAddItem} from "../../../shared/interfaces/IAddItem";
import {IQuestion} from "../../../shared/interfaces/IQuestion";

@Component({
  selector: 'app-allitems-page',
  templateUrl: 'allitems-page.component.html',
  styleUrls: ['../home/css/bootstrap.min.css','../home/css/font-awesome.min.css','../home/css/elegant-icons.css','../home/css/magnific-popup.css','../home/css/nice-select.css','../home/css/slicknav.min.css','../home/css/style.css']
})
export class AllitemsPageComponent implements OnInit {
  allitems!: Allitems;
  addquestionForm!:FormGroup;
  isSubmitted = false;

  constructor(activatedRoute:ActivatedRoute, allitemsService:AllitemsService, private formBuilder: FormBuilder,private questionservice:QuestionsService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        allitemsService.getAllitemById(params.id).subscribe(serverItems => {
        this.allitems = serverItems;
      });
    })
   }

  ngOnInit(): void {
    this.addquestionForm = this.formBuilder.group({
      question: ['', [Validators.required]],
    });
  }

  get fc() {
    return this.addquestionForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.addquestionForm.invalid) return;

    const fv= this.addquestionForm.value;
    const questions :IQuestion = {
      question: fv.question,
    };

    this.questionservice.addquestion(questions).subscribe(_ => {
     // this.router.navigateByUrl(this.returnUrl);
    })
  }

  addToCart(){
    this.cartService.addToCart(this.allitems);
    this.router.navigateByUrl('/cart-page');
  }
}
