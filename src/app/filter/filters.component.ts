import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { SessionFilter, VISIBILITY_FILTER } from './filter.model';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy'; // npm install ngx-take-until-destroy --save

@Component({
  selector: 'app-todos-filters',
  template: `
    <div class="input-field col s12">
      <select [formControl]="control" class="browser-default">
        <option *ngFor="let filter of filters;" [ngValue]="filter.value">{{filter.label}}
        </option>
      </select>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionFiltersComponent implements OnInit, OnDestroy {
  @Input() active: VISIBILITY_FILTER;
  @Input() filters: SessionFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();

  control: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.active);

    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(c => {
      this.update.emit(c);
    });
  }

  ngOnDestroy(): void {}
}
