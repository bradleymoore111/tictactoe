(function(){
	var board=["1","1","1","1","1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
	var side = Math.sqrt(board.length)
	var size = (side*side)
	var verPosChk=[];
	var verNegChk=[];
	var horPosChk=[];
	var horNegChk=[];
	var diaPosChk=[];
	var diaNegChk=[];
	var disPosChk=[];
	var disNegChk=[];
	var p1 = function () {
		console.log("Player 1 wins!")
	}
	var p2 = function () {
		console.log("Player 2 wins!")
	}
	var ifSolved = function () {
		if (side==Math.floor(side)) {
			// Check Vertical
			for(i=0;i<side;i++){
				for(n=0;n<size;n+=side){
					if(n==0){
						verPosChk[i]=0;
						verNegChk[i]=0;
					}
					if(board[i+n]=="1"){
						verPosChk[i]++;
					}
					if(board[i+n]=="-1"){
						verNegChk[i]++;
					}
				}
				if(verPosChk[i]==side){
					p1();
				}
				if(verNegChk[i]==side){
					p2();
				}
			}
			
			// Check Horizontal
			for(i=0;i<size;i+=side){
				for(n=0;n<side;n++){
					if(n==0){
						horPosChk[i]=0
						horNegChk[i]=0
					}
					if(board[i+n]=="1"){
						horPosChk[i]++;
					}
					if(board[i+n]=="-1"){
						horNegChk[i]++;
					}
				}
				if(horPosChk[i]==side){
					p1();
				}
				if(horNegChk[i]==side){
					p2();
				}
			}

			// Check Diagonal
			diaPosChk=0
			diaNegChk=0
			for(n=0;n<size;n+=(side+1)){
				if(board[n]=="1"){
					diaPosChk++;
				}
				if(board[n]=="-1"){
					diaNegChk++;
				}
			}
			disPosChk=0
			disNegChk=0
			for(n=size-1;n>-1;n-=(side-1)){
				if(board[n]=="1"){
					disPosChk++;
				}
				if(board[n]=="-1"){
					disNegChk++;
				}
			}
			if(diaPosChk==side){
				p1();
			}
			if(diaNegChk==side){
				p2();
			}
			if(disPosChk==side){
				p1();
			}
			if(disNegChk==side){
				p2();
			}
		}
	};
	ifSolved();
})();
