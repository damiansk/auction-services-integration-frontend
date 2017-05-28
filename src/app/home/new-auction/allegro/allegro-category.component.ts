import { Component, OnInit } from '@angular/core';

import { AllegroCategoryService } from './allegro-category.service';
import {AllegroCategory} from './category.interface';

@Component({
  selector: 'allegro-category',
  templateUrl: './allegro-category.component.html'
})
export class AllegroCategoryComponent implements OnInit {

  private categories: AllegroCategory[] = [];
  private chosenCategories: AllegroCategory[] = [];

  constructor(private allegroCategoryService: AllegroCategoryService) {}


  ngOnInit(): void {
    this.updateCategoryList();

    const categoryAll: AllegroCategory = <AllegroCategory> {
      name: 'Wszystko',
      id: '0'
    };

    this.chosenCategories.push(categoryAll);
  }

  updateCategory(event): void {
    const categoryId = event.target.value;
    const chosenCategory = this.categories
                            .find( category => category.id == categoryId );

    this.updateCategoryList(categoryId);
    this.chosenCategories.push(chosenCategory);
  }

  backToCategory(event): void {
    const categoryId = event.target.dataset.id;
    const categoryIndex = this.chosenCategories
                            .findIndex(category => category.id == categoryId);

    this.updateCategoryList(categoryId);
    this.chosenCategories = this.chosenCategories
                              .slice(0, categoryIndex+1);
  }

  private updateCategoryList(categoryId: string = '0'): void {
    this.allegroCategoryService
      .getCategoryList(categoryId)
      .subscribe(
        response => {
          this.allegroCategoryService.updateAuthToken(response.headers.get('authorization'));
          this.categories = (response.json()).categories;
        },
        err => console.error(err)
      )
  }

}
