

var flashvars = {

	f: 'http://img.ksbbs.com/asset/Mon_1605/0ec8cc80112a2d6.mp4',
	c: 0,
	s: 1,
	b: 1,
	i: "../img/fuel_img/fuel-filler_03.png"
};
var params = { bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent' };
var video = ['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
CKobject.embed('/ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', "100%", "100%", true, flashvars, video, params);



window.onresize = function() {
	$('#a1').css('width', '60%');
	$('#a1').css('height', '75%');

}