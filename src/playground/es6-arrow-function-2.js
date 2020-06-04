const user = {
    name: 'ravi',
    cities: ['Mumbai', 'Navi Mumbai', 'Pune', 'Nagpur'],
    printPlacesLived() {

        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // return this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in '+city);
        // }
        // )
    }
}

// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 3, 4, 5, 8, 9],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}

console.log(multiplier.multiply());
