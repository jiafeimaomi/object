(function() {
  /***
   * 信息提示组件Toast v1.0
   * @param {Object} container 内容容器(必填)
   * @param {Object} content 文字内容(可选)
   * @param {Object} duration 显示时长(可选)
   * 使用方法
   * var toast = new Toast("toast", "你好，对话框");
   * toast.show();(支持回调函数)
   */
  function Toast(container, content, duration) {
      this.container = document.getElementById(container);
      this.content = content || "这是一段对话";
      this.duration = duration || 2000;
  }

  Toast.prototype.show = function(callback) {
      this.callback = callback || function() {};
      this.container.style.opacity = 1;
      this.container.style.display = "block";
      this.container.innerHTML = this.content;

      setTimeout(function() {
          this.callback && this.callback();
          this.hide();
      }.bind(this), this.duration);

      return this;
  }

  Toast.prototype.hide = function(callback) {
      this.callback = callback || function() {};

      this.container.style.display = "none";
      this.callback && this.callback();
      return this;
  }

  window.Toast = Toast;

})(window);