import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { AllegroCategoryService } from './allegro-category.service';
import {AllegroCategory} from './category.interface';

@Component({
  selector: 'allegro-category',
  templateUrl: './allegro-category.component.html',
  styleUrls: ['./allegro-category.component.scss']
})
export class AllegroCategoryComponent implements OnInit {

  @Output() categoryId: EventEmitter<string> = new EventEmitter<string>();

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

          this.notifyParentComponent();
        },
        err => console.error(err)
      )
  }

  private notifyParentComponent(): void {
    if ( this.categories.length === 0 ) {
      const currentCategoryId = this.chosenCategories[this.chosenCategories.length - 1].id;
      this.categoryId.emit(`${currentCategoryId}`);
    } else {
      this.categoryId.emit(null);
    }

  }

}
