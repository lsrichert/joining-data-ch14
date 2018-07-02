const employees = [
    {
        "employeeId": 1,
        "name": "Megan"
    },
    {
        "employeeId": 2,
        "name": "Jason"
    },
    {
        "employeeId": 3,
        "name": "Molly"
    },
    {
        "employeeId": 4,
        "name": "Grace"
    },
    {
        "employeeId": 5,
        "name": "Henry"
    }
]
console.log(employees);

const departments = [
    {
        "departmentId": 1,
        "departmentName": "IT"
    },
    {
        "departmentId": 2,
        "departmentName": "HumanResources"
    },
    {
        "departmentId": 3,
        "departmentName": "CustomerService"
    }
]
console.log(departments);

const computers = [
    {
        "computerId": 1,
        "computerName": "Mac001"
    },
    {
        "computerId": 2,
        "computerName": "Mac002"
    },
    {
        "computerId": 3,
        "computerName": "Mac003"
    },
    {
        "computerId": 4,
        "computerName": "Mac004"
    },
    {
        "computerId": 5,
        "computerName": "Mac005"
    }
]
console.log(computers);

const employeeDatabase = [
    {
        "employeeId": 1,
        "departmentId": 2,
        "computerId": 2
    },
    {
        "employeeId": 2,
        "departmentId": 3,
        "computerId": 4
    },
    {
        "employeeId": 3,
        "departmentId": 1,
        "computerId": 1
    },
    {
        "employeeId": 4,
        "departmentId": 1,
        "computerId": 3
    },
    {
        "employeeId": 5,
        "departmentId": 3,
        "computerId": 5
    }

    
]

for (let i = 0; i < employees.length; i++) {
    const element = employees[i];
    console.log("element", element)

}
console.log(employeeDatabase);














