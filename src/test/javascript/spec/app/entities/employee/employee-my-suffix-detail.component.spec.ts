import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils, EventManager } from 'ng-jhipster';
import { ScriptoTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { EmployeeMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/employee/employee-my-suffix-detail.component';
import { EmployeeMySuffixService } from '../../../../../../main/webapp/app/entities/employee/employee-my-suffix.service';
import { EmployeeMySuffix } from '../../../../../../main/webapp/app/entities/employee/employee-my-suffix.model';

describe('Component Tests', () => {

    describe('EmployeeMySuffix Management Detail Component', () => {
        let comp: EmployeeMySuffixDetailComponent;
        let fixture: ComponentFixture<EmployeeMySuffixDetailComponent>;
        let service: EmployeeMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ScriptoTestModule],
                declarations: [EmployeeMySuffixDetailComponent],
                providers: [
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    EmployeeMySuffixService,
                    EventManager
                ]
            }).overrideComponent(EmployeeMySuffixDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(EmployeeMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(EmployeeMySuffixService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new EmployeeMySuffix(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.employee).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
