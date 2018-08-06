//Colors from : http://flatuicolors.com/

function changeCouleur(){
	
		var numSlime = Math.floor((Math.random() * 10) + 1); 
    	var couleurSlime;
		var corpsSlime = document.getElementsByClassName("corps")[0];
		var slime = document.getElementsByClassName('slime')[0];
		switch (numSlime) {
			case 1:
			    couleurSlime = "#40739e";
			    break;
			case 2:
			    couleurSlime = "#7f8fa6";
			    break;
			case 3:
			    couleurSlime = "#f5f6fa";
			    break;
			case 4:
			    couleurSlime = "#dcdde1";
			    break;
			case 5:
			    couleurSlime = "#273c75";
			    break;
			case 6:
			    couleurSlime = "#ea8685";
			    break;
			case 7:
			    couleurSlime = "#f3a683";
			    break;
			case 8:
			    couleurSlime = "#f7d794";
			    break;
			case 9:
			    couleurSlime = "#786fa6";
			    break;
			case 10:
			    couleurSlime = "#c44569";
			    break;           
			} 		
		corpsSlime.style.fill = couleurSlime;
		slime.onclick = function(){
			location.href= 'http://127.0.0.1:4000/SvSylvie.github.io/'
		}
}
changeCouleur();