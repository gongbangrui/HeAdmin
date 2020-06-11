// typecho user V2.0
// 不暇 QQ1378283361 + 泽泽社长 485868654
function getElementsClass(classnames){ 
	var classobj= new Array();
	var classint=0;
	var tags=document.getElementsByTagName("*"); 
	for(var i in tags){
		if(tags[i].nodeType==1){
		if(tags[i].getAttribute("class") == classnames){
			classobj[classint]=tags[i];
			classint++;
			} 
		}
	}
	return classobj;
} 
$(function(){
    var changdu = $('#typecho-nav-list').children('.root').size();
  
  var one='',two='',three='',four='',five='';
  
    $('#typecho-nav-list').find('.child li').eq(0).each(function(){
$(this).remove();//菜单中删除概要
　　});
  
  $('#typecho-nav-list').find('.child').eq(0).each(function(){
one=$(this).html();
　　});
  $('#typecho-nav-list').find('.child').eq(1).each(function(){
two=$(this).html();
　　});
  $('#typecho-nav-list').find('.child').eq(2).each(function(){
three=$(this).html();
　　});
  $('#typecho-nav-list').find('.child').eq(3).each(function(){
four=$(this).html();
　　});
  if(changdu>4){var linshi="",icon="fa-ding";
  for(var i=4;i<changdu;i++){
     $('#typecho-nav-list').find('.child').eq(i).each(function(){
linshi="<ul class=\"menu-ul\">"+$(this).html()+"</ul>";
　　});
    $('#typecho-nav-list').find('.root').eq(i).find('.parent a').each(function(){
if($(this).html()=='TePass'){icon="fa-rmb";}   
five=five+"<li class=\"menu-li\"><a href=\"javascript:;\"><i class=\"fa "+icon+"\"></i>"+$(this).html()+"<i class=\"fa fa-angle-down right\"></i></a>"+linshi+"</li>";
　　});
  }
  }
   
             
	var UserInfo = "<div class=\"user-info\"><a href=\""+AdminLink+"\"><img src=\""+UserPic+"s=100\" /></a><p>欢迎您，<a href=\""+AdminLink+"\">"+UserName+"</a></p></div>";
  	if(UserGroup == "administrator"){
		var HtmlText="<div class=\"user-nav\"><ul><li><a href=\""+AdminLink+"index.php\"><i class=\"fa fa-dashboard\"></i>控制台</a></li><li class=\"menu-li\"><a href=\"javascript:;\"><i class=\"fa fa-paper-plane\"></i>全局模块<i class=\"fa fa-angle-down right\"></i></a><ul class=\"menu-ul\">"+one+"</ul></li><li class=\"menu-li\"><a href=\"javascript:;\"><i class=\"fa fa-pencil\"></i>快捷操作<i class=\"fa fa-angle-down right\"></i></a><ul class=\"menu-ul\">"+two+"</li></ul></li><li class=\"menu-li\"><a href=\"javascript:;\"><i class=\"fa fa-cube\"></i>内容管理<i class=\"fa fa-angle-down right\"></i></a><ul class=\"menu-ul\">"+three+"</ul></li><li class=\"menu-li\"><a href=\"javascript:;\"><i class=\"fa fa-gear\"></i>网站设置<i class=\"fa fa-angle-down right\"></i></a><ul class=\"menu-ul\">"+four+"</ul><li>"+five+"</ul></div>";
	}else if(UserGroup == "editor"||UserGroup == "contributor"){
		var HtmlText="<div class=\"user-nav\"><ul><li><a href=\""+AdminLink+"index.php\"><i class=\"fa fa-dashboard\"></i>控制台</a></li><li><a href=\""+AdminLink+"profile.php\"><i class=\"fa fa-gear\"></i>个人设置</a></li><li><a href=\""+AdminLink+"write-post.php\"><i class=\"fa fa-pencil\"></i>创建文章</a></li><li><a href=\""+AdminLink+"manage-posts.php\"><i class=\"fa fa-cube\"></i>管理文章</a></li><li><a href=\""+AdminLink+"/manage-comments.php\"><i class=\"fa fa-comments-o\"></i>管理评论</a></li></ul></div>";
    }else{
		var HtmlText="<div class=\"user-nav\"><ul><li><a href=\""+AdminLink+"index.php\"><i class=\"fa fa-dashboard\"></i>控制台</a></li><li><a href=\""+AdminLink+"profile.php\"><i class=\"fa fa-gear\"></i>个人设置</a></li></ul></div>";
    }
	var NavHtml = UserInfo+HtmlText;
	var Nav = document.getElementById('typecho-nav-list');
	if(UserGroup != ""){
		$('#typecho-nav-list').html(NavHtml);
      	var ToMain=getElementsClass("operate")[0];
        var Main=getElementsClass("main")[0];
        var ToNav=document.createElement('a');
        var width=document.body.clientWidth;
        ToNav.id="tonav";
        ToNav.href='javascript:;';
        ToNav.innerHTML='<i class="fa fa-bars"></i>'; 
        ToMain.appendChild(ToNav);
        var ToggleNav=document.createElement('tonav');
        tonav.onclick=function(){
            if(width>1000){
                if(Nav.style.display == "block"){
                    Nav.style.display="none";
                    ToMain.style.width="calc(100% - 15px)";
                    Main.style.width="100%";
                } else if(Nav.style.display == "none") {
                    Nav.style.display="block";
                    ToMain.style.width="calc(100% - 265px)";
                    Main.style.width="calc(100% - 270px)";
                } else{
                    Nav.style.display="none";
                    ToMain.style.width="calc(100% - 15px)";
                    Main.style.width="100%";
                }
            }else{
                if(Nav.style.display == "block"){
                    Nav.style.display="none";
                    ToMain.style.width="100%";
                    Main.style.width="100%";
                } else if(Nav.style.display == "none") {
                    Nav.style.display="block";
                    ToMain.style.width="100%";
                    Main.style.width="100%";
                } else{
                    Nav.style.display="block";
                    ToMain.style.width="100%";
                    Main.style.width="100%";
                }
            }
        }
	if (MenuTitle == "个人设置"){
		var avatar=getElementsClass("profile-avatar")[0];
		avatar.setAttribute("src",UserPic+"s=640");
		avatar.style.width="150px";
	}
    }else{
        var LoginMain=getElementsClass("i-logo")[0];
      	var Body=getElementsClass("body-100")[0];
      	var Cover=document.createElement('div');
      	Cover.id="cover";
        Body.appendChild(Cover);
        LoginMain.innerHTML="<img src=\""+SiteLink+"user/logo.png\" alt=\""+SiteName+"\"/>";
    }
  
$('#typecho-nav-list').find('li.focus').each(function(){
$(this).parent(".menu-ul").show();//当前默认展开
　　}); 
  
	$("body").on("click",".menu-li",function () {//当meun被点击
      if($(this).find(".menu-ul").is(":hidden")){
      $(".menu-ul").hide(200);//隐藏所有
      }
		$(this).find(".menu-ul").slideToggle(200);//打开/关闭当前   
	});
	$("body").on("click","#wmd-fullscreen-button",function () {
		$(".main").addClass("main-in");
	});
	$("body").on("click","#wmd-exit-fullscreen-button",function () {
		$(".main").removeClass("main-in");
	});
});
