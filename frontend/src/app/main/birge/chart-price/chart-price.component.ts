import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import { isEqual, isNil } from 'lodash';

@Component({
  selector: 'app-chart-price',
  templateUrl: './chart-price.component.html',
  styleUrls: ['./chart-price.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartPriceComponent implements OnChanges, AfterViewInit {
  barChart: Chart | null = null;

  @Input() data!: ChartData;
  @Input() options?: ChartOptions;

  @ViewChild('chart') chart?: ElementRef<HTMLCanvasElement>;

  ngOnChanges(changes: SimpleChanges) {
    if (!this.barChart) return;

    const dataChanges = changes['data'];
    const optionsChanges = changes['options'];

    if (this._isCurrentPropChangeNotEqualPrevious(dataChanges)) {
      this.barChart.data = dataChanges.currentValue;
      this.barChart.update();
    }

    if (this._isCurrentPropChangeNotEqualPrevious(optionsChanges)) {
      this.barChart.options = optionsChanges.currentValue;
      this.barChart.update();
    }

    console.log(this.barChart.options);
  }

  ngAfterViewInit(): void {
    this.barChart = this.createBarChart();
  }

  private createBarChart(): Chart | null {
    const context = this.chart?.nativeElement.getContext('2d');

    if (!context || this.data) return null;

    console.log(this.data);

    const defaultOptions: ChartOptions = {
      backgroundColor: '#003791',
    };

    const options = { ...defaultOptions, ...this.options };

    return new Chart(context, {
      type: 'bar',
      data: this.data,
      options,
    });
  }

  _isCurrentPropChangeNotEqualPrevious = (
    change: SimpleChange | undefined | null,
    options?: { isCurrentPresent?: boolean; transformerFn?: (val: any) => any }
  ): boolean => {
    if (!change) return false;
    const { isCurrentPresent = true, transformerFn } = options || {};

    let prevValue = change.previousValue;
    let currentValue = change.currentValue;

    if (typeof transformerFn === 'function') {
      prevValue = transformerFn(prevValue);
      currentValue = transformerFn(currentValue);
    }

    return (!isCurrentPresent || !isNil(currentValue)) && !isEqual(prevValue, currentValue);
  };
}
