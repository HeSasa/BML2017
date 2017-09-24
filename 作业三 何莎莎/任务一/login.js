function getLength(str) {
        return str.replace(/[^\x00-xff]/g, "XX").length;
    }

    function findStr(str, n) {
        var tmp = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) == n) {
                tmp++
            }
        }
        return tmp;
    }

    window.onload = function() {

        var alnput = document.getElementsByTagName('input');
        var oName = alnput[0];
        var pwd = alnput[1];

        var aP = document.getElementsByTagName('p');
        var name_msg = aP[0];
        var pwd_msg = aP[1];

        var count = document.getElementById('count');
        var count2 = document.getElementById('count2');
        var aEm = document.getElementsByTagName('li');

        var name_length = 0;
        var pwd_length = 0;
        //用户名

        oName.onfocus = function() {
            name_msg.style.display = "block";
            name_msg.innerHTML = '请输入5-25个字符'
        }
        oName.onkeyup = function() {
            count.style.visibility = "visible"
            name_length = getLength(this.value);
            count.innerHTML = name_length + '个字符';
            if (name_length == 0) {
                count.style.visibility = "hidden";
            }
        }
        oName.onblur = function() {

            //含有非法字符
            var re = /[^\w/\*/]/g;
            if (re.test(this.value)) {
                name_msg.innerHTML = ' <i class ="no"></i> 含有非法字符';
            }

            //不能为空	   
            else if (this.value == "") {
                name_msg.innerHTML = ' <i class ="no"></i> 用户名不得为空！';
            }

            //长度不能超出25个字符
            else if (name_length > 25) {
                name_msg.innerHTML = ' <i class ="no"></i> 用户名长度不得超出25个字符';
            }

            //长度不少于5个字符	   
            else if (name_length < 5) {
                name_msg.innerHTML = ' <i class ="no"></i> 用户名长度不得少于5个字符';
            }


        }

        //密码

        pwd.onfocus = function() {
            pwd_msg.style.display = "block";
            pwd_msg.innerHTML = '5-12个字符';
        }

        pwd.onkeyup = function() {
            count2.style.visibility = "visible"
            pwd_length = getLength(this.value);
            count2.innerHTML = pwd_length + '个字符';
            if (pwd_length == 0) {
                count2.style.visibility = "hidden";
            }
        }

        pwd.onblur = function() {

            var m = findStr(pwd.value, pwd.value[0]);
            var re_pwd = /[^\w/\*/]/g;

            //含有非法字符

            if (re_pwd.test(this.value)) {
                pwd_msg.innerHTML = ' <i class ="no"></i> 含有非法字符';
            }

            //不能为空	   
            else if (this.value == "") {
                pwd_msg.innerHTML = ' <i class ="no"></i> 密码不得为空！';
            }

            //长度不能超出12个字符
            else if (pwd_length > 12) {
                pwd_msg.innerHTML = ' <i class ="no"></i> 密码长度不得超出12个字符';
            }

            //长度不少于5个字符	   
            else if (pwd_length < 5) {
                pwd_msg.innerHTML = ' <i class ="no"></i> 密码长度不得少于5个字符';
            }
        }
    }