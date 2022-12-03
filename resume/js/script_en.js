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

})(jQuery);




// // 将节点插入指定标签之后
// // 创建一个p标签对象
// var para = document.createElement("p");
// // 创建文本对象
// var node = document.createTextNode("这是一个新的段落。");
// // 将文本对象加入p标签对象
// para.appendChild(node);
// // 选出id=div1的标签
// var element = document.getElementById("Study");
// // 在该标签之后加上刚创建的p标签
// element.appendChild(para);
// // 将节点插到指定标签之前
// var para = document.createElement("p");
// var node = document.createTextNode("这是一个新的段落。");
// para.appendChild(node);
// var element = document.getElementById("Study");
// var child = document.getElementById("p1");
// element.insertBefore(para, child);
// // 删除存在的标签
// // 以下代码是已知要查找的子元素，然后查找其父元素，再
// //删除这个子元素（删除节点必须知道父节点）：
// var parent = document.getElementById("Study");
// var child = document.getElementById("p1");
// parent.removeChild(child);
// // 替换标签
// var para = document.createElement("p");
// var node = document.createTextNode("这是一个新的段落。");
// para.appendChild(node);
// var parent = document.getElementById("Study");
// var child = document.getElementById("p1");
// parent.replaceChild(para, child);
// // 选出所有同一类型的标签 获取HTMLCollection 对象。
// function myFunction() {
//     // getElementsByTagName() 方法返回所有同一类型的标签
//     var myCollection = document.getElementsByTagName("p");
//     var i;
//     for (i = 0; i < myCollection.length; i++) {
//         // 对标签的属性进行修改
//         myCollection[i].style.color = "red";
//     }
// }



// // 将节点插入指定标签之后
// // 创建一个p标签对象
// var para = document.createElement("input");
// para.id = 'test1';
// para.type = 'button';
// para.value = '关闭图片';
// // 创建文本对象
// var node = document.createTextNode("这是一个新的按钮。");
// // 将文本对象加入p标签对象
// para.appendChild(node);
// // 选出id=div1的标签
// var element = document.getElementById("Study");
// // 在该标签之后加上刚创建的p标签
// element.appendChild(para);
// // 将节点插到指定标签之前
// var para = document.createElement("class");
// var node = document.createTextNode("这是一个新的按钮。");
// para.appendChild(node);
// var element = document.getElementById("Study");
// var child = document.getElementById("class");
// // var action = document.getElementById("test").type="button";
// element.insertBefore(para, child);




// // 删除存在的标签
// // 以下代码是已知要查找的子元素，然后查找其父元素，再
// //删除这个子元素（删除节点必须知道父节点）：
// var parent = document.getElementById("Study");
// var child = document.getElementById("class");
// parent.removeChild(child);
// // 替换标签
// var para = document.createElement("input");
// var node = document.createTextNode("这是一个新的段落。");
// para.appendChild(node);
// var parent = document.getElementById("Study");
// var child = document.getElementById("class");
// parent.replaceChild(para, child);
// // 选出所有同一类型的标签 获取HTMLCollection 对象。
// function myFunction() {
//     // getElementsByTagName() 方法返回所有同一类型的标签
//     var myCollection = document.getElementsByTagName("class");
//     var i;
//     for (i = 0; i < myCollection.length; i++) {
//         // 对标签的属性进行修改
//         myCollection[i].style.color = "red";
//     }
// }







function hiddenimg0() { 
  document.getElementById("img0").src =" "; 
} 
function hiddenimg0_5() { 
  document.getElementById("img0_5").src =" "; 
} 
function hiddenimg1() { 
  document.getElementById("img1").src =" "; 
} 
function hiddenvid1() { 
  document.getElementById("vid1").src =" ";
  document.getElementById("vid1").height = "0";
  document.getElementById("vid1").width  = "0";
  document.getElementById("vid1").frameborder = "0";
} 
function hiddenimg2() { 
  document.getElementById("img2").src =" "; 
} 


function schooReport() { 
  document.getElementById("img0").src = "./img/schooReport/成绩单.jpg"; 
  showClosePicture1();
} 


function NewMap() {
  document.getElementById("img0_5").src = "./img/project/NewMap.jpg"; 
  showClosePicture1_5();
}



