(function (_context) {
  	_context.menu=function(_menu,id){
  	  menu=document.getElementById("_rightclick");
  	  if((typeof id !== 'undefined'))
	  	 {
		  	 document.getElementById(id).oncontextmenu=function(e)
		  	 {
		  	 			  	 e.stopPropagation();
		  	 }
		  	 document.oncontextmenu=function(e)
		  	 {
			  	 			  	 return true;
		  	 }
	   }
	  switch(_menu)
		{
		case 2:
		  menuclass="rmenu2 dropdown-menu";
		  break;
		case 3:
		  menuclass="rmenu3 dropdown-menu";
		  break;
		case 4:
		  menuclass="rmenu4 dropdown-menu";
		  break;
		case 5:
		  menuclass="rmenu5 dropdown-menu";
		  break;
		case 6:
		  menuclass="rmenu6 dropdown-menu";
		  break;
		case "hide":
		  menu.style.display="none";
		default:
		  menuclass="dropdown-menu";
		}
	   menu.className=menuclass;
	   window.oncontextmenu=function(e)
		{
		    menu.style.display="block";
		    menu.style.top=e.pageY+"px";
		    menu.style.left=e.pageX+"px";
		    return false;
		}
		document.onclick=function(){
		    menu.style.display="none";
		}
    }
}(this._context = this._context || {}));
