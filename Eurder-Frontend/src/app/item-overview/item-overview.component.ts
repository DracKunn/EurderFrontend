import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../../model/Item";
import {UntypedFormBuilder} from "@angular/forms";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {
  items: Item[] = [];
  selectedItem: Item | any;
  searchText: string;

  addItemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: 0.01,
    stock: 0
  });

  constructor(
    private itemService: ItemService,
    public formBuilder: UntypedFormBuilder
  ) {
    this.selectedItem = undefined;
    this.searchText = '';
  }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.itemService.getItems().subscribe(items => this.items = items);
  }

  selectItem(item: Item): void {
    this.selectedItem = item;
  }

  addItemOnSubmit() {
    this.itemService.addItem(this.addItemForm.value).subscribe(() => {
      console.log(`the item has been added`);
      this.addItemForm.reset();
      this.getItems();
    });
  }
}
