import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.components';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [CommonModule]
})
export class CardModule {

}