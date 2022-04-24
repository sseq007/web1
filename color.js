var Links ={
    setColor:function(color){
    var list = document.querySelectorAll('a');
    var i =0;
    while(i<list.length){
        list[i].style.color=color;
        i=i+1;
    }
}
//&('a').css('color',color);
}

/*
function LinkSetColor(color){
    var list = document.querySelectorAll('a');
    var i =0;
    while(i<list.length){
        list[i].style.color=color;
        i=i+1;
    }
}
*/
var Body = {
    setColor:function(color){
    document.querySelector('body').style.color=color;
    //&('body').css('color',color);
},
    setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
    //&('a').css('backgroundColor',color);
}
}
/*
function BodySetColor(color){
    document.querySelector('body').style.backgroundColor=color;
}

function BodySetBackgroundColor(color){
    document.querySelector('body').style.color=color;
}
*/
function nightDayHandler(self){
    
     if(self.value==='night'){ 
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value='day';
    Links.setColor('powderblue');
     } else{
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value='night';
    Links.setColor('blue');
    }
}