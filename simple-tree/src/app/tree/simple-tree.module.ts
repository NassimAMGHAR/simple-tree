import { NgModule, ModuleWithProviders } from '@angular/core';

import { SimpleTreeComponent } from './simple-tree.component';

@NgModule({
    imports: [],
    exports: [SimpleTreeComponent],
    declarations: [SimpleTreeComponent],
    providers: [],
})
export class SimpleTreeModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: SimpleTreeComponent, providers: [] };
    }
}
