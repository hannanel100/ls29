var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(xCor, yCor, Color, Radius) {
        var _this = _super.call(this) || this;
        _this.xCor = xCor;
        _this.yCor = yCor;
        _this.Color = Color;
        _this.Radius = Radius;
        return _this;
    }
    Circle.prototype.Diameter = function () {
        return this.Radius * 2;
    };
    Circle.prototype.display = function () {
        return "X Cordinates: " + this.xCor + ", \n                Y Cordinates: " + this.yCor + ", \n                Color: " + this.Color + ", \n                Radius: " + this.Radius;
    };
    Circle.prototype.Area = function () {
        return Math.PI * this.Radius * this.Radius;
    };
    Circle.prototype.Circumference = function () {
        return 2 * Math.PI * this.Radius;
    };
    return Circle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(xCor, yCor, Color, Length) {
        var _this = _super.call(this) || this;
        _this.xCor = xCor;
        _this.yCor = yCor;
        _this.Color = Color;
        _this.Length = Length;
        return _this;
    }
    Square.prototype.display = function () {
        return " X Cordinates: " + this.xCor + ", \n        Y Cordinates: " + this.yCor + ", \n        Color: " + this.Color + ", \n        Length: " + this.Length;
    };
    Square.prototype.Area = function () {
        return this.Length * this.Length;
    };
    Square.prototype.Circumference = function () {
        return 4 * this.Length;
    };
    Square.prototype.draw = function () {
        var _draw = '';
        for (var i = 0; i < this.Length; i++) {
            for (var j = 0; j < this.Length; j++) {
                if (i == 0 || i == this.Length - 1) {
                    _draw += '*';
                }
                else if (j == 0 || j == this.Length - 1) {
                    _draw += '*';
                }
                else {
                    _draw += ' ';
                }
            }
            _draw += '\n';
        }
        return _draw;
    };
    return Square;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(xCor, yCor, Color, Height, Width) {
        var _this = _super.call(this) || this;
        _this.xCor = xCor;
        _this.yCor = yCor;
        _this.Color = Color;
        _this.Height = Height;
        _this.Width = Width;
        return _this;
    }
    Rectangle.prototype.display = function () {
        return " X Cordinates: " + this.xCor + ", \n        Y Cordinates: " + this.yCor + ", \n        Color: " + this.Color + ", \n        Height: " + this.Height + ",\n        Width: " + this.Width;
    };
    Rectangle.prototype.Area = function () {
        return this.Height * this.Width;
    };
    Rectangle.prototype.Circumference = function () {
        return (2 * this.Height) + (2 * this.Width);
    };
    Rectangle.prototype.draw = function () {
        var _draw = '';
        for (var i = 0; i < this.Height; i++) {
            for (var j = 0; j < this.Width; j++) {
                if (i == 0 || i == this.Height - 1) {
                    _draw += '*';
                }
                else if (j == 0 || j == this.Width - 1) {
                    _draw += '*';
                }
                else {
                    _draw += ' ';
                }
            }
            _draw += '\n';
        }
        return _draw;
    };
    return Rectangle;
}(Shape));
// interface - drawable
// const c1 = new Circle(3, 2, 'red', 3);
// const s1 = new Square(2, 2, 'red', 5);
// const r1 = new Rectangle(3, 1, 'blue', 3, 5);
// // //console.log(s1.draw());
// console.log(r1.draw());
var Tester = /** @class */ (function () {
    function Tester() {
    }
    Tester.test = function () {
        var reference;
        var rand = Math.ceil(Math.random() * 3);
        console.log("Type: " + rand);
        switch (rand) {
            case 1:
                reference = new Circle(3, 3, 'red', 5);
                console.log("Diameter: " + reference.Diameter());
                break;
            case 2:
                reference = new Square(2, 2, 'blue', 4);
                break;
            case 3:
                reference = new Rectangle(1, 1, 'purple', 6, 2);
                break;
        }
        console.log("Area: " + reference.Area());
        console.log("Circumference: " + reference.Circumference());
        console.log("Display all: " + reference.display());
    };
    return Tester;
}());
var Reporter = /** @class */ (function () {
    function Reporter() {
    }
    Reporter.prototype.showReport = function (s) {
        if (s instanceof Square) {
            console.log(s.draw());
        }
        else if (s instanceof Rectangle) {
            console.log(s.draw());
        }
        console.log("Area: " + s.Area());
        console.log("Circumference: " + s.Circumference());
        console.log("Display all: " + s.display());
    };
    return Reporter;
}());
function main() {
    // const test1 = new Tester();
    // Tester.test();
    var c1 = new Circle(3, 2, 'red', 3);
    var s1 = new Square(2, 2, 'red', 5);
    var r1 = new Rectangle(3, 1, 'blue', 3, 5);
    var report = new Reporter();
    report.showReport(c1);
    report.showReport(s1);
    report.showReport(r1);
}
main();
