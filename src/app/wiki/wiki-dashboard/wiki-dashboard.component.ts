import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core';

import { PostsRestService } from '../../providers/rest/posts-rest.service';
import { post } from 'selenium-webdriver/http';

@Component ({
    templateUrl: 'wiki-dashboard.html'
})

export class WikiDashboardComponent implements OnInit {
    isRequesting:boolean = false;
    postsStructure:any[] = [];
    constructor(
        private postsRestSrv: PostsRestService
    ) { }


    ngOnInit() {
        this.loadPosts();
    }
    
    loadPosts(){
        this.isRequesting = true;
        let params:any = {where: {}, projection: 'default'};

        params.order_by = {'id':'DESC'};
        debugger
        this.postsRestSrv.find(params)
        .subscribe(data => {
            this.isRequesting = false;
            let posts = data.result.data;
            let postsStructure = [
                [], [], []
            ];
            for(let i=0;i<posts.length;i++){
                postsStructure[i%3].push(posts[i]);
            }

            this.postsStructure = postsStructure;
        }, error => {
            this.isRequesting = false;
            console.log(error)
        });
    }
}
