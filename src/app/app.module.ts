//  angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localePt from "@angular/common/locales/pt";

// modules
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';

// syncfusion
import {
  setCulture,
  setCurrencyCode,
  L10n,
  loadCldr,
} from "@syncfusion/ej2-base";

// globalization / internacionalization - Syncfusion
import { globalizationI18n } from './shared/globalization/i18n/syncfusion';
import { globalizationL10n } from "./shared/globalization/l10n/syncfusion";
import { cagregorian } from "./shared/globalization/cldr-data/main/pt/ca-gregorian";
import { currencies } from "./shared/globalization/cldr-data/main/pt/currencies";
import { numbers } from "./shared/globalization/cldr-data/main/pt/numbers";
import { timeZoneNames } from "./shared/globalization/cldr-data/main/pt/timeZoneNames";
import { characters } from "./shared/globalization/cldr-data/main/pt/characters";
import { dateFields } from "./shared/globalization/cldr-data/main/pt/dateFields";
import { listPatterns } from "./shared/globalization/cldr-data/main/pt/listPatterns";
import { localeDisplayNames } from "./shared/globalization/cldr-data/main/pt/localeDisplayNames";
import { posix } from "./shared/globalization/cldr-data/main/pt/posix";
import { units } from "./shared/globalization/cldr-data/main/pt/units";
loadCldr(
  globalizationI18n,
  cagregorian,
  currencies,
  numbers,
  timeZoneNames,
  characters,
  dateFields,
  listPatterns,
  localeDisplayNames,
  posix,
  units
);
setCulture("pt");
setCurrencyCode("BRL");
L10n.load(globalizationL10n);

// registrar o local com padrão 'pt-BR'
registerLocaleData(localePt);

// syncfusion
import { AggregateService, FilterService, GridModule, GroupService, PageService, SearchService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    GridModule,
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    SearchService,
    ToolbarService,
    AggregateService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
