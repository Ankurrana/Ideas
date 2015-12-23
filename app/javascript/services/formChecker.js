app.factory('formChecker',function(){
	return {
		'lenCheck' : function(str,min,max){
			if(str == undefined) return -2;
			l = str.length;
			console.log(l);
			if( l < min ){
				return -1;
			}
			if(l > max){
				return 1;
			}
			return true;
		}
	}
})