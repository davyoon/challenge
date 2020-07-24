// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

const caesarCipher = (s, k) => {
	const shiftedArr = s.split("").map(item => {
		let charCode = item.charCodeAt();
		let shiftedVal = charCode + k % 26;

		if(charCode >= 65 && charCode <= 90) {
			return shiftedVal <= 90 ? String.fromCharCode(shiftedVal) : String.fromCharCode(shiftedVal - 26); 
		}
		if(charCode >= 97 && charCode <= 122) {
			return shiftedVal <= 122 ? String.fromCharCode(shiftedVal) : String.fromCharCode(shiftedVal - 26); 
		}
		return item;
	});
	return shiftedArr.join("");
}
