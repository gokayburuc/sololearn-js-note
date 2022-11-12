
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6];

// TODO: ... varyadik fonksiyonlar js karşılığı
const func = (...rest) => {
    console.log(rest.length);
}


func(...arr1);
func(...arr2);