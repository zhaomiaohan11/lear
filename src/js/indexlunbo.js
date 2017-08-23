//

window.onload=function(){
//	
	
	      	var mm=document.getElementsByClassName('mm')[0];
      	   var ali=mm.getElementsByTagName('li');
      	   var currenta=0;
	       var timera=setInterval(function(){
		    animate(ali[currenta],{opacity:0});
		    currenta++;
		      if(currenta == 2){
                   currenta = 0;
                }
		    animate(ali[currenta],{opacity:1}) ;
		      },4000);

//


				   	var ff=document.getElementsByClassName('ff')[0];
      	   var bli=ff.getElementsByTagName('li');
      	   var currentb=0;
	       var timerb=setInterval(function(){
		    animate(bli[currentb],{opacity:0});
		    currentb++;
		      if(currentb == 3){
                   currentb = 0;
                }
		    animate(bli[currentb],{opacity:1}) ;
		      },4000);









	    setInterval(function(){
  	var d =new Date();
	    var x = document.getElementsByClassName('shijian')[0];
	    x.innerHTML='剩余：'+d.getDay()+'天:'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
  },1000);
  
//
      	$('.main-topul li').bind('mouseenter',function(event){
		$('.main-topul li').removeClass('active');
		$(this).addClass('active');
	    $('.jiulist .tu').removeClass('active').eq($(this).index()).
        addClass('active')
		
	})
      	
 	var ul=document.getElementsByClassName('lunbo')[0];
	var oli=ul.getElementsByTagName('li');
	var current=0;
	var timer=setInterval(function(){
		    animate(oli[current],{opacity:0});
		    current++;
		      if(current == 9){
                   current = 0;
                }
		    animate(oli[current],{opacity:1}) ;
		  
		   showCurrentPagePoint(current);
	},4000);
	
	
	
	 function showCurrentPagePoint(current) {
                var page = document.getElementsByClassName('page')[0];
                var span = page.getElementsByTagName('span');
                for(var i=0;i<span.length;i++){
                    span[i].style.background = 'white';
                }
                span[current].style.background = 'black';

            }  
            
          


} 


