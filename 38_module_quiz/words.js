class Add {
    // words arguments 
    constructor(...words) {
        this.words = words;
    }

    static print() {
        const words = super.words();
        return words[0] + "$" + words[1] + []
    }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();
