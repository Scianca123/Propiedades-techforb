import { Component, computed, ElementRef, signal, ViewChild } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import Chart from 'chart.js/auto';
import crosshairPlugin from 'chartjs-plugin-crosshair';

@Component({
  selector: 'app-chart',
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {

  chart = Chart.register(crosshairPlugin);

  private monthlySales = [20, 100, 50, 120, 80, 140, 60, 130, 70, 160, 90, 110];
  private monthlyRevenue = [
    50, 140, 70, 180, 100, 230, 130, 250, 120, 280, 160, 220,
  ];

  chartData = computed(() => {
    const labels =
          [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ];

    return {
      labels,
      datasets: [
        {
          label: 'No. of Sales',
          data: this.monthlySales,
          borderColor: '#6B7480',
          backgroundColor: 'transparent',
          pointBackgroundColor: '#6B7480',
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 0,
          tension: 0.4,
          fill: false,
        },
        {
          label: 'Revenue',
          data: this.monthlyRevenue,
          borderColor: '#10B981',
          backgroundColor: (ctx: any) => {
            const chart = ctx.chart;
            const { ctx: c, chartArea } = chart;
            if (!chartArea) return 'rgba(16,185,129,0.1)';
            const gradient = c.createLinearGradient(
              0,
              chartArea.top,
              0,
              chartArea.bottom
            );
            gradient.addColorStop(0, 'rgba(20, 226, 158, 0.2)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
            return gradient;
          },
          borderDash: [8, 4],
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 5,
          pointBackgroundColor: '#10B981',
          tension: 0.4,
          fill: true,
        },
      ],
    };
  });

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 800, easing: 'easeInOutQuad' },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        type: 'category',
        ticks: { color: '#000000' },
        grid: { display: false },
      },
      y: {ticks:{color: '#000000'}, grid: { color: '#f0f0f0' } },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 12,
          padding: 16,
          color: '#000000',
          font: { weight: 'bold' },
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx: any) => `${ctx.dataset.label}: ${ctx.parsed.y}`,
        },
      },
      title: {
        display: true,
        text: '',
        font: {
          size: 18,
        },
        padding: {
          bottom: 20,
        },
      },
      crosshair: {
        line: {
          color: '#94a3b8',
          width: 1,
        },
        sync: {
          enabled: false,
        },
        zoom: {
          enabled: false,
        },
        snap: {
          enabled: true,
        },
      },
    },
  };

}
