(function($){
  // Caption
  $('.article-entry, .article-inner').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox') || $(this).parent().is('a')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a class="fancybox" href="' + this.src + '" data-fancybox=\"gallery\" data-caption="' + alt + '"></a>')
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }
  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

  var startMobileNavAnim = function(){
    isMobileNavAnim = true;
  };

  var stopMobileNavAnim = function(){
    setTimeout(function(){
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }

  var nav = document.getElementById('main-nav-toggle');
  nav.onclick = function(){
    if (isMobileNavAnim) return;

    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  };

  var wrap = document.getElementById('wrap');
  wrap.onclick = function(){
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;

    $container.removeClass('mobile-nav-on');
  };

  // code block copy button
  var codes = document.getElementsByClassName('code');
  for (var i = 0; i < codes.length; ++i) {
    var copy_button = document.createElement('div');
    copy_button.className = "copy-button";
    copy_button.innerHTML = "Copy";
    new ClipboardJS('.copy-button', {
      target: (trigger) => {
        return trigger.nextSibling;
      }
    });
    copy_button.onclick = (e) => {
      var btn = e.target;
      btn.innerHTML = "Copied!";
      setTimeout(function() {
        btn.innerHTML = "Copy";
      }, 1000);
    }
    codes[i].parentElement.insertBefore(copy_button, codes[i]);
  }


  // 禁止拖动图片
  $("img").mousedown(function(){
    return false;
  });

})(jQuery);





function printdata() {
  window.document.body.innerHTML=window.document.getElementById("print").innerHTML;
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    pagesetup_null();
  }
  window.print();
  // location.reload();
}
 function pri() {
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        pagesetup_null();
    }
    window.print();
}
function pagesetup_null() {
    var hkey_root, hkey_path, hkey_key;
    hkey_root = "HKEY_CURRENT_USER";
    hkey_path = "\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
    try {
        var RegWsh = new ActiveXObject("WScript.Shell");
        hkey_key = "header";
        RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
        hkey_key = "footer";
        RegWsh.RegWrite(hkey_root + hkey_path + hkey_key, "");
    } catch (e) { }
}





function hiddenimg_EduBg() { 
  document.getElementById("img_EduBg").src =" "; 
} 
function hiddenimg_StuLead() { 
  document.getElementById("img_StuLead").src =" "; 
} 
function hiddenimg_ProExp() { 
  document.getElementById("img_ProExp").src =" "; 
} 
function hiddenvid_ProExp() { 
  document.getElementById("vid_ProExp").src =" ";
  document.getElementById("vid_ProExp").height = "0";
  document.getElementById("vid_ProExp").width  = "0";
  document.getElementById("vid_ProExp").frameborder = "0";
} 
function hiddenimg_ConWin() { 
  document.getElementById("img_ConWin").src =" "; 
} 
function hiddenvid_ConWin() { 
  document.getElementById("vid_ConWin").src =" ";
  document.getElementById("vid_ConWin").height = "0";
  document.getElementById("vid_ConWin").width  = "0";
  document.getElementById("vid_ConWin").frameborder = "0";
} 
function hiddenimg_Honor() { 
  document.getElementById("img_Honor").src =" "; 
} 










function schoolReport() { 
  document.getElementById("img_EduBg").src = "./img/schoolReport/成绩单.jpg"; 
  showClosePicture_EduBg();
} 





function CampusVoice() {
  document.getElementById("img_StuLead").src = "./img/project/StudentLeaders/CampusVoice.png"; 
  showClosePicture_StuLead();
}
function NewMap() {
  document.getElementById("img_StuLead").src = "./img/project/StudentLeaders/NewMap.jpg"; 
  showClosePicture_StuLead();
}
function WelcomePoster() {
  document.getElementById("img_StuLead").src = "./img/project/StudentLeaders/WelcomePoster.jpg"; 
  showClosePicture_StuLead();
}




