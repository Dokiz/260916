var triangle={
	ab:3,
	bc:4,
	ac:function(){
		sss = (this.ab*this.ab)+(this.bc*this.bc);
		return Math.sqrt(sss);
	}
};
console.log(triangle.ac());
