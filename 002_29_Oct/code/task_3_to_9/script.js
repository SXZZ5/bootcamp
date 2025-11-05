/**********************************************
                        TASK 3
***********************************************/
var arr = new Array(1,2,3,4);
arr.push(5);


/**********************************************
                        TASK 4
***********************************************/
var brr = new Array(1,2,3,4);
brr.unshift();


/**********************************************
                        TASK 5
***********************************************/
var idx = 3;
var numberToInsert = 55;
var crr = new Array(4);
crr.slice(idx,0,numberToInsert);


/**********************************************
                        TASK 6
***********************************************/
var drr = [1,2,4,5,1,2,4,5,80,89,91];
var toReplace = 1;
var replaceWidth = 10;
drr.forEach(function(elem,idx){
	if(elem==toReplace)
		drr[idx]=replaceWidth;
})


/**********************************************
                        TASK 7
***********************************************/
var err = [1,2,4,5,1,2,4,5,80,89,91];
function mergeSort(Z) {
	if(Z.length == 1) return Z;
	var mid = Math.floor(Z.length/2);
	var left = [], right = [];
	for(var i = 1; i<=mid; ++i) left.push(Z[i-1]);
	for(var i=mid+1; i<=Z.length; ++i) right.push(Z[i-1]);
	console.log(Z,mid, left, right);
	left = mergeSort(left);
	right = mergeSort(right);

	var result_arr = [];
	var lptr = 1, rptr = 1;
	for(var i=1; i<=Z.length; ++i) {
		if(lptr > left.length) {
			result_arr.push(right[rptr-1]);
			rptr++;
		}
		else if(rptr > right.length) {
			result_arr.push(left[lptr-1]);
			lptr++;
			continue;
		}
		else if(left[lptr-1] <= right[rptr-1]) {
			result_arr.push(left[lptr-1]);
			lptr++;
		}
		else { 
			result_arr.push(right[rptr-1]);
			rptr++;
		}
	}
	return result_arr;
}

/**********************************************
                        TASK 8
***********************************************/
var frr = [1,2,4,5,1,2,4,5,80,89,91];
var reverse_frr = [];
for(var i = frr.length; i >= 1; --i){
	reverse_frr.push(frr[i-1]);
}


/**********************************************
                        TASK 9
***********************************************/
var grr = [1,2,4,5,1,2,4,5,80,89,91];
var numberToSearch = 89;
console.log(grr.indexOf(numberToSearch));

