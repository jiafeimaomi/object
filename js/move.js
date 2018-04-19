

function Ball(id){
  this.ball = document.getElementById(id);
  this.width = '';
  this.height = ''
  var _this = this;
  setTimeout(()=>{
    _this.show();
    _this.ball.onclick = function(){
      _this.turnBig();
    }
  }, 1000);
}

Ball.prototype.show = function(){
  this.ball.style.display = 'block';
}

Ball.prototype.turnBig= function(){
  this.ball.classList.add('turnBig');
  setTimeout(()=>{
    this.hide();
  }, 2000)
}

Ball.prototype.hide = function(){
  this.ball.style.display = 'none';
}
