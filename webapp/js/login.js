$(function(){
	$('#pwd').focus(function(){
		$('#login #owl-login').addClass("owl-login");
	}).blur(function(){
		$('#login #owl-login').removeClass("owl-login");
	});
	$("#myAlert").hide();
//	获取登录数据
	$("#btn-login").on("click",function(){
		var user=$("#login").serialize();
		//返回了一个json字符串
		var str=paramToJson(user);
        var data=strToJson(str);
	//	用ajax提交数据
		ajaxEvent("post",data,"/loginaction",function(data){
            //返回的data是一个String，所以需要把String转换为json
            var json=strToJson(data);
            if(json.desc=="0"){
                $("#myAlert").show().text("登录成功").slideDown(400);
                //	本地存储数据
                window.localStorage.setItem("userid",json.userid);
                window.localStorage.setItem("username",json.username);
                setTimeout(function(){
                    $("#myAlert").slideUp(400);
                },1500);
                //	进行页面跳转
                window.location.href="../home.html";
            }else if(json.desc=="1"){
                //密码错误
                $("#myAlert").show().text("密码错误").slideDown(400);
                setTimeout(function(){
                    $("#myAlert").slideUp(400);
                },1500);
            }else{
                //用户名不存在
                $("#myAlert").show().text("用户名不存在").slideDown(400);
                setTimeout(function(){
                    $("#myAlert").slideUp(400);
                },1500);
            }
		});
	});
});
// $(function(){
// 	$("#login").bootstrapValidator(function(){
// 		message:'这个值没有被验证',
// 		feedbackIcons:{
// 			valid:'glyphicon glyphicon-ok',
//          invalid:'glyphicon glyphicon-remove',
//          validating:'glyphicon glyphicon-refresh'
// 		},
// 		fields:{
// 			 username: {
//              message: '用户名还没有验证',
//              validators:{
//                  notEmpty: {
//                      message: '用户名不能为空'
//                  },
//                  stringLength: {
//                      min: 6,
//                      max: 18,
//                      message: '用户名长度在6到18之间'
//                  }
//              }
//        },
//            password:{
//         		message: '密码还没有验证',
//              validators: {
//                  notEmpty: {
//                      message: '新密码不能为空'
//                  },
//                  stringLength: {
//                      min: 4,
//                      max: 18,
//                      message: '密码长度在4到18之间'
//                  },
//                  regexp: {
//                      regexp:/^[a-zA-Z0-9_]+$/,
//                      message:'用户名只能包含英文、数字和下划线'
//              	}
//              }
//          }
// 		}
// 	}).on("success.form.bv",function(e){
// 		// Prevent form submission
//      e.preventDefault();
//      // Get the form instance
//      var $form = $(e.target);
//      // Get the BootstrapValidator instance
//      var bv = $form.data('bootstrapValidator');
//      // Use Ajax to submit form data
//      $.post("/Account/Register", $form.serialize(), function (data) {
//          if (data.Status == "ok") {
//              window.location.href = "#";
//          }
//          else if (data.Status == "error") {
//              alert(data.Message);
//          }
//          else {
//              alert("未知错误");
//          }
// 		});
// 	});
// });
