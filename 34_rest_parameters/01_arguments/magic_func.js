function magic(...nums) {
    let sum = 0;
    // TODO : map filter fonksiyonlarına bakılacak
    nums.filter(n => n % 2 == 0).map(el => sum += el);
    return sum;
}

console.log(magic(1, 2, 3, 4, 5, 6));