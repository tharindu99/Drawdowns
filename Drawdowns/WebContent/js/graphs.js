function drawScatterPlot(json_object,index_dates,year){
	//this function draws the scatter plot.
	var yearmin = year+"-01-01";
	year++;
	var yearmax = year+"-01-01";
	var chart1 = c3.generate({
		bindto: '#scatter_plot',
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
			json:json_object,
			mimeType: 'json',
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
				min : yearmin,
				max : yearmax,
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
		grid: {
			x: {
				lines:index_dates,
			},
		},
		subchart: {
			show: true
		},
    
	});
}
function drawSummaryGraph(json_ary,bindvalue){
	var chart2=c3.generate({
	    bindto:bindvalue,
	    data:{
	        xs: {
	            count: 'year',
	        },
	        json:json_ary,
	        mimeType: 'json',
	        type : 'bar',
	    },
	    size: {
	            height: 220
	    },
	    axis:{
	    	x:{
	    		label: 'year',
	    		tick: {
	    		      culling: {
	    		    	  max : 1,
	    		      },
	    		      rotate: 90,
	                  multiline: false,
	    		},
	    	},
	        y:{
	            padding : 0,
	            //max : 2300,
	        },
	    },
	});
}

function drawIndex(json_ary){
	var chart3=c3.generate({
	    bindto:'#barIndex',
	    data:{
	        xs: {
	            value: 'date',
	        },
	        json:json_ary,
	        mimeType: 'json',
	        type : 'bar',
	    },
	    size: {
	            height: 220
	    },
	    bar: {
            width: {
                ratio: 0.2 
            }
        },
	    axis:{
	    	x: {
				type: 'timeseries',
				label: 'Time',
				tick: {
					format: '%Y-%m-%d',
					rotate:90,
					fit: false
				},
			},
	    	
	        y:{
	            padding : 0,
	            //max : 2300,
	        },
	    },
	    grid: {
            y: {
                lines: [
                    {value: 0, text: 'Drawdown value 0'}
                ]
            }
        },
	});
}