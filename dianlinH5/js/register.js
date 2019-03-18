var clock = '';
var nums = "30";

function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
var invite = GetQueryString("invite");
//if(code.substr(0, 2)=="88"){
//	var invite = code.slice(2);
//}
function sendCode() {
	$('.cover').show();
	$('.sendMessage').html(nums + 's');
	clock = setInterval(doLoop, 1000); //一秒执行一次
}

function doLoop() {
	nums--;
	if(nums > 0) {
		$('.sendMessage').html(nums + "s")
	} else {
		clearInterval(clock); //清除js定时器
		$('.sendMessage').html("发送验证码");
		nums = 30; //重置时间
		$('.cover').hide();
	}
}

function register() {
	var myreg = /^1\d{10}$/; //手机号验证	
	var after = $(".password").val(); //密码
	var after2 = $(".test").val(); //验证码
	var before = $(".phone").val(); //手机号
	if(before == '') {
		layer.msg('手机号码不能为空！', {
			time: 2000
		});
	} else if(!myreg.test($(".phone").val())) {
		layer.msg('请输入有效的手机号码！', {
			time: 2000
		});
	} else if(after == '') {
		layer.msg('密码不能为空！', {
			time: 2000
		});

	} else if($(".password").val().length < 6) {
		layer.msg('密码长度应在6-16字符！', {
			time: 2000
		});
	} else if($(".password").val().length > 16) {
		layer.msg('密码长度应在6-16字符！', {
			time: 2000
		});
	} else {
		CheckPassWord($(".password").val())
	}

}

$('.sendMessage').click(function() {
	var before = $(".phone").val(); //手机号		
	var myreg = /^1\d{10}$/; //手机号验证	
	if(before == '') {
		layer.msg('手机号码不能为空！', {
			time: 2000
		});
	} else if(!myreg.test($(".phone").val())) {
		layer.msg('请输入有效的手机号码！', {
			time: 2000
		});
	} else {
		var MD5 = new Hashes.MD5;	
		var mdF = MD5.hex("doforest"+before).toUpperCase();
		var SHA256 =  new Hashes.SHA256;
		var SHA256s = SHA256.hex(mdF);
		sendCode();//倒计时
		$.ajax({
			type: "post",
			url: url + "/ucenter/user/sms.json",
			data: {
				'phone': $(".phone").val(),
				'templateCode': '1',
				'key':SHA256s
			},
			dataType: "json",
			success: function(data) {
				console.log(data)				
			},
			error: function(data) {
				layer.msg('网络错误！', {
					time: 2000
				});
			}
		})
	}

})

function CheckPassWord(password) {
	var str = password;
	if($(".test").val() == '') {
		layer.msg('验证码不能为空！', {
			time: 2000
		});
	} else {
		$.ajax({
			type: "post",
			url: url + "/reg.json",
			data: {
				phone: $(".phone").val(),
				password: $(".password").val(),
				code: $(".test").val(),
				invite:invite
			},
			dataType: "json",
			success: function(data) {
				if(data.result == true) {
					console.log(data)
					var nickName = data.data.user.nickName;
					window.location.href = "register2.html?nickName=" + nickName;
				}
				if(data.result == false) {
					layer.msg(data.msg, {
						time: 2000
					});
				}
			},
			error: function(data) {
				layer.msg('网络错误！', {
					time: 2000
				});
			}
		})
	}

}