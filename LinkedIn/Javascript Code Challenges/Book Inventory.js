class Book {
	constructor(title, author, ISBN, numCopies) {
		this.title = title;
		this.author = author;
		this.ISBN = ISBN;
		this.numCopies = numCopies;
	}

	// Getter function
	getAvailability() {
		if (this.numCopies === 0) {
			return 'out of stock';
		} else if (this.numCopies < 10) {
			return 'low stock';
		}
		return 'in stock';
	}

	// Sell
	sell(numSold = 1) {
		this.numCopies -= numSold;
	}

	//Restock
	restock(numCopies = 5) {
		this.numCopies += numCopies;
	}
}
