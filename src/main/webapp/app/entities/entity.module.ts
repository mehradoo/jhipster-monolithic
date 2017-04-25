import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ScriptoRegionMySuffixModule } from './region/region-my-suffix.module';
import { ScriptoCountryMySuffixModule } from './country/country-my-suffix.module';
import { ScriptoLocationMySuffixModule } from './location/location-my-suffix.module';
import { ScriptoDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { ScriptoTaskMySuffixModule } from './task/task-my-suffix.module';
import { ScriptoEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { ScriptoJobMySuffixModule } from './job/job-my-suffix.module';
import { ScriptoJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        ScriptoRegionMySuffixModule,
        ScriptoCountryMySuffixModule,
        ScriptoLocationMySuffixModule,
        ScriptoDepartmentMySuffixModule,
        ScriptoTaskMySuffixModule,
        ScriptoEmployeeMySuffixModule,
        ScriptoJobMySuffixModule,
        ScriptoJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScriptoEntityModule {}