function ProjectExperienceVid() { 
  document.getElementById("vid_ProExp").src = "https://player.youku.com/embed/XNTkwMDA4NTgzNg=="; 
  document.getElementById("vid_ProExp").height = "400px";
  document.getElementById("vid_ProExp").width  = "100%";
  showCloseVideo_ProExp();
} 
function ReadingBlindUML() {
  document.getElementById("img_ProExp").src = "./img/project/ProjectExperience/ReadingBlindUML.png"; 
  showClosePicture_ProExp();
}





function ComputerDesignCompetition3() { 
  document.getElementById("img_ConWin").src = "./img/competition/中国大学生计算机设计大赛 三等奖.jpg"; 
  showClosePicture_ConWin();
} 
function ComputerDesignCompetition2() { 
  document.getElementById("img_ConWin").src = "./img/competition/2020中国大学生计算机设计大赛-内蒙古省级赛二等奖-从未改变的传统.jpg"; 
  showClosePicture_ConWin();
} 
function ComputerDesignCompetition4() { 
  document.getElementById("img_ConWin").src = "./img/competition/2020中国大学生计算机设计大赛-内蒙古省级赛优秀奖-盲人读书.jpg"; 
  showClosePicture_ConWin();
} 
function ComputerDesignCompetition5() { 
  document.getElementById("img_ConWin").src = "./img/competition/2020中国大学生计算机设计大赛-内蒙古省级赛优秀奖-生命之源-水.jpg";
  showClosePicture_ConWin(); 
} 
function ComputerDesignCompetition5Vid() { 
  document.getElementById("vid_ConWin").src = "https://player.youku.com/embed/XNTkwMDA4NTgzNg=="; 
  document.getElementById("vid_ConWin").height = "400px";
  document.getElementById("vid_ConWin").width  = "100%";
  showCloseVideo_ConWin();
} 
function MCM() { 
  document.getElementById("img_ConWin").src = "./img/competition/2019数学建模竞赛 二等奖.jpg"; 
  showClosePicture_ConWin();
} 
function MathematicalCompetition() { 
  document.getElementById("img_ConWin").src = "./img/competition/第十二届全国大学生数学竞赛.jpg"; 
  showClosePicture_ConWin();
} 
function ProgrammingContest2020() { 
  document.getElementById("img_ConWin").src = "./img/competition/2020年中国大学生程序设计竞赛-内蒙古自治区大学生程序设计竞赛.jpg"; 
  showClosePicture_ConWin();
} 
function ProgrammingContest2021() { 
  document.getElementById("img_ConWin").src = "./img/competition/2021年中国大学生程序设计竞赛-内蒙古自治区大学生程序设计竞赛.jpg"; 
  showClosePicture_ConWin();
} 
function KnowledgeCompetition() { 
  document.getElementById("img_ConWin").src = "./img/competition/2020年赤峰学院首届科普知识竞赛 一等奖.jpg"; 
  showClosePicture_ConWin();
} 
function WebsiteDesignCompetition() { 
  document.getElementById("img_ConWin").src = "./img/competition/2018网页设计大赛.jpg"; 
  showClosePicture_ConWin();
} 
function WebsiteDesignCompetitionProject() { 
  document.getElementById("img_ConWin").src = "./img/project/ContestWinning/WebsiteDesign.jpg"; 
  showClosePicture_ConWin();
} 
function PPTCompetition() { 
  document.getElementById("img_ConWin").src = "./img/competition/2018-2019第二学期第四届PPT大赛.jpg"; 
  showClosePicture_ConWin();
} 
function sjProgrammingContest() { 
  document.getElementById("img_ConWin").src = "./img/competition/2020年程序设计竞赛 二等奖.jpg"; 
  showClosePicture_ConWin();
} 





