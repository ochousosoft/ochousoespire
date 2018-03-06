import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import {Location} from '@angular/common';

import { CustomValidators } from 'ng2-validation';

import { PostsRestService } from '../../providers/rest/posts-rest.service';

@Component({
    templateUrl: 'wiki-post.html'
})
export class WikiPostComponent implements OnInit {
    isRequesting:boolean = false;
    postId:number;
    post:any = {};
    options = {
        title: 'Toast It!',
        msg: 'Success...',
        showClose: true,
        timeout: 1000,
        theme: 'bootstrap',
        type: 'success'
    };
    constructor(
        private postsRestSrv: PostsRestService,
        private route: ActivatedRoute,
        private toastyService: ToastyService,
        private location: Location
    ){
        this.route.params.subscribe( params => {
            this.postId = params.id;
        });
    }
    
    ngOnInit() {
        this.loadPost();
    }

    
    loadPost(){
        this.isRequesting = true;
        let params:any = {where: {id:this.postId}, projection: 'default'};

        params.order_by = {'id':'DESC'};
        debugger
        this.postsRestSrv.find(params)
        .subscribe(data => {
            this.isRequesting = false;
            this.post = data.result.data[0];

        }, error => {
            this.isRequesting = false;
            console.log(error)
        });
    }

    savePost(post){

        this.postsRestSrv.save({data: post})
        .subscribe(data => {
            debugger;
            this.post = data.result;
            // this.toastsManager.success('Enquisa gardada correctamente', 'Gardado');
            let toastOptions: ToastOptions = {
                title: this.options.title,
                msg: this.options.msg,
                showClose: this.options.showClose,
                timeout: this.options.timeout,
                theme: this.options.theme
            };
    

            this.toastyService.success(toastOptions); 

            
        }, error => {
            // this.toastsManager.error('Erro ó gardar enquisa', 'Erro de gardado');
            console.log(error)
        });
    }

    back(){
        this.location.back();
    }
}