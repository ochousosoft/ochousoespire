import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

//Tables Components
import { WikiDashboardComponent } from './wiki-dashboard/wiki-dashboard.component';
import { WikiPostComponent } from './wiki-post/wiki-post.component';

export const WikiRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'wiki-dashboard',
                component: WikiDashboardComponent,
                data: {
                    title: 'Wiki'
                }
            },
            {
                path: 'wiki-post/:id',
                component: WikiPostComponent,
                data: {
                    title: 'Wiki Post'
                }
            }
        ]
    }
];

