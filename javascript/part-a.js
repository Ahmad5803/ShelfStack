 

class LibraryItem {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.isAvailable = true;
    }

    describe() {
        return `Item: ${this.title} (ID: ${this.id}) - ${this.isAvailable ? "Available" : "On Loan"}`;
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return true;
        }
        return false;
    }

    returnItem() {
        this.isAvailable = true;
    }
}

class Book extends LibraryItem {
    constructor({ id, title, isbn, author }) {
        super(id, title);
        this.isbn = isbn;
        this.author = author;
    }

     describe() {
        const status = this.isAvailable ? "Available" : "On Loan";
        return `Book: ${this.title} by ${this.author} (ISBN: ${this.isbn}, ID: ${this.id}) - ${status}`;
    }
}

class Member {
    #balance = 0;  

    constructor(name) {
        this.name = name;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

class LibraryCatalog {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

     static makeId(prefix, suffix) {
        return `${prefix}-${suffix}`;
    }

     registerLoan({ memberId, itemId }) {
        const item = this.items.find(i => i.id === itemId);
        if (item && item.borrow()) {
            console.log(`Loan registered: Member ${memberId} borrowed ${item.title}`);
            return true;
        }
        console.log(`Loan failed: Item ${itemId} is not available or not found.`);
        return false;
    }

    snapshotStats() {
        const total = this.items.length;
        const available = this.items.filter(i => i.isAvailable).length;
        return { total, available };
    }
}

 
 const [id1, id2] = ["B-101", "B-102"];

const catalog = new LibraryCatalog();

 catalog.addItem(new Book({ 
    id: id1, 
    title: "Clean Code", 
    isbn: "963-11111111111", 
    author: "Ahmad Na" 
}));

catalog.addItem(new Book({ 
    id: id2, 
    title: "The Programmer", 
    isbn: "963-0000000000", 
    author: "joud ahmad" 
}));

 catalog.registerLoan({ memberId: "M-001", itemId: id1 });

const { total, available } = catalog.snapshotStats();

 console.log("--- Library Stats ---");
console.log(`Total Books: ${total}`);
console.log(`Available Books: ${available}`);

console.log("\n--- Item Description ---");
const firstBook = catalog.items[0];
console.log(firstBook.describe());

 const member = new Member("Moones");
member.deposit(5000);  
console.log(`\nMember Balance: ${member.getBalance()}`);
