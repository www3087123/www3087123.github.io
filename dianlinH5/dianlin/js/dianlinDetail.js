$('.buy').click(function() {
	wx.miniProgram.navigateTo({
		url: '/pages/dianlinOrder/dianlinOrder'
	})
})
function tab1() {
	$('.tab1').addClass('active');
	$('.tab2').removeClass('active');
	$('.tab3').show();
	$('.tab4').hide();
}

function tab2() {
	$('.tab1').removeClass('active');
	$('.tab2').addClass('active');
	$('.tab3').hide();
	$('.tab4').show();
}

$('.tabBox').click(function() {
	$(this).addClass('tabBoxA').siblings().removeClass('tabBoxA');
})

var chart = Highcharts.chart('container', {
	title: {
		text: null
	},
	credits: {
		enabled: false // 禁用版权信息
	},
	yAxis: {
		title: {
			text: null
		},
		tick: true
	},
	legend: {
		enabled: false,
	},
	plotOptions: {
		series: {
			label: {
				connectorAllowed: false
			},
			pointStart: 2010
		}
	},
	series: [{
		data: [1, 2, 3, 4, 5, 6, 7, 8]
	}],

});