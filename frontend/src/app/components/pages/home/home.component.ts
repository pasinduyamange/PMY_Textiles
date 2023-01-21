import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AllitemsService } from 'src/app/services/allitems.service';
import { Allitems } from 'src/app/shared/models/Allitems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./css/bootstrap.min.css','css/font-awesome.min.css','css/elegant-icons.css','css/magnific-popup.css','css/nice-select.css','css/slicknav.min.css','css/style.css']
})
export class HomeComponent implements OnInit {

  items: Allitems[] = [];
  constructor(private itemService: AllitemsService, activatedRoute: ActivatedRoute) {
    let itemsObservalbe:Observable<Allitems[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        itemsObservalbe = this.itemService.getAllitemsBySearchTerm(params.searchTerm);
      else if (params.tag)
        itemsObservalbe = this.itemService.getAllItemsByTag(params.tag);
      else
        itemsObservalbe = itemService.getAll();

      itemsObservalbe.subscribe((serverItems) => {
          this.items = serverItems;
        })
    })
  }

  ngOnInit(): void {
  }

}
// comment added
