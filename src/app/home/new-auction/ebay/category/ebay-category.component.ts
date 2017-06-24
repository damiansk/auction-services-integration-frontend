import {AfterViewInit, Component, DoCheck, EventEmitter, OnInit, Output} from '@angular/core';

import { EbayCategoryService } from './ebay-category.service';
import { EbayCategory } from './category.interface';

@Component({
  selector: 'ebay-category',
  templateUrl: './ebay-category.component.html',
  styleUrls: ['./ebay-category.component.scss']
})
export class EbayCategoryComponent implements OnInit {

  @Output() categoryId: EventEmitter<string> = new EventEmitter<string>();

  private rootId = '0';
  private categories: EbayCategory[] = [];
  private chosenCategories: EbayCategory[] = [];

  constructor(private ebayCategoryService: EbayCategoryService) {}

  ngOnInit(): void {
    this.updateCategoryRootId('EBAY_US');
    this.updateCategoryList();

    const categoryAll: EbayCategory = <EbayCategory> {
      categoryId: '0',
      categoryName: 'Wszystko'
    };

    this.chosenCategories.push(categoryAll);
  }

  private updateCategoryRootId(rootName: string) {
    this.ebayCategoryService
      .getCategoryRootId(rootName)
      .subscribe(
        response => {
          this.ebayCategoryService.updateAuthToken(response.headers.get('authorization'));
          this.rootId = (response.json()).categoryTreeId;
        },
        err => console.error(err)
      )
  }

  updateCategory(event): void {
    const categoryId = event.target.value;
    const chosenCategory = this.categories
      .find( category => category.categoryId == categoryId );

    this.updateCategoryList(categoryId);
    this.chosenCategories.push(chosenCategory);
  }

  backToCategory(event): void {
    const categoryId = event.target.dataset.id;
    const categoryIndex = this.chosenCategories
      .findIndex(category => category.categoryId == categoryId);

    this.updateCategoryList(categoryId);
    this.chosenCategories = this.chosenCategories
      .slice(0, categoryIndex+1);
    this.notifyParentComponent();
  }

  private updateCategoryList(categoryId: string = '0'): void {
    this.ebayCategoryService
      .getCategory(this.rootId, categoryId)
      .subscribe(
        response => {
          this.ebayCategoryService.updateAuthToken(response.headers.get('authorization'));
          const categorySubtreeNode = (response.json()).categorySubtreeNode;

          if ( categorySubtreeNode.hasOwnProperty('childCategoryTreeNodes') ) {
            this.categories = categorySubtreeNode
                                .childCategoryTreeNodes
                                .map( category => category.category );
          } else {
            this.categories = [];
            this.notifyParentComponent();
          }
        },
        err => console.error(err)
      )
  }

  private notifyParentComponent(): void {
    if ( this.categories.length === 0 && this.chosenCategories[this.chosenCategories.length - 1] ) {
      const currentCategoryId = this.chosenCategories[this.chosenCategories.length - 1].categoryId;
      this.categoryId.emit(`${currentCategoryId}`);
    } else {
      this.categoryId.emit(null);
    }
  }

}
