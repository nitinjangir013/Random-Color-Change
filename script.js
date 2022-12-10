const selectedColorDiv = document.getElementById('color');
var c = '';
var c_1 = '';
var c_2 = '';
function colorChange() {
const rm_1 = parseInt(Math.random()*12);
const rm_2 = parseInt(Math.random()*12);
const rm_3 = parseInt(Math.random()*12);
	if (rm_1>10) {
		c = 'f';
	}
	else if (rm_1<10 && rm_1>8) {
		c = 'e';
	}
	else if (rm_1<8 && rm_1>6) {
		c = 'd';
	}
	else if (rm_1<6 && rm_1>4) {
		c = 'c';
	}
	else if (rm_1<6 && rm_1>4) {
		c = 'b';
	}
	else
	{
		c = 'a';
	}

	//color 2

	if (rm_2>10) {
		c_1 = 'f';
	}
	else if (rm_2<10 && rm_2>8) {
		c_1 = 'e';
	}
	else if (rm_2<8 && rm_2>6) {
		c_1 = 'd';
	}
	else if (rm_1<6 && rm_1>4) {
		c_1 = 'c';
	}
	else if (rm_1<4 && rm_1>2) {
		c_1 = 'b';
	}
	else
	{
		c_1 = 'a';
	}


	if (rm_3>10) {
		c_2 = 'f';
	}
	else if (rm_3<10 && rm_3>8) {
		c_2 = 'e';
	}
	else if (rm_3<8 && rm_3>6) {
		c_2 = 'd';
	}
	else if (rm_1<6 && rm_1>4) {
		c_2 = 'c';
	}
	else if (rm_1<6 && rm_1>4) {
		c_2 = 'b';
	}
	else
	{
		c_2 = 'a';
	}
	selectedColorDiv.style.transition = 'all 1s';
	selectedColorDiv.style.background = '#'+c+c_1+c_2;
}