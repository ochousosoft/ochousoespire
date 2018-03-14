import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import {Location} from '@angular/common';

import { CustomValidators } from 'ng2-validation';

import { PostsRestService } from '../../providers/rest/posts-rest.service';
import { CategoriesRestService } from '../../providers/rest/categories-rest.service';

@Component({
    templateUrl: 'wiki-post.html'
})
export class WikiPostComponent implements OnInit {
    isRequesting:boolean = false;
    postId:number;
    post:any = {};
    categories:any[] = [];
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
        private categoriesRestSrv: CategoriesRestService,
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
        this.postsRestSrv.findOne(params)
        .subscribe(data => {
            this.isRequesting = false;
            // this.post = data.result.data[0];
            this.post = data.result.data;
            // debugger
            params = {where: {}, projection: 'default'};
            this.categoriesRestSrv.find(params)
            .subscribe(data => {
                this.isRequesting = false;
                this.categories = data.result.data;

                for(let i = 0; i<this.post.post_categories.length;i++){
                    for(let j = 0; j< this.categories.length; j++){
                        if(this.post.post_categories[i].id == this.categories[j].id){
                            this.categories[j].checked = true;
                        }
                    }
                }

            }, error => {
                this.isRequesting = false;
                console.log(error)
            });

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

    saveCategory(category){
        this.postsRestSrv.saveCategory({data: category, projection:'default'})
        .subscribe(data => {
            debugger;
            this.post.post_categories.push(data.result);
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

    deleteCategory(id, index){
        this.postsRestSrv.deleteCategory(id)
        .subscribe(data => {
            debugger;
            this.post.post_categories.splice(index, index);
            // this.post.post_categories.push(data.result);
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

    categoryChange(category, index){
        debugger
        let foundedCategory = null;
        for(let i = 0;i<this.post.post_categories.length;i++){
            if(category.id == this.post.post_categories[i].id){
                foundedCategory = this.post.post_categories[i];
            }
        }

        if(!foundedCategory){
            this.saveCategory({
                category_id: category.id,
                post_id: this.post.id
            });
        }
        else{
            this.deleteCategory(foundedCategory.id, index)
        }
    }

    back(){
        this.location.back();
    }
}