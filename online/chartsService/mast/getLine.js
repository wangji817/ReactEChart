const GetLineOption = () => {
  // prettier-ignore
  function randomNum(num) {
    return Math.floor(Math.random() * num + 1);
  }
  const data = [["2021-06-05", randomNum(116)], ["2021-06-06", randomNum(129)], ["2021-06-07", randomNum(135)], ["2021-06-08", randomNum(86)], ["2021-06-09", randomNum(73)], ["2021-06-10", randomNum(85)], ["2021-06-11", randomNum(73)], ["2021-06-12", randomNum(68)], ["2021-06-13", randomNum(92)], ["2021-06-14", randomNum(130)], ["2021-06-15", randomNum(245)], ["2021-06-16", randomNum(139)], ["2021-06-17", randomNum(115)], ["2021-06-18", randomNum(111)], ["2021-06-19", randomNum(309)], ["2021-06-20", randomNum(206)], ["2021-06-21", randomNum(137)], ["2021-06-22", randomNum(128)], ["2021-06-23", randomNum(85)], ["2021-06-24", randomNum(94)], ["2021-06-25", randomNum(71)], ["2021-06-26", randomNum(106)], ["2021-06-27", randomNum(84)], ["2021-06-28", randomNum(93)], ["2021-06-29", randomNum(85)], ["2021-06-30", randomNum(73)], ["2021-07-01", randomNum(83)], ["2021-07-02", randomNum(125)], ["2021-07-03", randomNum(107)], ["2021-07-04", randomNum(82)], ["2021-07-05", randomNum(44)], ["2021-07-06", randomNum(72)], ["2021-07-07", randomNum(106)], ["2021-07-08", randomNum(107)], ["2021-07-09", randomNum(66)], ["2021-07-10", randomNum(91)], ["2021-07-11", randomNum(92)], ["2021-07-12", randomNum(113)], ["2021-07-13", randomNum(107)], ["2021-07-14", randomNum(131)], ["2021-07-15", randomNum(111)], ["2021-07-16", randomNum(64)], ["2021-07-17", randomNum(69)], ["2021-07-18", randomNum(88)], ["2021-07-19", randomNum(77)], ["2021-07-20", randomNum(83)], ["2021-07-21", randomNum(111)], ["2021-07-22", randomNum(57)], ["2021-07-23", randomNum(55)], ["2021-07-24", 60]];
  const dateList = data.map(function (item) {
    return item[0];
  });
  const valueList = data.map(function (item) {
    return item[1];
  });
  const LineOption = {
    id: "LineOption",
    // Make gradient line here
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
      },
      {
        show: false,
        type: 'continuous',
        seriesIndex: 1,
        dimension: 0,
        min: 0,
        max: dateList.length - 1
      }
    ],
    title: [
      {
        left: 'center',
        text: 'Gradient along the y axis'
      },
      {
        top: '55%',
        left: 'center',
        text: 'Gradient along the x axis'
      }
    ],
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [
      {
        data: dateList
      },
      {
        data: dateList,
        gridIndex: 1
      }
    ],
    yAxis: [
      {},
      {
        gridIndex: 1
      }
    ],
    grid: [
      {
        bottom: '60%'
      },
      {
        top: '60%'
      }
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: valueList
      },
      {
        type: 'line',
        showSymbol: false,
        data: valueList,
        xAxisIndex: 1,
        yAxisIndex: 1
      }
    ]
  };
  return LineOption;
}
module.exports = GetLineOption;