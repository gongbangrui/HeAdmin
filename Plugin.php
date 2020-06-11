<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
/**
 * HeAdmin是一款typecho后台美化插件<style>#plugin-HeAdmin td:first-child{color: #1a84d0;}</style>
 * 
 * @package HeAdmin
 * @author 南玖
 * @version 1.0.0
 * @link https://ztongyang.cn
 */
class HeAdmin_Plugin implements Typecho_Plugin_Interface
{
    /**
     * 激活插件方法,如果激活失败,直接抛出异常
     * 
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function activate()
    {
        Typecho_Plugin::factory('admin/header.php')->header = array('HeAdmin_Plugin', 'render');
        Typecho_Plugin::factory('admin/footer.php')->end = array('HeAdmin_Plugin', 'footerjs');
    }
    
    /**
     * 禁用插件方法,如果禁用失败,直接抛出异常
     * 
     * @static
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function deactivate(){}
    
    /**
     * 获取插件配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form 配置面板
     * @return void
     */
    public static function config(Typecho_Widget_Helper_Form $form){}
    
    /**
     * 个人用户的配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form
     * @return void
     */
    public static function personalConfig(Typecho_Widget_Helper_Form $form){}
    
    /**
     * 插件实现方法
     * 
     * @access public
     * @return void
     */
    public static function render($hed)
    {
    $url=Helper::options()->pluginUrl.'/HeAdmin/';

if (!Typecho_Widget::widget('Widget_User')->hasLogin()){
    $hed=$hed. '<link rel="stylesheet" href="'.$url.'login.css">';
}else{
    define('__TYPECHO_GRAVATAR_PREFIX__', '//'.'cdn.v2ex.com/gravatar'.'/');
    $user=Typecho_Widget::widget('Widget_User');
    $menu=Typecho_Widget::widget('Widget_Menu')->to($menu);
    $email =$user->mail; 
    if($email){
        $c=strtolower($email);$f=str_replace('@qq.com','',$c);
        if(strstr($c,"qq.com")&&is_numeric($f)&&strlen($f)<11&&strlen($f)>4){
            $tx= '//q1.qlogo.cn/g?b=qq&nk='.$f.'&';
        }else{
            $d=md5($c);
            $tx='//'.'cdn.v2ex.com/gravatar'.'/'.$d.'?';
        }
    }else{
        $tx= $url.'logo/tx.jpeg';
        
    } 
  
$hed=$hed. '<link rel="stylesheet" href="'.$url.'user/font.css?v=1.7"">
<link rel="stylesheet" href="'.$url.'user/user.css?v=1.7">

<script>
		var UserLink="'.Helper::options()->adminUrl.'/profile.php";
		var UserPic="'.$tx.'";
		var AdminLink="'.Helper::options()->adminUrl.'";
		var SiteLink="'.Helper::options()->siteUrl.'";
		var UserName="'.$user->screenName.'";
		var UserGroup="'.$user->group.'";
		var SiteName="'.Helper::options()->title.'";
		var MenuTitle="'.strip_tags($menu->title).'";
</script>';
}
    return $hed;
}
  
public static function footerjs()
    {  
    $url=Helper::options()->pluginUrl.'/HeAdmin/';
    if (Typecho_Widget::widget('Widget_User')->hasLogin()){
        echo '<script src="'.$url.'user/user.js?v=1.80"></script>';
    }else{
        echo '<script src="'.$url.'login.js"></script>';   
  }
    }
  
  
}