function ProvinceMeritStudent() { 
  document.getElementById("img_Honor").src = "./img/honor/三好学生证书 - 内页2.jpg"; 
  showClosePicture_Honor();
} 
function ExcellentGraduate() { 
  document.getElementById("img_Honor").src = "./img/honor/2022内蒙古自治区高等学校优秀毕业生.jpeg"; 
  showClosePicture_Honor();
} 
function ExcellentLeagueMember() { 
  document.getElementById("img_Honor").src = "./img/honor/2019年优秀共青团员.jpg"; 
  showClosePicture_Honor();
} 
function SchoolMeritStudent() { 
  document.getElementById("img_Honor").src = "./img/honor/2018-2019三好学生.jpg"; 
  showClosePicture_Honor();
} 
function SchoolExcellentGraduate() { 
  document.getElementById("img_Honor").src = "./img/honor/2022年校级校级优秀毕业生.jpg"; 
  showClosePicture_Honor();
} 
function ExcellentWorker1() { 
  document.getElementById("img_Honor").src = "./img/honor/2018-2019第一学期易班荣誉证书.jpg"; 
  showClosePicture_Honor();
} 
function ExcellentWorker2() { 
  document.getElementById("img_Honor").src = "./img/honor/2018-2019第二学期易班荣誉证书.jpg"; 
  showClosePicture_Honor();
} 
function NationalEncouragementScholarship() { 
  document.getElementById("img_Honor").src = "./img/honor/2018-2019国家励志奖学金.jpg"; 
  showClosePicture_Honor();
} 
function AutonomousRegionScholarship() { 
  document.getElementById("img_Honor").src = "./img/honor/2020-2021学年度自治区奖学金.jpg"; 
  showClosePicture_Honor();
} 
function FirstClassScholarshipOutstandingStudents1() { 
  document.getElementById("img_Honor").src = "./img/honor/2018-2019一等优秀学生奖学金.jpg"; 
  showClosePicture_Honor();
} 
function FirstClassScholarshipOutstandingStudents2() { 
  document.getElementById("img_Honor").src = "./img/honor/2019-2020年一等优秀学生奖学金.jpg"; 
  showClosePicture_Honor();
} 
function FirstClassScholarshipOutstandingStudents3() { 
  document.getElementById("img_Honor").src = "./img/honor/2020-2021学年度三等优秀学生奖学金.jpg"; 
  showClosePicture_Honor();
} 
function ScholarshipOnSocialWork1() { 
  document.getElementById("img_Honor").src = "./img/honor/2018-2019社会工作奖.jpg"; 
  showClosePicture_Honor();
} 
function ScholarshipOnSocialWork2() { 
  document.getElementById("img_Honor").src = "./img/honor/2019-2020年社会工作奖学金.jpg"; 
  showClosePicture_Honor();
} 
function CSDN2022BlogStar() { 
  document.getElementById("img_Honor").src = "./img/honor/CSDN2022BlogStar.png"; 
  showClosePicture_Honor();
} 









