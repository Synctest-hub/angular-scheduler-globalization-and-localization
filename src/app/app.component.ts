import { Component } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { loadCldr } from '@syncfusion/ej2-base';
// To localize the scheduler words, import L10n from ej2-base package.
import { L10n } from '@syncfusion/ej2-base';

declare var require: any;

loadCldr(
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/main/fr-CH/ca-gregorian.json'),
    require('cldr-data/main/fr-CH/numbers.json'),
    require('cldr-data/main/fr-CH/timeZoneNames.json'));

L10n.load({
    'fr-CH': {
        'schedule': {
            'day': 'journée',
            'week': 'La semaine',
            'workWeek': 'Semaine de travail',
            'month': 'Mois',
            'today': 'Aujourd`hui',
            'agenda': 'Ordre du jour'
        }
    }
});

@Component({
  selector: 'app-root',
  template: `<ejs-schedule 
  [eventSettings]="eventObject"
  locale='fr-CH' 
  [selectedDate]="setDate">
  </ejs-schedule>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localize-schedule';
  public setDate: Date = new Date(2019, 0, 15);
  public eventObject: EventSettingsModel = {
    dataSource: [{
      Id: 1,
      Subject: "Meditation time",
      StartTime: new Date(2019,0,17,11,0),
      EndTime: new Date(2019,0,17,11,30),
      Location: "At Yoga Center",
      ResourceID: 1,
      GroupID: 1
    },
    {
      Id: 2,
      Subject: "Play time",
      StartTime: new Date(2019,0,18,11,0),
      EndTime: new Date(2019,0,18,11,30),
      Location: "At Play Center",
      ResourceID: 2,
      GroupID: 3
    }]
  }
}
