import { Component } from '@angular/core';
import { HeroService} from './hero.service'
import { Hero } from './hero';



@Component({
    selector: 'app-add-hero',
    template:  `
            <h2>My Heroes</h2>
            <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
                <div>
                    <label>Hero name: </label> <input required ng-pattern="string" type="text" name="name" ngModel pattern="[a-zA-Z]*">
                    <label>Hero description: </label> <input required  type="text" name="description" ngModel>
                    <button> Add </button>
                </div>
                <label> {{result}} </label>
            </form>          
            `,
    providers: [HeroService]
})
export class AddHeroComponent {


    result: String;
    constructor(private service: HeroService) {}

    onSubmit(formValue: any): void{
        console.log(formValue);
        this.service.createNew(formValue.name.trim(), formValue.description.trim())
            .then(hero => this.result = "Add Complete id " + hero.id);
    }

}