function ComputerDesignCompetition3() { 
  document.getElementById("img1").src = "./img/competition/中国大学生计算机设计大赛 三等奖.jpg"; 
  showClosePicture2();
} 
function ComputerDesignCompetition2() { 
  document.getElementById("img1").src = "./img/competition/2020中国大学生计算机设计大赛-内蒙古省级赛二等奖-从未改变的传统.jpg"; 
  showClosePicture2();
} 
function ComputerDesignCompetition4() { 
  document.getElementById("img1").src = "./img/competition/2020中国大学生计算机设计大赛-内蒙古省级赛优秀奖-盲人读书.jpg"; 
  showClosePicture2();
} 
function ComputerDesignCompetition5() { 
  document.getElementById("img1").src = "./img/competition/2020中国大学生计算机设计大赛-内蒙古省级赛优秀奖-生命之源-水.jpg";
  showClosePicture2(); 
} 
function ComputerDesignCompetition5Vid() { 
  document.getElementById("vid1").src = "https://player.youku.com/embed/XNTkwMDA4NTgzNg=="; 
  document.getElementById("vid1").height = "400px";
  document.getElementById("vid1").width  = "100%";
  showCloseVideo1();
} 
function MCM() { 
  document.getElementById("img1").src = "./img/competition/2019数学建模竞赛 二等奖.jpg"; 
  showClosePicture2();
} 
function MathematicalCompetition() { 
  document.getElementById("img1").src = "./img/competition/第十二届全国大学生数学竞赛.jpg"; 
  showClosePicture2();
} 
function ProgrammingContest2020() { 
  document.getElementById("img1").src = "./img/competition/2020年中国大学生程序设计竞赛-内蒙古自治区大学生程序设计竞赛.jpg"; 
  showClosePicture2();
} 
function ProgrammingContest2021() { 
  document.getElementById("img1").src = "./img/competition/2021年中国大学生程序设计竞赛-内蒙古自治区大学生程序设计竞赛.jpg"; 
  showClosePicture2();
} 
function KnowledgeCompetition() { 
  document.getElementById("img1").src = "./img/competition/2020年赤峰学院首届科普知识竞赛 一等奖.jpg"; 
  showClosePicture2();
} 
function WebsiteDesignCompetition() { 
  document.getElementById("img1").src = "./img/competition/2018网页设计大赛.jpg"; 
  showClosePicture2();
} 
function PPTCompetition() { 
  document.getElementById("img1").src = "./img/competition/2018-2019第二学期第四届PPT大赛.jpg"; 
  showClosePicture2();
} 
function sjProgrammingContest() { 
  document.getElementById("img1").src = "./img/competition/2020年程序设计竞赛 二等奖.jpg"; 
  showClosePicture2();
} 


function ProvinceMeritStudent() { 
  document.getElementById("img2").src = "./img/honor/三好学生证书 - 内页2.jpg"; 
  showClosePicture3();
} 
function ExcellentGraduate() { 
  document.getElementById("img2").src = "./img/honor/2022内蒙古自治区高等学校优秀毕业生.jpeg"; 
  showClosePicture3();
} 
function ExcellentLeagueMember() { 
  document.getElementById("img2").src = "./img/honor/2019年优秀共青团员.jpg"; 
  showClosePicture3();
} 
function SchoolMeritStudent() { 
  document.getElementById("img2").src = "./img/honor/2018-2019三好学生.jpg"; 
  showClosePicture3();
} 
function SchoolExcellentGraduate() { 
  document.getElementById("img2").src = "./img/honor/2022年校级校级优秀毕业生.jpg"; 
  showClosePicture3();
} 
function ExcellentWorker1() { 
  document.getElementById("img2").src = "./img/honor/2018-2019第一学期易班荣誉证书.jpg"; 
  showClosePicture3();
} 
function ExcellentWorker2() { 
  document.getElementById("img2").src = "./img/honor/2018-2019第二学期易班荣誉证书.jpg"; 
  showClosePicture3();
} 
function NationalEncouragementScholarship() { 
  document.getElementById("img2").src = "./img/honor/2018-2019国家励志奖学金.jpg"; 
  showClosePicture3();
} 
function AutonomousRegionScholarship() { 
  document.getElementById("img2").src = "./img/honor/2020-2021学年度自治区奖学金.jpg"; 
  showClosePicture3();
} 
function FirstClassScholarshipOutstandingStudents1() { 
  document.getElementById("img2").src = "./img/honor/2018-2019一等优秀学生奖学金.jpg"; 
  showClosePicture3();
} 
function FirstClassScholarshipOutstandingStudents2() { 
  document.getElementById("img2").src = "./img/honor/2019-2020年一等优秀学生奖学金.jpg"; 
  showClosePicture3();
} 
function FirstClassScholarshipOutstandingStudents3() { 
  document.getElementById("img2").src = "./img/honor/2020-2021学年度三等优秀学生奖学金.jpg"; 
  showClosePicture3();
} 
function ScholarshipOnSocialWork1() { 
  document.getElementById("img2").src = "./img/honor/2018-2019社会工作奖.jpg"; 
  showClosePicture3();
} 
function ScholarshipOnSocialWork2() { 
  document.getElementById("img2").src = "./img/honor/2019-2020年社会工作奖学金.jpg"; 
  showClosePicture3();
} 




