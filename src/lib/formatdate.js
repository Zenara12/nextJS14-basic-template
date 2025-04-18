export const formatDate = (date) => {
	let newDate = new Date(date);
	console.log(newDate);

	return newDate.toString().slice(4, 16);
};
