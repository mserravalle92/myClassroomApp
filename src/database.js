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
import Dexie from '../node_modules/dexie/dist/dexie';
var myClassRoomAppDB = (function (_super) {
    __extends(myClassRoomAppDB, _super);
    function myClassRoomAppDB() {
        var _this = _super.call(this, "myClassRoomAppDB") || this;
        _this.version(1).stores({
            school: '++id,name,address,phone',
            course: '++id,grade,section,level,schoolId',
            student: '++id,name,surname,courseId',
            assistance: '++id,date,studentId,present'
        });
        _this.school.mapToClass(School);
        _this.course.mapToClass(Course);
        _this.student.mapToClass(Student);
        _this.assistance.mapToClass(Assistance);
        return _this;
    }
    return myClassRoomAppDB;
}(Dexie));
export { myClassRoomAppDB };
/********************************************/
/***************** SCHOOL *******************/
/********************************************/
var School = (function () {
    function School(name, id, address, phone) {
        this.name = name;
        if (id)
            this.id = id;
        if (address)
            this.address = address;
        if (phone)
            this.phone = phone;
    }
    return School;
}());
export { School };
//# sourceMappingURL=database.js.map