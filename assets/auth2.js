function uc_authcode(str, operation, key, expiry) {
    var operation = operation ? operation : 'DECODE';
    var key = key ? key : vcd;
    var expiry = expiry ? expiry : 0;

    var ckey_length = 4;
    key = md5(key);

    
    var keya = md5(key.substr(0, 16));
     
    var keyb = md5(key.substr(16, 16));
     
    if(ckey_length){
        if(operation == 'DECODE'){
            var keyc = str.substr(0, ckey_length);
        }else{
            var md5_time = md5(microtime());
            var start = md5_time.length - ckey_length;
            var keyc = md5_time.substr(start, ckey_length)
        }
    }else{
        var keyc = '';
    }
    
    var cryptkey = keya + md5(keya + keyc);

    var strbuf;

    if (operation == 'DECODE') {
        str = str.substr(ckey_length);
        strbuf = base64decode(str);
        
    } else {
        expiry = expiry ? expiry + time() : 0;
        tmpstr = expiry.toString();
        if (tmpstr.length >= 10)
            str = tmpstr.substr(0, 10) + md5(str + keyb).substr(0, 16) + str;
        else {
            var count = 10 - tmpstr.length;
            for (var i = 0; i < count; i++) {
                tmpstr = '0' + tmpstr;
            }
            str = tmpstr + md5(str + keyb).substr(0, 16) + str;
        }
        strbuf = str;
    }


    var box = new Array(256);
    for (var i = 0; i < 256; i++) {
        box[i] = i;
    }
    var rndkey = new Array();
   
    for (var i = 0; i < 256; i++) {
        rndkey[i] = cryptkey.charCodeAt(i % cryptkey.length);
    }
     
    for (var j = i = 0; i < 256; i++) {
        j = (j + box[i] + rndkey[i]) % 256;
        tmp = box[i];
        box[i] = box[j];
        box[j] = tmp;
    }

     
    var s = '';
     
    strbuf = strbuf.split('');
    for (var a = j = i = 0; i < strbuf.length; i++) {
        a = (a + 1) % 256;
        j = (j + box[a]) % 256;
        tmp = box[a];
        box[a] = box[j];
        box[j] = tmp;
        
        s += chr(ord(strbuf[i])^(box[(box[a] + box[j]) % 256]));
    }

    if (operation == 'DECODE') {
        if ((s.substr(0, 10) == 0 || s.substr(0, 10) - time() > 0) && s.substr(10, 16) == md5(s.substr(26) + keyb).substr(0, 16)) {
            s = s.substr(26);
        } else {
            s = '';
        }
    } else {
        s = base64encode(s);
        var regex = new RegExp('=', "g");
        s = s.replace(regex, '');
        s = keyc + s;
    }

    return s;
}

function time() {
    var unixtime_ms = new Date().getTime();
    return parseInt(unixtime_ms / 1000);
}

function microtime(get_as_float) {
    var unixtime_ms = new Date().getTime();
    var sec = parseInt(unixtime_ms / 1000);
    return get_as_float ? (unixtime_ms / 1000) : (unixtime_ms - (sec * 1000)) / 1000 + ' ' + sec;
}
function chr(s) {
    return String.fromCharCode(s);
}
function ord(s) {
    return s.charCodeAt();
}

function md5(str) {
    return hex_md5(str);
}