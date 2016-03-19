
// Create array to hold alphabet. 
// alph[0]  = 'a'
// alph[25] = 'z'
var alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
new Clipboard('.btn');


// we get the rotation key, get the text to encrypt, and put into an array
function encryptText(){
	
	var text = $('#unencrypted').val().trim().toLowerCase();
	
	if(text == ''){}
	else{
		var key = Number($('#key').val());
		console.log(key);
		var arr = text.split('');
		var ans = '';
		console.log(arr);

		for(var i = 0; i<arr.length; i++){
			if(isALetter(arr[i])){
				var index = alph.indexOf(arr[i]);
				if(index+key > 25){
					index = index + key - 26;
					console.log(index);
				}
				else{
					index = index + key;
				}

				ans = ans + alph[index];
			}
			else{
				ans = ans + arr[i];
			}
			
		}

		setEncrypted(ans);

	}
}

function decryptText(){
	var text = $('#encrypted').val().trim().toLowerCase();
	
	if(text == ''){}
	else{
		var key = Number($('#key').val());
		var arr = text.split('');
		var ans = '';
		console.log(arr);

		for(var i = 0; i<arr.length; i++){
			if(isALetter(arr[i])){
				var index = alph.indexOf(arr[i]);
				if(index - key < 0){
					index = index + 26 - key;
					console.log(index);
				}
				else{
					index = index - key;
				}

				ans = ans + alph[index];
			}
			else{
				ans = ans + arr[i];
			}
			
		}

		setUnencrypted(ans);

	}
}

// checks if a character is a letter or not
function isALetter(charVal)
{
    if( charVal.toUpperCase() != charVal.toLowerCase() )
       return true;
    else
       return false;
}

// Update the Encrypted textarea
function setEncrypted(s){
	$('#encrypted').val(s);
}

// Update the Unencrypted textarea
function setUnencrypted(s){
	$('#unencrypted').val(s);
}

// Clear both textareas
function clearAreas(){
	$('#unencrypted').val('');
	$('#encrypted').val('');
}

function pasteTop() {

}

function pasteBottom() {

}

