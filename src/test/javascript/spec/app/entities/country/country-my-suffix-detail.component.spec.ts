import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DateUtils, DataUtils, EventManager } from 'ng-jhipster';
import { ScriptoTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { CountryMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/country/country-my-suffix-detail.component';
import { CountryMySuffixService } from '../../../../../../main/webapp/app/entities/country/country-my-suffix.service';
import { CountryMySuffix } from '../../../../../../main/webapp/app/entities/country/country-my-suffix.model';

describe('Component Tests', () => {

    describe('CountryMySuffix Management Detail Component', () => {
        let comp: CountryMySuffixDetailComponent;
        let fixture: ComponentFixture<CountryMySuffixDetailComponent>;
        let service: CountryMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [ScriptoTestModule],
                declarations: [CountryMySuffixDetailComponent],
                providers: [
                    DateUtils,
                    DataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    CountryMySuffixService,
                    EventManager
                ]
            }).overrideComponent(CountryMySuffixDetailComponent, {
                set: {
                    template: ''
                }
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CountryMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CountryMySuffixService);
        });


        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new CountryMySuffix(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.country).toEqual(jasmine.objectContaining({id:10}));
            });
        });
    });

});
