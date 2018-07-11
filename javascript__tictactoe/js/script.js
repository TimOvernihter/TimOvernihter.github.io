var move = 1;
var xColor = "#FF4500";
var oColor = "#000080";
var firstPlayer = "X";
var secondPlayer = "Y";
var center__center = document.getElementsByClassName("center-center");
var center__right = document.getElementsByClassName("center-right");
var top__left = document.getElementsByClassName("top-left");
var top__right = document.getElementsByClassName("top-right");
var top__center = document.getElementsByClassName("top-center");
var bottom__left = document.getElementsByClassName("bottom-left");
var bottom__right = document.getElementsByClassName("bottom-right");
var bottom__center = document.getElementsByClassName("bottom-center");
var center__left = document.getElementsByClassName("center-left");
function topLeft() 
{
	if (top__left[0].innerHTML == "") {
		if (Number.isInteger(move/2)) 
		{
	    	top__left[0].innerHTML = "O";
	    	top__left[0].style.color=oColor;
		}
	    else 
	    {
	    	top__left[0].innerHTML = "X";
	    	top__left[0].style.color=xColor;
	    }
    move++;
    }
    else{}
    matchResult();
}
function topRight() 
{
	if (top__right[0].innerHTML == "") {
		if (Number.isInteger(move/2)) 
		{
	    	top__right[0].innerHTML = "O";
	    	top__right[0].style.color=oColor;
		}
	    else 
	    {
	    	top__right[0].innerHTML = "X";
	    	top__right[0].style.color=xColor;
	    }
    move++;
    }
    else{}
    matchResult();
}
function topCenter() 
{
	if (top__center[0].innerHTML == "") {
		if (Number.isInteger(move/2)) 
		{
	    	top__center[0].innerHTML = "O";
	    	top__center[0].style.color=oColor;
		}
	    else 
	    {
	    	top__center[0].innerHTML = "X";
	    	top__center[0].style.color=xColor;
	    }
    move++;
    }
    else{}
    matchResult();
}
function bottomLeft() 
{
	if (bottom__left[0].innerHTML == "") {
		if (Number.isInteger(move/2)) 
		{
	    	bottom__left[0].innerHTML = "O";
	    	bottom__left[0].style.color=oColor;
		}
	    else 
	    {
	    	bottom__left[0].innerHTML = "X";
	    	bottom__left[0].style.color=xColor;
	    }
    move++;
    }
    else{}
    matchResult();
}
function bottomRight() 
{
	if (bottom__right[0].innerHTML == "") {
		if (Number.isInteger(move/2)) 
		{
	    	bottom__right[0].innerHTML = "O";
	    	bottom__right[0].style.color=oColor;
		}
	    else 
	    {
	    	bottom__right[0].innerHTML = "X";
	    	bottom__right[0].style.color=xColor;
	    }
    move++;
    }
    else{}
    matchResult();
}
function bottomCenter() 
{
	if (bottom__center[0].innerHTML == "") {
		if (Number.isInteger(move/2)) 
		{
	    	bottom__center[0].innerHTML = "O";
	    	bottom__center[0].style.color=oColor;
		}
	    else 
	    {
	    	bottom__center[0].innerHTML = "X";
	    	bottom__center[0].style.color=xColor;
	    }
    move++;
    }
    else{}
    matchResult();
}
function centerLeft() 
{
	if (center__left[0].innerHTML == "") {
		if (Number.isInteger(move/2)) 
		{
	    	center__left[0].innerHTML = "O";
	    	center__left[0].style.color=oColor;
		}
	    else 
	    {
	    	center__left[0].innerHTML = "X";
	    	center__left[0].style.color=xColor;
	    }
    move++;
    }
    else{}
    matchResult();
}
function centerRight() 
{
	if (center__right[0].innerHTML == "") {
		if (Number.isInteger(move/2)) 
		{
	    	center__right[0].innerHTML = "O";
	    	center__right[0].style.color=oColor;
		}
	    else 
	    {
	    	center__right[0].innerHTML = "X";
	    	center__right[0].style.color=xColor;
	    }
    move++;
    }
    else{}
    matchResult();
}
function centerCenter() 
{
	if (center__center[0].innerHTML == "") {
		if (Number.isInteger(move/2)) 
		{
	    	center__center[0].innerHTML = "O";
	    	center__center[0].style.color=oColor;
		}
	    else 
	    {
	    	center__center[0].innerHTML = "X";
	    	center__center[0].style.color=xColor;
	    }
    move++;
    }
    else{}
    matchResult();
}
function matchResult()
{
		if(center__center[0].innerHTML, bottom__center[0].innerHTML, top__center[0].innerHTML != "")
		{
			if (center__center[0].innerHTML == bottom__center[0].innerHTML && top__center[0].innerHTML == center__center[0].innerHTML) 
			{
				document.getElementById("summary").innerHTML = center__center[0].innerHTML + " wins!";
				return;
			}
			else{}
		}

		if (top__left[0].innerHTML, center__left[0].innerHTML, bottom__left[0].innerHTML !="") 
		{
			if (top__left[0].innerHTML == center__left[0].innerHTML && bottom__left[0].innerHTML == top__left[0].innerHTML) 
			{
				document.getElementById("summary").innerHTML = top__left[0].innerHTML + " wins!";
				return;
			}
			else{}
		}
		if (top__right[0].innerHTML, center__right[0].innerHTML, bottom__right[0].innerHTML != "") 
		{
			if (top__right[0].innerHTML == center__right[0].innerHTML && bottom__right[0].innerHTML == top__right[0].innerHTML) 
			{
				document.getElementById("summary").innerHTML = top__right[0].innerHTML + " wins!";
				return;
			}
			else{}
		}

		if (top__left[0].innerHTML, top__center[0].innerHTML, top__right[0].innerHTML != "") 
		{
			if (top__left[0].innerHTML == top__center[0].innerHTML && top__right[0].innerHTML == top__left[0].innerHTML) 
			{
				document.getElementById("summary").innerHTML = top__left[0].innerHTML + " wins!";
				return;
			}
			else{}
		}

		if (center__left[0].innerHTML, center__center[0].innerHTML, center__right[0].innerHTML 
			!= "")
		{
			if (center__left[0].innerHTML == center__center[0].innerHTML && center__right[0].innerHTML == center__left[0].innerHTML) 
			{
				document.getElementById("summary").innerHTML = center__left[0].innerHTML + " wins!";
				return;
			}
			else{}
		}

		if (bottom__left[0].innerHTML, bottom__center[0].innerHTML, bottom__right[0].innerHTML != "")
		{ 
			if (bottom__left[0].innerHTML == bottom__center[0].innerHTML && bottom__right[0].innerHTML == bottom__left[0].innerHTML) 
			{
				document.getElementById("summary").innerHTML = bottom__left[0].innerHTML + " wins!";
				return;
			}
			else{}
		}

		if (top__left[0].innerHTML, center__center[0].innerHTML, bottom__right[0].innerHTML != "") 
		{
			if (top__left[0].innerHTML == center__center[0].innerHTML && bottom__right[0].innerHTML == top__left[0].innerHTML) 
			{
				document.getElementById("summary").innerHTML = top__left[0].innerHTML + " wins!";
				return;
			}
			else{}
		}

		if (top__right[0].innerHTML, center__center[0].innerHTML, bottom__left[0].innerHTML != "") 
		{
			if (top__right[0].innerHTML == center__center[0].innerHTML && bottom__left[0].innerHTML == top__right[0].innerHTML) 
			{
				document.getElementById("summary").innerHTML = top__right[0].innerHTML + " wins!";
				return;
			}
			else{}
		}
		if(top__right[0].innerHTML != "" && center__center[0].innerHTML != "" && bottom__left[0].innerHTML != "" && bottom__center[0].innerHTML != "" && center__right[0].innerHTML != "" && bottom__right[0].innerHTML != "" && top__left[0].innerHTML != "" && top__center[0].innerHTML != "" && center__left[0].innerHTML != "")
		{
			document.getElementById("summary").innerHTML = "It's a draw!";
				return;
		}
		else{}
}