//显示关闭图片按钮1
function showClosePicture1() {
  if(document.getElementById("Close1")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close1';
    para.type = 'button';
    para.value = 'Close image';
    para.onclick = function() {
      hiddenimg0();
      delClosePicture1();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("CloseButton1");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("image0");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("CloseButton1");
    var child = document.getElementById("image0");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭图片按钮1
function delClosePicture1() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("CloseButton1");
  var child = document.getElementById("Close1");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("CloseButton1");
  var child = document.getElementById("Close1");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("image0");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}





//显示关闭图片按钮1_5
function showClosePicture1_5() {
  if(document.getElementById("Close1_5")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close1_5';
    para.type = 'button';
    para.value = 'Close image';
    para.onclick = function() {
      hiddenimg0_5();
      delClosePicture1_5();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("CloseButton1_5");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("image0_5");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("CloseButton1_5");
    var child = document.getElementById("image0_5");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭图片按钮1_5
function delClosePicture1_5() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("CloseButton1_5");
  var child = document.getElementById("Close1_5");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("CloseButton1_5");
  var child = document.getElementById("Close1_5");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("image0_5");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}








//显示关闭图片按钮2
function showClosePicture2() {
  if(document.getElementById("Close2")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close2';
    para.type = 'button';
    para.value = 'Close image';
    para.onclick = function() {
      hiddenimg1();
      delClosePicture2();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("allCompetition");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("image1");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("allCompetition");
    var child = document.getElementById("image1");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭图片按钮2
function delClosePicture2() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("allCompetition");
  var child = document.getElementById("Close2");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("allCompetition");
  var child = document.getElementById("Close2");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("image1");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}







//显示关闭图片按钮3
function showClosePicture3() {
  if(document.getElementById("Close3")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close3';
    para.type = 'button';
    para.value = 'Close image';
    para.onclick = function() {
      hiddenimg2();
      delClosePicture3();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("allhonor");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("image2");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("allhonor");
    var child = document.getElementById("image2");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭图片按钮3
function delClosePicture3() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("allhonor");
  var child = document.getElementById("Close3");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("allhonor");
  var child = document.getElementById("Close3");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("image2");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}







//显示关闭视频按钮2
function showCloseVideo1(){
  if(document.getElementById("Close2_1")) {
    
  } else {
    // 将节点插入指定标签之后
    // 创建一个p标签对象
    var para = document.createElement("input");
    para.id = 'Close2_1';
    para.type = 'button';
    para.value = 'Close video';
    para.onclick = function() {
      hiddenvid1();
      delCloseVideo1();
    };
    // 创建文本对象
    var node = document.createTextNode(" ");
    // 将文本对象加入p标签对象
    para.appendChild(node);
    // 选出id=Study的标签
    var element = document.getElementById("allCompetition");
    // 在该标签之后加上刚创建的input标签
    element.appendChild(para);
    // 将节点插到指定标签之前
    var para = document.createElement("img1");
    var node = document.createTextNode(" ");
    para.appendChild(node);
    var element = document.getElementById("allCompetition");
    var child = document.getElementById("img1");
    // var action = document.getElementById("test").type="button";
    element.insertBefore(para, child);
  }
}

//删除关闭视频按钮2
function delCloseVideo1() {
  // 删除存在的标签
  // 以下代码是已知要查找的子元素，然后查找其父元素，再删除这个子元素（删除节点必须知道父节点）：
  var parent = document.getElementById("allCompetition");
  var child = document.getElementById("Close2_1");
  parent.removeChild(child);
  // 替换标签
  var para = document.createElement("input");
  // var node = document.createTextNode("这是一个新的按钮。");
  para.appendChild(node);
  var parent = document.getElementById("allCompetition");
  var child = document.getElementById("Close2_1");
  parent.replaceChild(para, child);
  // 选出所有同一类型的标签 获取HTMLCollection 对象。
  function myFunction() {
    // getElementsByTagName() 方法返回所有同一类型的标签
    var myCollection = document.getElementsByTagName("img1");
    var i;
    for (i = 0; i < myCollection.length; i++) {
        // 对标签的属性进行修改
        myCollection[i].style.color = "red";
    }
  }
}