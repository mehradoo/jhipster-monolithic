import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager , JhiLanguageService  } from 'ng-jhipster';

import { EmployeeMySuffix } from './employee-my-suffix.model';
import { EmployeeMySuffixService } from './employee-my-suffix.service';

@Component({
    selector: 'jhi-employee-my-suffix-detail',
    templateUrl: './employee-my-suffix-detail.component.html'
})
export class EmployeeMySuffixDetailComponent implements OnInit, OnDestroy {

    employee: EmployeeMySuffix;
    private subscription: any;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: EventManager,
        private jhiLanguageService: JhiLanguageService,
        private employeeService: EmployeeMySuffixService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['employee']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInEmployees();
    }

    load(id) {
        this.employeeService.find(id).subscribe((employee) => {
            this.employee = employee;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInEmployees() {
        this.eventSubscriber = this.eventManager.subscribe('employeeListModification', (response) => this.load(this.employee.id));
    }
}
