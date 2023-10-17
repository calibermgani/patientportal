import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormioAppConfig, FormioModule } from '@formio/angular';
import { AppConfig } from './config';
import { PrismService } from './services/prism.service';
import { HttpClientModule} from '@angular/common/http';
import { BuilderComponent } from './builder/builder.component';
import { ResultComponent } from './result/result.component';
import { CustomTemplateComponent } from './custom-template/custom-template.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ResultComponent,
    CustomTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    HttpClientModule
  ],
  providers: [
    PrismService,
    // {provide: FormioAppConfig, useValue: AppConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
