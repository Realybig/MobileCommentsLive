var cmtUrl = "http://coral.qq.com/article/" + config.id + "/comment";
$.ajax({
    url: cmtUrl,
    context: '.dl-comment',
    dataType: 'jsonp',
    success: function (res) {
        var data = res.data.commentid,
            i = 0,
            len = data.length,
            loopcomment;

        loopcomment = setInterval(function(){
            //setTimeout(function(){
                if(i < len){
                    $('.dl-comment ul').append('<li class="upcomment"><div class="dl-comment-con"><div class="dl-comment-userface"><img src="' + data[i].userinfo.head + '"></div><div class="dl-comment-username">' + data[i].content + '</div></div></li>');
                    i++
                    console.log(i)
                }else{
                    clearInterval(loopcomment)
                }
            //},parseInt(Math.random()*5000))
            console.log(parseInt(Math.random()*5000))
        },1500)
    },
    error: function(res){
        console.log('error',res);
    }
});
