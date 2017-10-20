function fullname(first, last) {
	return first + ' ' + last;
}

function greet(name) {
	console.log(name);
}

module.exports = {
	fullname: fullname,
	greet: greet
}

