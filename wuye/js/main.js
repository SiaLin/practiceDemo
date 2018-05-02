$(".focusbox").slide({
  titCell: ".hd li",  //标题部分，精确到列表
  mainCell: ".bd",    //内容部分，包裹层
  autoPlay: true,
  delayTime: 1500,
  interTime: 3000,
  effect: "leftLoop"
});

$(".project-tab-scroll").slide({
  mainCell:".bd",
  interTime:50,
  effect:"left",
  scroll:1,
  vis:4     //vis 显示内容的区域的个数,要起作用必须设置effect
})

$(".news-tab-main").slide({
  mainCell:"ul",
  effect:"topMarquee",
  interTime:100,
  vis:3,
  autoPlay:true
})
