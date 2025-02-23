// Graphs JS start
$(document).ready(function () {
  // Activity chart start
  var dataPoints = [22000, 10000, 30000, 15000, 25000, 27000, 29000, 26000, 27000, 28000, 10000];

  var options = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Series 1',
      data: dataPoints
    }],
    xaxis: {
      categories: ['Mar23', 'Apr23', 'May23', 'Jun23', 'Jul23', 'Aug23', 'Sep23', 'Oct23', 'Nov23', 'Dec23', 'Jan23']
    },
    yaxis: {
      min: 0,
      max: 30000,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 5,
      hover: {
        size: 7
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    },
    colors: ['#40DBBC'], // This should match the color of your line
  };

  var chart = new ApexCharts(document.querySelector(".totalActivity"), options);
  chart.render();

  // Activity chart end

  // Radial Bar Charts start (Top 5 Diagnoses)
  var options = {
    series: [77, 67, 61, 55, 90],
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#40DBBC', '#41CCC9', '#2D81BB', '#00A6D4', '#38CFF9'],
    labels: ['40', '512', '400', '390', '200'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 150,
      offsetY: 0,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
        show: false,
      },
      formatter: function (seriesName) {
        return seriesName
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  };

  var chart = new ApexCharts(document.querySelector(".topFive"), options);
  chart.render();
  // Radial Bar Charts end (Top 5 Diagnoses)

  // Radial Bar Charts start (Top 5 Diagnoses children)
  var options = {
    series: [77, 67, 61, 55, 90],
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#40DBBC', '#41CCC9', '#2D81BB', '#00A6D4', '#38CFF9'],
    labels: ['40', '512', '400', '390', '200'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 150,
      offsetY: 0,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
        show: false,
      },
      formatter: function (seriesName) {
        return seriesName
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  };

  var chart = new ApexCharts(document.querySelector(".topFiveChild"), options);
  chart.render();
  // Radial Bar Charts end (Top 5 Diagnoses children)

  // Radial Bar Charts start (Top 5 Diagnoses women)
  var options = {
    series: [77, 67, 61, 55, 90],
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#40DBBC', '#41CCC9', '#2D81BB', '#00A6D4', '#38CFF9'],
    labels: ['40', '512', '400', '390', '200'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 150,
      offsetY: 0,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
        show: false,
      },
      formatter: function (seriesName) {
        return seriesName
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  };

  var chart = new ApexCharts(document.querySelector(".topFiveWomen"), options);
  chart.render();
  // Radial Bar Charts end (Top 5 Diagnoses women)

  // Radial Bar Charts start (Top 5 Diagnoses men)
  var options = {
    series: [77, 67, 61, 55, 90],
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          }
        }
      }
    },
    colors: ['#40DBBC', '#41CCC9', '#2D81BB', '#00A6D4', '#38CFF9'],
    labels: ['40', '512', '400', '390', '200'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 150,
      offsetY: 0,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
        show: false,
      },
      formatter: function (seriesName) {
        return seriesName
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  };

  var chart = new ApexCharts(document.querySelector(".topFiveMen"), options);
  chart.render();
  // Radial Bar Charts end (Top 5 Diagnoses men)


  // Utilization Trends chart start

  var dataPoints = [22000, 10000, 30000, 15000, 25000, 27000, 29000, 26000, 27000, 28000];

  var options = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Series 1',
      data: dataPoints
    }],
    xaxis: {
      categories: ['M23', 'A23', 'M23', 'J23', 'A23', 'S23', 'O23', 'N23', 'D23', 'J23']
    },
    yaxis: {
      min: 0,
      max: 30000,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 5,
      hover: {
        size: 7
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    },
    colors: ['#00A3FF'], // This should match the color of your line
  };

  var chart = new ApexCharts(document.querySelector(".UtilizationTrends"), options);
  chart.render();

  // Utilization Trends chart end


  // Total Activity small Trends chart start

  var dataPoints = [22000, 10000, 30000, 15000, 25000, 27000, 29000, 26000, 27000, 28000];

  var options = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Series 1',
      data: dataPoints
    }],
    xaxis: {
      categories: ['M23', 'A23', 'M23', 'J23', 'A23', 'S23', 'O23', 'N23', 'D23', 'J23']
    },
    yaxis: {
      min: 0,
      max: 30000,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 5,
      hover: {
        size: 7
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    },
    colors: ['#00A3FF'], // This should match the color of your line
  };

  var chart = new ApexCharts(document.querySelector(".totalActivitySmall"), options);
  chart.render();

  // Total Activity small Trends chart end

  // Total Utilization chart start
  var options = {
    series: [{
      data: [5210, 4541, 3632, 2412, 1321, 1008]
    }],
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        borderRadius: 4,
        dataLabels: {
          position: 'top', // Puts the data labels at the end of the bars
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetX: 0, // Adjusted so the labels appear right next to the end of the bars
      style: {
        fontSize: '12px',
        colors: ['#000'] // Black color for text
      },
      background: {
        enabled: true,
        foreColor: '#fff',
        borderRadius: 2,
        padding: 4,
        opacity: 0, // Set opacity to 0 to hide the background
        borderWidth: 0, // Set border width to 0 to hide the border
      }
    },
    xaxis: {
      categories: ['Labs', 'Radiology', 'Drugs', 'Vitals', 'Procedure', 'Medical Supplies'],
      labels: {
        show: false // Hides the x-axis labels
      },
      axisBorder: {
        show: true // Hides the x-axis line
      },
      axisTicks: {
        show: false // Hides the x-axis ticks
      }
    },
    yaxis: {
      min: 0,
      max: 7000,
      labels: {
        show: true,
        style: {
          colors: [], // Define colors for y-axis labels if needed
          fontSize: '12px'
        }
      }
    },
    grid: {
      show: true,
      borderColor: '#e0e0e0', // Light grey for grid lines
      strokeDashArray: 5,
      position: 'back',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    colors: ['#40DBBC', '#41CCC9', '#2D81BB', '#47B0CE', '#00A6D4', '#38CFF9'],
  };

  var chart = new ApexCharts(document.querySelector(".totalUtilization"), options);
  chart.render();


  // Total Utilization chart end


  // Clinical Statistics chart start
  var dataPoints = [80, 70, 60, 0, 90, 60, 90, 50, 70, 40, 30, 60, 80, 70, 60];

  var options = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Series 1',
      data: dataPoints
    }],
    xaxis: {
      categories: ['1 Feb', '2 Feb', '3 Feb', '4 Feb', '5 Feb', '6 Feb', '7 Feb', '8 Feb', '9 Feb', '10 Feb', '11 Feb', '12 Feb', '13 Feb', '14 Feb', '15 Feb']
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 5,
      hover: {
        size: 7
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    },
    colors: ['#40DBBC'], // This should match the color of your line
  };

  var chart = new ApexCharts(document.querySelector(".clinicalStat"), options);
  chart.render();

  // Clinical Statistics chart end

  // patientAge chart start
  var options = {
    series: [{
      data: [2500, 20000, 12500, 15000, 10000, 7500, 5000, 7500, 2500, 5000]
    }],
    chart: {
      type: 'bar',
    },
    colors: ['#00A6D4'],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: '14px',
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['0', '15', '30', '45', '60', '75', '90', '105', '120', '135'],
    },
    yaxis: {
      min: 0,
      max: 25000,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        }
      }
    },
  };

  var chart = new ApexCharts(document.querySelector(".patientAge"), options);
  chart.render();

  // patientAge chart end

  // Revenue Status chart start
  var options = {
    chart: {
      type: 'bar',
      height: 180,
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: true,
        distributed: true,
        barHeight: "40px",
        dataLabels: {
          position: 'top', // Puts the data labels at the end of the bars
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%"
      },
      offsetX: 0,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      },
    },
    series: [{
      name: 'Percentage',
      data: [68, 32]
    }],
    xaxis: {
      categories: ['Due', 'Revenue'],
      labels: {
        show: false
      },
      axisBorder: {
        show: true // Hides the x-axis line
      },
      axisTicks: {
        show: false // Hides the x-axis ticks
      }
    },
    yaxis: {
      labels: {
        show: true
      },
      axisBorder: {
        show: false // Hides the x-axis line
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%"
        }
      }
    },
    colors: ['#2D81BB', '#00A6D4'],
    grid: {
      show: true,
      borderColor: '#e0e0e0', // Light grey for grid lines
      strokeDashArray: 5,
      position: 'back',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
  }
  var chart = new ApexCharts(document.querySelector(".revenueStatus"), options);
  chart.render();


  // Revenue Status chart end


  // Revenue Trend chart start
  var dataPoints = [10000, 28000, 25200, 15000, 14000, 10000, 12000, 25000, 22000, 20000, 17000, 18000, 20000];

  var options = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Series 1',
      data: dataPoints
    }],
    xaxis: {
      categories: ['14 Oct', '19 Oct', '28 Oct', '5 Feb', '10 Mar', '20 Apr', '28 Apr', '12 May', '19 May', '23 May', '28 May', '09 Jun', '12 Jun', '19 Jun', '25 Jun', '5 Jul', '19 Jul', '22 Jul', '02 Aug', '10 Aug', '22 Aug', '23 Sep', 'Dec23', 'Jan23']
    },
    yaxis: {
      min: 0,
      max: 30000,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 5,
      hover: {
        size: 7
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    },
    colors: ['#40DBBC'], // This should match the color of your line
  };

  var chart = new ApexCharts(document.querySelector(".revenueTrend"), options);
  chart.render();

  // Revenue Trend chart end

  // Revenue Streams chart start
  var dataPoints = [10000, 28000, 25200, 15000, 14000, 10000, 12000, 25000, 22000, 20000, 17000, 18000, 20000];

  var options = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Series 1',
      data: dataPoints
    }],
    xaxis: {
      categories: ['14 Oct', '19 Oct', '28 Oct', '5 Feb', '10 Mar', '20 Apr', '28 Apr', '12 May', '19 May', '23 May', '28 May', '09 Jun', '12 Jun', '19 Jun', '25 Jun', '5 Jul', '19 Jul', '22 Jul', '02 Aug', '10 Aug', '22 Aug', '23 Sep', 'Dec23', 'Jan23']
    },
    yaxis: {
      min: 0,
      max: 30000,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        }
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    markers: {
      size: 5,
      hover: {
        size: 7
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      }
    },
    colors: ['#40DBBC'], // This should match the color of your line
  };

  var chart = new ApexCharts(document.querySelector(".revenueStreams"), options);
  chart.render();

  // Revenue Streams chart end

  // pregnancy week chart start

  var options = {
    series: [
      { name: 'Vitals', data: [4, 5, 4, 3, 2, 4, 2] },
      { name: 'Appointments', data: [5, 3, 3, 5, 1, 4, 3] },
      { name: 'High Risk Events', data: [1, 2, 1, 0, 2, 1, 2] },
      { name: 'Comorbidities', data: [6, 7, 5, 8, 6, 9, 4] },
      { name: 'Meditation & Immun', data: [3, 2, 3, 5, 'N/A', 'N/A', 'N/A'] },
      { name: 'Investigation', data: ['N/A', 'N/A', 'N/A', 'N/A', 0, 'N/A', 'N/A'] }
    ],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
     
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '60%',
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
    },
    title: {
      text: 'Health Data Overview'
    },
    xaxis: {
      categories: ['Vitals', 'Appointments', 'High Risk Events', 'Comorbidities', 'Meditation & Immun', 'Investigation'],
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    tooltip: {
      shared: false,
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      type: 'color',
    },
    states: {
      hover: {
        filter: 'none'
      }
    },
    legend: {
      position: 'right',
      offsetY: 40
    },
    colors: ['#CEFFCD', '#FFD9CD'],
  };
  var chart = new ApexCharts(document.querySelector(".pregnancyWeek"), options);
  chart.render();

  // pregnancy week chart end

  // Antenatal Clinic progress start
  $(".antenatalProgress").each(function () {
    var $bar = $(this).find(".bar");
    var $val = $(this).find("span");
    var perc = parseInt($val.text(), 10);

    $({ p: 0 }).animate({ p: perc }, {
      duration: 3000,
      easing: "swing",
      step: function (p) {
        $bar.css({
          transform: "rotate(" + (45 + (p * 1.8)) + "deg)", // 100%=180° so: ° = % * 1.8
          // 45 is to add the needed rotation to have the green borders at the bottom
        });
        $val.text((p | 0) + "%");

      }
    });
  });


  // Antenatal Clinic progress end 

});
// Graphs JS end 