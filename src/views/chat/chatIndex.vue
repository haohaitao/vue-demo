<template>
  <div class="chat_wrapper">
    <blockquote style="margin-top: 100px; text-align: center">
      Websocket是一种用于H5浏览器的实时通讯协议，可以做到数据的实时推送，本页面基于Websocket制作。
      <p>
        <el-input
          placeholder="输入一个昵称"
          v-model="username"
          style="width: 280px"
        >
          <template slot="prepend">昵称</template>
        </el-input>
        <el-button
          type="success"
          v-if="!wsObject.readyState && wsObject.readyState !== 0"
          @click="btnLink"
          >连接</el-button
        >
        <el-button type="info" v-if="wsObject.readyState === 0"
          >连接中</el-button
        >
        <el-button
          type="danger"
          v-if="wsObject.readyState && wsObject.readyState === 1"
          @click="closeBtn"
          >断开</el-button
        >
      </p>
      <small>
        <cite title="Source Title">在线聊天室</cite>
      </small>
    </blockquote>
    <div class="side_wrapper">
      <div class="panel panel-default chat_side">
        <div class="panel-heading">
          <h3 class="panel-title">
            当前在线人数：
            <span>{{ online_total }}</span>
          </h3>
        </div>
        <!-- 用户列表 -->
        <div class="panel-body chat_list" id="user_list"></div>
      </div>
      <!-- 内容 -->
      <div class="panel panel-success chat_content">
        <div class="panel-heading">
          <h3 class="panel-title">公共聊天室</h3>
        </div>
        <div ref="content" class="panel-body public_content">
          <div class="panel-body" id="msg_list"></div>
        </div>
      </div>
      <!-- 提交栏 -->
      <div class="send_msg">
        <div class="send_msg_main">
          <div class="input-group">
            <input
              type="text"
              class="form-control input-group-lg"
              style="height: 80px"
              id="msg_box"
              @keyup.enter="confirm"
            />
            <span class="input-group-btn">
              <button
                class="btn btn-default"
                type="button"
                style="height: 80px; width: 90px"
                @click="send"
              >
                发送
              </button>
            </span>
          </div>
          <!-- /input-group -->
        </div>
        <!-- /.col-lg-6 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "online_chat",
  data() {
    return {
      username: "", //用户名
      online_total: 0, //在线人数
      timeout: 6000, //延时
      wsTimeoutObj: null, //延时器对象
      disabled: true, //默认禁止点击断开按钮
      wsObject: {}, //存链接后的，websocket实例对象
    };
  },
  mounted() {
    //移动端——关闭菜单
    this.$store.commit("change_menu", false);
  },
  destroyed() {
    this.wsObject.close();
  },
  methods: {
    btnLink() {
      // 改变this指向
      var _this = this;
      if (this.username === "") {
        // alert("请输入一个昵称，再点击连接！");
        this.$notify({
          title: "提示",
          message: "请输入一个昵称，再点击连接！",
          type: "warning",
        });
        return false;
      } else {
        let uname = this.username;
        //实例化websocket
        var ws = new WebSocket("wss://tool.haoht123.com/wss/");
        this.wsObject = ws;
        //连接成功的回调onopen
        ws.onopen = function (e) {
          let data = "系统消息：建立连接成功";
          _this.listMsg(data, uname);
          if (e.currentTarget.readyState == 1) {
            _this.disabled = false;
          }
          //调定时器方法
          _this.startWsTimeOut();
        };
        //连接关闭的回调onclose
        ws.onclose = function (e) {
          if (_this.online_total > 0) {
            let data = "系统消息：已退出聊天室";
            _this.deleteWsTimeOut(); //清除定时器
            _this.listMsg(data, uname);
            _this.disabled = true;
            _this.online_total -= 1;
          }
        };
        //接收服务器返回消息的回调onmessage
        ws.onmessage = function (e) {
          var msg = JSON.parse(e.data); //解析服务器返回的消息赋值给变量msg
          if (msg.type === "pong") {
            _this.resetWsTimeOut();
          }
          var sender, user_name, name_list, change_type; //声明变量 sender(内容前的title)，user_name(拿登录用户名)，name_list(拿用户列表)，change_type(消息类型)
          switch (msg.type) {
            case "system":
              sender = "系统消息: ";
              break;
            case "user":
              sender = msg.from + ": ";
              break;
            case "handshake":
              var user_info = { type: "login", content: uname };
              _this.sendMsg(user_info);
              return;
            case "login":
            case "logout":
              user_name = msg.content;
              name_list = msg.user_list;
              change_type = msg.type;
              _this.dealUser(user_name, change_type, name_list);
              return;
          }

          var data = sender + msg.content; //拼接title和content，例如：'系统消息：xxx上线了'
          _this.listMsg(data, uname); //传值给listMsg
        };
        //错误的回调onerror
        ws.onerror = function (err) {
          var data = "系统消息 : 出错了,请稍后重试.";
          _this.listMsg(data, uname);
        };
      }
    },
    //定时器方法
    startWsTimeOut() {
      var ws = this.wsObject;
      this.wsTimeoutObj = setTimeout(function () {
        ws.send('{"type":"heartbeat","content":"ping"}');
      }, this.timeout);
    },
    //重置定时器
    resetWsTimeOut() {
      // 重置计时器
      clearTimeout(this.wsTimeoutObj); // 清空计时器
      this.startWsTimeOut();
    },
    //清除定时器
    deleteWsTimeOut() {
      clearTimeout(this.wsTimeoutObj); // 清空计时器
    },
    //断开连接
    closeBtn() {
      this.wsObject.close();
    },

    //监听回车
    confirm(event) {
      this.send();
    },
    /**
     * 发送并清空消息输入框内的消息
     */
    send() {
      var msg_box = document.getElementById("msg_box");
      var content = msg_box.value;
      if (this.disabled) {
        // alert("请先连接哦");
        this.$notify({
          title: "提示",
          message: "请先连接哦！",
          type: "warning",
        });
      } else if (content == "") {
        // alert("不能发送空消息哦");
        this.$notify({
          title: "提示",
          message: "不能发送空消息哦！",
          type: "warning",
        });
      } else {
        var reg = new RegExp("\r\n", "g");
        content = content.replace(reg, "");
        var msg = { content: content.trim(), type: "user" };
        this.sendMsg(msg);
        msg_box.value = "";
        // todo 清除换行符
      }
    },
    /**
     * 将消息内容添加到输出框中,并将滚动条滚动到最下方
     */
    listMsg(data, uname) {
      var msg_list = document.getElementById("msg_list"); //获取到id为msg_list的dom(聊天内容区域)
      if (data) {
        if (data.indexOf(uname) !== -1) {
          var nowData = data.split(":");
          var newData = nowData[1];
          var msg = document.createElement("div"); //创建div标签
          msg.className = "myself";
          var clear = document.createElement("div");
          clear.className = "clearboth";
          msg.innerHTML = newData; //div标签中添加内容为拼装好的数据
          msg_list.appendChild(msg); //添加带有内容的div标签到内容div的dom节点
          msg_list.appendChild(clear); //添加带有清除浮动的div标签到内容div的dom节点
          msg_list.scrollTop = msg_list.scrollHeight; //添加内容后滚动到底部
        } else if (data.indexOf("系统消息") !== -1) {
          var msg = document.createElement("p"); //创建p标签
          msg.className = "stystem";
          msg.innerHTML = data; //p标签中添加内容为拼装好的数据
          msg_list.appendChild(msg); //添加带有内容的p标签到div的dom节点
          msg_list.scrollTop = msg_list.scrollHeight; //添加内容后滚动到底部
        } else {
          var msg = document.createElement("div"); //创建div标签
          msg.className = "friend";
          var clear = document.createElement("div");
          clear.className = "clearboth";
          var feiendUsername = data.split(":")[0];
          var feiendContent = data.split(":")[1];
          msg.innerHTML = "【" + feiendUsername + "】说：" + feiendContent; //div标签中添加内容为拼装好的数据
          msg_list.appendChild(msg); //添加带有内容的div标签添加到内容div的dom节点
          msg_list.appendChild(clear); //添加带有清除浮动的div标签到内容div的dom节点
          msg_list.scrollTop = msg_list.scrollHeight; //添加内容后滚动到底部
        }
      }
    },
    /**
     * 处理用户登陆消息
     *
     * @param user_name 用户名
     * @param type  login/logout
     * @param name_list 用户列表
     */
    dealUser(user_name, type, name_list) {
      var user_list = document.getElementById("user_list"); //获取id为user_list的dom
      while (user_list.hasChildNodes()) {
        user_list.removeChild(user_list.firstChild);
      }

      for (var index in name_list) {
        var user = document.createElement("p");
        user.innerHTML = name_list[index];
        user_list.appendChild(user);
      }
      this.online_total = name_list.length;
      user_list.scrollTop = user_list.scrollHeight;

      var change = type == "login" ? "加入聊天室" : "离开聊天室";
      var time = new Date();
      var nowTime =
        time.getFullYear() +
        "-" +
        (time.getMonth() + 1) +
        "-" +
        time.getDate() +
        " " +
        time.getHours() +
        ":" +
        (time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()) +
        ":" +
        (time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds());
      var data =
        "系统消息" + "(" + nowTime + ")" + "：" + user_name + " 已" + change;
      this.listMsg(data);
    },
    /**
     * 将数据转为json并发送
     * @param msg
     */
    sendMsg(msg) {
      //websocket的发送方法send(data),data为发送的内容
      var data = JSON.stringify(msg);
      this.wsObject.send(data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat_wrapper {
  max-width: 1050px;
  margin-bottom: 30px;
  margin: 0 auto;
}

.chat_content {
  padding-left: 0;
  padding-right: 0;
  width: 750px;
  display: inline-block;
}

.chat_list {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  height: 340px;
}

.side_wrapper {
  margin: 0 auto;
  text-align: center;
}

.chat_side {
  padding-left: 0;
  padding-right: 0;
  margin-right: 20px;
  height: 380px;
  width: 270px;
  display: inline-block;
}

.public_content {
  height: 340px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

#msg_list {
  height: 300px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}

.send_msg {
  height: 80px;
  max-width: 1040px;
  margin: 0 10px;
  margin-bottom: 15px;
}

.send_msg_main {
  padding-left: 0;
  padding-right: 0;
  margin-bottom: 30px;
}
</style>
