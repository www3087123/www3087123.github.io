$('.buy').click(function() {
	wx.miniProgram.navigateTo({
		url: '/pages/confirmOrder/confirmOrder'
	})
})