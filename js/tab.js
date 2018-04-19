
//面向过程的写法：
var oTabBox1  = document.getElementById('tabBox1');

var tabBtn = oTabBox1.getElementsByTagName('input');

var tabDiv = oTabBox1.getElementsByTagName('div');


for(let i=0, len = tabBtn.length; i< len; i++){
  tabBtn[i].onclick= function(){
    for(let j = 0, len=tabDiv.length; j<len; j++){
      tabDiv[j].style.display = 'none';
    }
    tabDiv[i].style.display = 'block';
  }
}

//面向对象的写法：

function Tab(id){
  var oTabBox = document.getElementById(id);
  this.tabBtn = oTabBox.getElementsByTagName('input');
  this.tabDiv = oTabBox.getElementsByTagName('div');
  for(let i=0, len=this.tabBtn.length; i<len; i++){
    var _this = this;
    this.tabBtn[i].onclick = function(){
      _this.clickBtn(this, i)
    }
  }
}
Tab.prototype.clickBtn = function(btn, index){
  for(let i=0, len=this.tabDiv.length; i<len; i++){
    this.tabDiv[i].style.display = 'none';
    this.tabBtn[i].className = '';
  }
  this.tabDiv[index].style.display = 'block';
  this.tabBtn[index].className = 'active';
}
