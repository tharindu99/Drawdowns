var chart1 = c3.generate({
    bindto: '#histogram_10value',
    data: {
        x: 'x',
        columns: [
            ['x', '2008-03-17', '2008-09-17', '2008-09-29', '2008-10-27', '2008-11-12', '2008-11-21'],
            ['drawdown', -0.939769764, -0.903677411, -0.884203749, -0.869536374, -0.915458956, -0.814049642],
            ['trough', -0.939769764, -0.903677411, -0.884203749, -0.869536374, -0.915458956, -0.814049642]
        ],
        type: 'bar',
         types: {
            peak: 'spline',
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            label: 'Time',
            tick: {
                format: '%Y-%m-%d',
                rotate:90
            }
        },
         y: {
            max:-0.6,
            min:-1,
            label: 'Drawdown value'
        }
    },
    bar: {
        width: {
            ratio: 0.16 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    }
});
var chart2 = c3.generate({
    bindto: '#pie_drawdowns',
    data: {
        // iris data from R
        columns: [
            ['10%', 6],
            ['20%', 19],
            ['30%', 77],
            ['40%', 316],
            ['50%', 1084],
        ],
        type : 'pie'
    }
});
//Many individual drawdowns and index drawdown on the same day
var chart1=c3.generate({
	bindto:'#bar_drawdown1',
	data:{
		url:'data/2008_filter2.csv',
		type : 'bar'

	},
	axis:{
		x:{
			type:'category',
			categories:['11','21','22','23','31','32','33','42','44','45','48','49','51','52','53','54','55','56','62','71','72','None','S&P 500'],
			text:'X labal',
			position:'outer-center'
		}
	}
	/*size: {
    	height: 240,
    	width: 480
},*/

});
//plot Many individual drawdowns occur across multiple days 2008-11-20 and 2008-12-01
var chart3 = c3.generate({
    bindto: '#pie_drawdowns_1',
    
    data: {
        // iris data from R
        columns: [

            ['NAICS 2008-11-20', 1401218.833,82099458.65,15599858.35,2230823.899,47154704.62,122244144.4,286608567.7,
             14490203.94,29725340.42,21220437.06,21340288.53,3300980.215,93050606.32,157331822.2,6269357.85,
             9846085.856,21091786.05,3042569.995,5131844.395,12460651.73,9985580.956,3699050.621,'null'],
 
             ['S&P500 2008-11-20', 'null','null','null','null','null','null','null','null','null','null',
              'null','null','null','null','null','null','null','null','null','null',
              'null','null',1507627527],
              
             ['NAICS 2008-12-01', 'null','null','null',363827.3472,1461707.449,1200955.289,7097328.321,
              373936.0252,692766.6118,2231069.411,'null','null','null',91892842.69,2625242.927,
              1315417.497,3201217.553,362769.4468,'null',566889.1837,658189.5104,'null','null'],
              
             ['S&P500 2008-12-01', 'null','null','null','null','null','null','null','null','null','null',
                'null','null','null','null','null','null','null','null','null','null',
                'null','null',658150116.3],
        ],
        type : 'bar'
    },

    tooltip: {
        show: true,
        position: function (data, width, height, element) {
            return {top: 0, left: 90}
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['11', '21', '22', '23', '31', '32', '33', '42', '44','45',
                         '48','49','51','52','53','54','55','56','62','71','72','None','S&P500']
    		,tick: {
    			rotate: 90,
    			multiline: false
    		},
        }     
    },
    
   /* size: {
	  width: 1000
	},*/
	bar: {
        width: {
            ratio: 0.9 // this makes bar width 50% of length between ticks
        }
    }
});

//yasith
var chart4 = c3.generate({
    bindto: '#pie_drawdowns_2',
    
    data: {
        // iris data from R
        columns: [

['NAICS 2009-02-23', 
 22298947.55,6978380.371,800101.7104,1998934.172,4868327.759,
 16447827.43,329378.2509,8014477.964,1607290.269,1461178.37,
 'null',2345572.872,35755893.78,1477766.352,903239.5818,
 'null',403051.5499,'null','null',1564146.149,
 'null'],

['S&P500 2009-02-23', 
  'null','null','null','null','null',
  'null','null','null','null','null',
  'null','null','null','null','null',
  'null','null','null','null','null',
  708918781],
 
['NAICS 2009-02-26', 
  'null',19555950.67,'null',9647094.3,6437476.8,
  28803618.75,2489304.75,31775650.94,277634.86,18955712.33,
  'null',8754256.9,3988328.04,'null','null',
  'null','null','null','null','null',
  'null'],
  
['S&P500 2009-02-26', 
   'null','null','null','null','null',
   'null','null','null','null','null',
   'null','null','null','null','null',
   'null','null','null','null','null',
   869627012],
   
['NAICS 2009-02-27', 
   13929827.1,11664813.27,320548.7512,8744238.351,80235326.99,
   103560192,5773621.752,'null','null',4015399.824,
   2041120.718,3446810.633,31437311.76,550142.6843,3421415.493,
   4758976.676,3515377.257,3071114.193,7035730.3,607106.3551,
   'null'],
   
['S&P500 2009-02-27', 
    'null','null','null','null','null',
    'null','null','null','null','null',
    'null','null','null','null','null',
    'null','null','null','null','null',
    699165146],
        ],
        type : 'bar'
    },

    tooltip: {
        show: true,
        position: function (data, width, height, element) {
            return {top: 0, left: 90}
        }
    },
    axis: {
        x: {
            type: 'category',
            categories: ['21', '22', '23', '31', '32', 
                         '33', '42','44','45','48',
                         '49','51','52','53','54',
                         '55','56','62','71','72',
                         'S&P500']
    		,tick: {
    			rotate: 90,
    			multiline: false
    		},
        }     
    },
    
    /*size: {
	  width: 1000
	},*/
	bar: {
        width: {
            ratio: 0.9 // this makes bar width 50% of length between ticks
        }
    }
});
//yasith

//scatter
function drawSCAT (info,ovrl_pass) {
 

   var chart3 = c3.generate({
    bindto: '#scat',
     size: {
        height: 500,
    },
    data: {
        xs: {
            High: 'High_x',
            HighMedium: 'HighMedium_x',
            Medium: 'Medium_x',
            MediumLow: 'MediumLow_x',
            Low: 'Low_x',
            
        },
        url:info,
        type: 'scatter',
        colors: {
            High: '#CC0000',
            HighMedium: '#FF0000',
            Medium: '#FF9999',
            MediumLow: '#3399FF',
            Low: '#0A1F33',
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            label: 'Time',
            tick: {
                format: '%Y-%m-%d',
                rotate:90,
                fit: false
            }
        },
        y: {
            label: 'Permno',
            
        }
    },
     subchart: {
        show: true
    },
    
});
   draw_Ovrl(ovrl_pass);
}


        var ovrl =[
                   ['x', '2004-01-02','2004-02-04','2004-03-24','2004-04-30','2004-05-17','2004-06-03','2004-07-26','2004-08-06','2004-09-27','2004-10-25','2004-11-01','2004-12-07','2005-01-24','2005-02-22','2005-03-29','2005-04-20','2005-05-13','2005-06-27','2005-07-01','2005-08-26','2005-09-21','2005-10-13','2005-11-01','2005-12-30','2006-01-20','2006-02-07','2006-03-09','2006-04-17','2006-05-23','2006-06-13','2006-07-17','2006-08-09','2006-09-07','2006-10-02','2006-11-03','2006-12-01','2007-01-05','2007-02-27','2007-03-05','2007-04-02','2007-05-01','2007-06-07','2007-07-31','2007-08-15','2007-09-10','2007-10-19','2007-11-26','2007-12-17','2008-01-22','2008-02-06','2008-03-10','2008-04-14','2008-05-23','2008-06-27','2008-07-15','2008-08-04','2008-09-29','2008-10-27','2008-11-20','2008-12-01','2009-01-20','2009-02-27','2009-03-09','2009-04-01','2009-05-01','2009-06-22','2009-07-10','2009-08-17','2009-09-02','2009-10-02','2009-11-02','2009-12-08','2010-01-29','2010-02-08','2010-03-01','2010-04-01','2010-05-26','2010-06-30','2010-07-02','2010-08-26','2010-09-01','2010-10-04','2010-11-16','2010-12-01','2011-01-04','2011-02-02','2011-03-16','2011-04-18','2011-05-24','2011-06-15','2011-07-29','2011-08-08','2011-09-22','2011-10-03','2011-11-25','2011-12-19','2012-01-03','2012-02-01','2012-03-06','2012-04-10','2012-05-18','2012-06-01','2012-07-12','2012-08-02','2012-09-05','2012-10-24','2012-11-15','2012-12-28','2013-01-08','2013-02-25','2013-03-01','2013-04-18','2013-05-01','2013-06-24','2013-07-02','2013-08-27','2013-09-03','2013-10-08','2013-11-07','2013-12-13','2014-01-29','2014-02-03','2014-03-14','2014-04-11','2014-05-06','2014-06-03','2014-07-31','2014-08-07','2014-09-25','2014-10-16','2014-11-04','2014-12-16','2015-01-15'],
                   ['Drawdown',-0.0027,-0.0039,-0.0457,-0.0157,-0.0199,-0.0032,-0.049,-0.0342,0.0006,-0.0172,0.0004,0.0033,-0.0386,0.0042,-0.0301,-0.0356,-0.0014,0.0008,0.0029,-0.0221,-0.0079,-0.0412,-0.0034,0,0.0111,-0.0194,-0.006,-0.0072,-0.0394,-0.036,-0.0282,-0.0074,-0.0071,-0.0034,-0.0097,-0.003,-0.0055,-0.0248,-0.023,0.0027,0.0027,-0.0254,-0.031,-0.0318,-0.0146,-0.0159,-0.0892,-0.0222,-0.1058,-0.0359,-0.042,0.0055,-0.0051,-0.0844,-0.0487,-0.0143,-0.1343,-0.2702,-0.2201,-0.0886,-0.1065,-0.1041,-0.0779,0.0167,0.0049,-0.026,-0.0428,-0.0064,-0.0248,-0.0297,0.0064,-0.0032,-0.0358,-0.0152,0.01,0.0073,-0.0987,-0.0535,-0.0074,-0.0473,0.0299,-0.0035,-0.0031,0.0216,0.01,0.014,-0.0515,-0.0146,-0.0329,-0.0583,-0.0199,-0.1333,-0.0718,-0.0284,-0.0737,-0.0326,0.0154,0.0092,-0.016,-0.0347,-0.0716,-0.0247,-0.0191,-0.0102,-0.0018,-0.0205,-0.0403,-0.0083,0.0222,-0.0049,0.0024,-0.016,-0.0093,-0.0345,0.0051,-0.0313,0.0041,-0.0151,-0.0045,-0.0162,-0.0393,-0.023,-0.0091,-0.0296,-0.0086,0.0004,-0.0143,-0.0104,-0.0174,-0.0543,-0.0027,-0.045,-0.0312 ]  
                   ];

        var Ovrl_2004 = [['x', '2004-01-02','2004-02-04','2004-03-24','2004-04-30','2004-05-17','2004-06-03','2004-07-26','2004-08-06','2004-09-27','2004-10-25','2004-11-01','2004-12-07'],
                        ['Drawdown',-0.0027,-0.0039,-0.0457,-0.0157,-0.0199,-0.0032,-0.049,-0.0342,0.0006,-0.0172,0.0004,0.0033]];

        var Ovrl_2005 = [['x', '2005-01-24','2005-02-22','2005-03-29','2005-04-20','2005-05-13','2005-06-27','2005-07-01','2005-08-26','2005-09-21','2005-10-13','2005-11-01','2005-12-30'],
                        ['Drawdown',-0.0386,0.0042,-0.0301,-0.0356,-0.0014,0.0008,0.0029,-0.0221,-0.0079,-0.0412,-0.0034,0]];

        var Ovrl_2006 = [['x', '2006-01-20','2006-02-07','2006-03-09','2006-04-17','2006-05-23','2006-06-13','2006-07-17','2006-08-09','2006-09-07','2006-10-02','2006-11-03','2006-12-01'],
                        ['Drawdown',0.0111,-0.0194,-0.006,-0.0072,-0.0394,-0.036,-0.0282,-0.0074,-0.0071,-0.0034,-0.0097,-0.003]];

        var Ovrl_2007 = [['x', '2007-01-05','2007-02-27','2007-03-05','2007-04-02','2007-05-01','2007-06-07','2007-07-31','2007-08-15','2007-09-10','2007-10-19','2007-11-26','2007-12-17'],
                        ['Drawdown',-0.0055,-0.0248,-0.023,0.0027,0.0027,-0.0254,-0.031,-0.0318,-0.0146,-0.0159,-0.0892,-0.0222]];

        var Ovrl_2008 = [['x', '2008-01-22','2008-02-06','2008-03-10','2008-04-14','2008-05-23','2008-06-27','2008-07-15','2008-08-04','2008-09-29','2008-10-27','2008-11-20','2008-12-01'],
                        ['Drawdown',-0.1058,-0.0359,-0.042,0.0055,-0.0051,-0.0844,-0.0487,-0.0143,-0.1343,-0.2702,-0.2201,-0.0886]];

        var Ovrl_2009 = [['x', '2009-01-20','2009-02-27','2009-03-09','2009-04-01','2009-05-01','2009-06-22','2009-07-10','2009-08-17','2009-09-02','2009-10-02','2009-11-02','2009-12-08'],
                        ['Drawdown',-0.1065,-0.1041,-0.0779,0.0167,0.0049,-0.026,-0.0428,-0.0064,-0.0248,-0.0297,0.0064,-0.0032]];

        var Ovrl_2010 = [['x', '2010-01-29','2010-02-08','2010-03-01','2010-04-01','2010-05-26','2010-06-30','2010-07-02','2010-08-26','2010-09-01','2010-10-04','2010-11-16','2010-12-01'],
                        ['Drawdown',-0.0358,-0.0152,0.01,0.0073,-0.0987,-0.0535,-0.0074,-0.0473,0.0299,-0.0035,-0.0031]];

        var Ovrl_2011 = [['x', '2011-01-04','2011-02-02','2011-03-16','2011-04-18','2011-05-24','2011-06-15','2011-07-29','2011-08-08','2011-09-22','2011-10-03','2011-11-25','2011-12-19'],
                        ['Drawdown',0.0216,0.01,0.014,-0.0515,-0.0146,-0.0329,-0.0583,-0.0199,-0.1333,-0.0718,-0.0284,-0.0737]];

        var Ovrl_2012 = [['x', '2012-01-03','2012-02-01','2012-03-06','2012-04-10','2012-05-18','2012-06-01','2012-07-12','2012-08-02','2012-09-05','2012-10-24','2012-11-15','2012-12-28'],
                        ['Drawdown',-0.0326,0.0154,0.0092,-0.016,-0.0347,-0.0716,-0.0247,-0.0191,-0.0102,-0.0018,-0.0205,-0.0403]];

        var Ovrl_2013 = [['x', '2013-01-08','2013-02-25','2013-03-01','2013-04-18','2013-05-01','2013-06-24','2013-07-02','2013-08-27','2013-09-03','2013-10-08','2013-11-07','2013-12-13'],
                        ['Drawdown',-0.0083,0.0222,-0.0049,0.0024,-0.016,-0.0093,-0.0345,0.0051,-0.0313,0.0041,-0.0151,-0.0045]];

        var Ovrl_2014 = [['x', '2014-01-29','2014-02-03','2014-03-14','2014-04-11','2014-05-06','2014-06-03','2014-07-31','2014-08-07','2014-09-25','2014-10-16','2014-11-04','2014-12-16','2015-01-15'],
                        ['Drawdown',-0.0162,-0.0393,-0.023,-0.0091,-0.0296,-0.0086,0.0004,-0.0143,-0.0104,-0.0174,-0.0543,-0.0027,-0.045,-0.0312]];

function draw_Ovrl(ovrl_pase){
        var chart = c3.generate({
            bindto: '#ovrl',
            size: {
                height: 300,
            },
            data: {
                x: 'x',
               // xFormat: '%Y-%m', // 'xFormat' can be used as custom format of 'x'
                columns: ovrl_pase ,
                   type: 'bar',
                   colors: {
                    Drawdown : "#000000"
                }
            },
             bar: {
                width: {
                    ratio: 0.2 // this makes bar width 50% of length between ticks
                }

                // or
                //width: 100 // this makes bar width 100px
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d',
                        rotate:90,
                        fit: false
                    }
                    
                },
                y: {
                        max:0.1,
                        min:-0.4,
                        label: 'Drawdown value',
                        
                   }
            },
            grid: {
                y: {
                    lines: [
                        {value: 0, text: 'Drawdown value 0'}
                    ]
                }
            }
        });
}
