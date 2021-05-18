const Employee = require("../src/lib/employee");

describe("Employee Class", () => {
  const mockAnswer = {
    name: "Adam",
    employeeID: "125",
    email: "adamarthur44@gmail.com",
    role: "Employee",
  };

  describe("Constructor Test", () => {
    it("should create an instance of the employee", () => {
      const actual = new Employee(mockAnswer);

      expect(actual).toBeInstanceOf(Employee);
    });

    it("should set the all the employee details inside the object ", () => {
      const actual = new Employee(mockAnswer);

      expect(actual.name).toEqual(mockAnswer.name),
        expect(actual.employeeID).toEqual(mockAnswer.employeeID),
        expect(actual.email).toEqual(mockAnswer.email),
        expect(actual.getRole()).toEqual(mockAnswer.role);
    });
  });

  describe("Employee Methods", () => {
    it("should return the employees name", () => {
      const actual = new Employee(mockAnswer);

      const result = actual.getName();

      expect(result).toEqual(mockAnswer.name);
    });

    it("should return the employees ID number", () => {
      const actual = new Employee(mockAnswer);

      const result = actual.getID();

      expect(result).toEqual(mockAnswer.employeeID);
    });

    it("should return the employees email address", () => {
      const actual = new Employee(mockAnswer);

      const result = actual.getEmail();

      expect(result).toEqual(mockAnswer.email);
    });

    it("should return the employees role", () => {
      const actual = new Employee(mockAnswer);

      const result = actual.getRole();

      expect(result).toEqual(mockAnswer.role);
    });
  });
});