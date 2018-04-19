function Drag(id){
  this.oDrag = document.getElementById(id);
  // this.winWidth = document.documentElement.clientWidth || document.body.clientWidth;
  this.winWidth = document.body.clientWidth;
  this.winHeight = document.documentElement.clientHeight || document.body.clientHeight;
  this.oDragWidth = this.oDrag.clientWidth;
  this.oDragHeight = this.oDrag.clientHeight;
  this.disX = 0;
  this.disY = 0;
  var _this = this;
  this.oDrag.onmousedown = function(event){
    _this.fnDown(event);
  }
} 

Drag.prototype.fnDown = function(event){
  // console.log('event-fnDown:', event);
  var event = event || window.event;
  var clientX = event.clientX, clientY = event.clientY;
  this.offsetLeft = this.oDrag.offsetLeft;
  this.offsetTop = this.oDrag.offsetTop;
  console.log('this.offsetLeft:', this.offsetLeft, "this.offsetTop:", this.offsetTop);
  this.disX = clientX - this.offsetLeft;
  this.disY = clientY - this.offsetTop;
  var self = this;
  document.onmousemove = function(event){
    self.fnMove(event);
  }
  document.onmouseup = function(){
    self.fnUp();
  }
}

Drag.prototype.fnMove = function(event){
  let clientX = event.clientX, clientY = event.clientY, curLeft = 0, curTop = 0;
  if(clientX <= this.disX){
    curLeft = 0;
  }else if( clientX >=this.winWidth-this.oDragWidth){
    curLeft = this.winWidth-this.oDragWidth; 
    // curLeft = clientX - this.disX 
  }else{
    curLeft = clientX - this.disX 
  }
  if(clientY <= this.disY){
    curTop = 0;
  }else if( clientY >=this.winHeight-this.oDragHeight){
    curTop = this.winHeight-this.oDragHeight; 
  }else{
    curTop = clientY - this.disY 
  }
  this.oDrag.style.left = curLeft + 'px';
  this.oDrag.style.top = curTop + 'px';
  console.log('this.oDrag.style.left:', this.oDrag.style.left, "this.oDrag.style.top:", this.oDrag.style.top);
}

Drag.prototype.fnUp = function(event){
  document.onmousemove = null;
  document.onmouseup = null;
}