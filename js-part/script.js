var Car = {

    carNumber: "CA3121",

    getNumber: function () {
      var self = this ;
        var MyFunc = function () {
            console.log(self.carNumber);
        };
        MyFunc();
    }
}

Car.getNumber()