//显示关闭图片按钮 EduBg (教育背景)
function showClosePicture_EduBg() {
  if(document.getElementById("Close_EduBg")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close_EduBg';
    para.type = 'button';
    para.value = '关闭图片';
    para.onclick = function() {
      hiddenimg_EduBg();
      delClosePicture_EduBg();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("CloseButton_EduBg");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("image_EduBg");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("CloseButton_EduBg");
    var child = document.getElementById("image_EduBg");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭图片按钮 EduBg (教育背景)
function delClosePicture_EduBg() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("CloseButton_EduBg");
  var child = document.getElementById("Close_EduBg");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("CloseButton_EduBg");
  var child = document.getElementById("Close_EduBg");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("image_EduBg");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}










//显示关闭图片按钮 StuLead (学生工作)
function showClosePicture_StuLead() {
  if(document.getElementById("Close_StuLead")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close_StuLead';
    para.type = 'button';
    para.value = '关闭图片';
    para.onclick = function() {
      hiddenimg_StuLead();
      delClosePicture_StuLead();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("CloseButton_StuLead");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("image_StuLead");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("CloseButton_StuLead");
    var child = document.getElementById("image_StuLead");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭图片按钮 StuLead (学生工作)
function delClosePicture_StuLead() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("CloseButton_StuLead");
  var child = document.getElementById("Close_StuLead");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("CloseButton_StuLead");
  var child = document.getElementById("Close_StuLead");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("image_StuLead");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}










//显示关闭图片按钮 ProExp (项目经历)
function showClosePicture_ProExp() {
  if(document.getElementById("Close_ProExp")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close_ProExp';
    para.type = 'button';
    para.value = '关闭图片';
    para.onclick = function() {
      hiddenimg_ProExp();
      delClosePicture_ProExp();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("CloseButton_ProExp");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("image_ProExp");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("CloseButton_ProExp");
    var child = document.getElementById("image_ProExp");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭图片按钮 ProExp (项目经历)
function delClosePicture_ProExp() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("CloseButton_ProExp");
  var child = document.getElementById("Close_ProExp");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("CloseButton_ProExp");
  var child = document.getElementById("Close_ProExp");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("image_ProExp");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}





//显示关闭视频按钮 ProExp (项目经历)
function showCloseVideo_ProExp(){
  if(document.getElementById("Close_ProExp_vid")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close_ProExp_vid';
    para.type = 'button';
    para.value = '关闭视频';
    para.onclick = function() {
      hiddenvid_ProExp();
      delCloseVideo_ProExp();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("CloseButton_ProExp");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("img_ProExp");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("CloseButton_ProExp");
    var child = document.getElementById("img_ProExp");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭视频按钮 ProExp (项目经历)
function delCloseVideo_ProExp() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("CloseButton_ProExp");
  var child = document.getElementById("Close_ProExp_vid");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("CloseButton_ProExp");
  var child = document.getElementById("Close_ProExp_vid");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("img_ProExp");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}










//显示关闭图片按钮 ConWin (竞赛获奖)
function showClosePicture_ConWin() {
  if(document.getElementById("Close_ConWin")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close_ConWin';
    para.type = 'button';
    para.value = '关闭图片';
    para.onclick = function() {
      hiddenimg_ConWin();
      delClosePicture_ConWin();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("CloseButton_ConWin");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("image_ConWin");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("CloseButton_ConWin");
    var child = document.getElementById("image_ConWin");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭图片按钮 ConWin (竞赛获奖)
function delClosePicture_ConWin() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("CloseButton_ConWin");
  var child = document.getElementById("Close_ConWin");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("CloseButton_ConWin");
  var child = document.getElementById("Close_ConWin");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("image_ConWin");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}





//显示关闭视频按钮 ConWin (竞赛获奖)
function showCloseVideo_ConWin(){
  if(document.getElementById("Close_ConWin_vid")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close_ConWin_vid';
    para.type = 'button';
    para.value = '关闭视频';
    para.onclick = function() {
      hiddenvid_ConWin();
      delCloseVideo_ConWin();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("CloseButton_ConWin");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("img_ConWin");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("CloseButton_ConWin");
    var child = document.getElementById("img_ConWin");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭视频按钮 ConWin (竞赛获奖)
function delCloseVideo_ConWin() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("CloseButton_ConWin");
  var child = document.getElementById("Close_ConWin_vid");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("CloseButton_ConWin");
  var child = document.getElementById("Close_ConWin_vid");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("img_ConWin");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}










//显示关闭图片按钮 Honor (获得荣誉)
function showClosePicture_Honor() {
  if(document.getElementById("Close_Honor")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close_Honor';
    para.type = 'button';
    para.value = '关闭图片';
    para.onclick = function() {
      hiddenimg_Honor();
      delClosePicture_Honor();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("CloseButton_Honor");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("image_Honor");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("CloseButton_Honor");
    var child = document.getElementById("image_Honor");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭图片按钮 Honor (获得荣誉)
function delClosePicture_Honor() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("CloseButton_Honor");
  var child = document.getElementById("Close_Honor");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("CloseButton_Honor");
  var child = document.getElementById("Close_Honor");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("image_Honor");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}