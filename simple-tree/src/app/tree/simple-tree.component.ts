import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'simple-tree',
    templateUrl: 'simple-tree.component.html'
})
export class SimpleTreeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        this.initTree();
    }

    public initTree(): void {
        // inline data demo
        $('.simple-tree').jstree();
    }

    public setData(data: any): void {
        $('.simple-tree').jstree(true).settings.core.data = data;
        $('.simple-tree').jstree(true).refresh();
    }

    public expandAll() {
        $('.simple-tree').jstree(true).open_all();
    }

    public closeAll() {
        $('.simple-tree').jstree(true).close_all();
    }

    public testData() {
        const data = [
            'Simple root node',
            {
                'id': 'node_2',
                'text': 'Root node with options',
                'state': { 'opened': true, 'selected': true },
                'children': [
                    { 'text': 'Child 1' },
                    'Child 2',
                    'Child 3',
                    { 'text': 'child 4', 'children': ['Grand child' ] }

                ]
            }
        ];
        this.setData(data);
    }
}