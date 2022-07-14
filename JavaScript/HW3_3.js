const enterprises = [
    {
        id: 1,
        name: "Предприятие 1",
        departments: [
            {
                id: 2,
                name: "Отдел тестирования",
                employees_count: 10,
            },
            {
                id: 3,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 4,
                name: "Администрация",
                employees_count: 15,
            },
        ]
    },
    {
        id: 5,
        name: "Предприятие 2",
        departments: [
            {
                id: 6,
                name: "Отдел разработки",
                employees_count: 50,
            },
            {
                id: 7,
                name: "Отдел маркетинга",
                employees_count: 20,
            },
            {
                id: 8,
                name: "Отдел охраны труда",
                employees_count: 5,
            },
        ]
    },
    {
        id: 9,
        name: "Предприятие 3",
        departments: [
            {
                id: 10,
                name: "Отдел аналитики",
                employees_count: 0,
            },
        ]
    }
]

//utils
const employeeCounterHelper = function(number) {
    lastNumber = number.toString().split('').pop();
    if(lastNumber && number) {
        if(lastNumber == 1) return `${number} - сотрудник`;
        else if (lastNumber > 1 && lastNumber < 5) return `${number} - сотрудника`;
        else return `${number} - сотрудников`;
    }  else return "Нет сотрудников"
};

const getNewId = function (company) {
    let maxId = 0;
    company.forEach(comp => {
        if(maxId < comp.id) maxId = comp.id
        if(comp.departments) {
            comp.departments.forEach(dept => {
                if(maxId < dept.id) maxId = comp.id
            })
        }
    })
    return maxId +1;
}
getNewId(enterprises);


const getEnterprise = function (val) {
    let enterprise = enterprises.find(el => el.id === val || el.name === val)
    return enterprise ? enterprise : false
}

const getDepartment = function(val) {
    let department;
    enterprises.forEach((company) =>{
        const dept = company.departments.find((el) => {
            return el.id == val || el.name == val
        });
        if(dept) department = dept;
    });
    return department ? department : false
};

// 1. Вывести все предприятия и их отделы.Рядом указать количество сотрудников.Для предприятия посчитать сумму всех сотрудников во всех отделах.

const getStructure = function (company) {
     company.forEach(comp => {
        let depts = [];
        let count = 0;
        depts.push(comp.name);
        if(comp.departments) {
            comp.departments.forEach(dept => {
                count += dept.employees_count;
                depts.push(` - ${dept.name} ${employeeCounterHelper(dept.employees_count)}`);
            });
            depts[0] += ` (${employeeCounterHelper(count)})`
        }
         console.log(depts.join(`\n`));
     });
}
getStructure(enterprises);

//2.Написать функцию, которая будет принимать 1 аргумент(id отдела или название отдела и возвращать название предприятия, к которому относится).

const getEnterpriseByDepartment = function (value) {
    let enterprise;
    enterprises.forEach(ent => {
        let department;
        if (ent.departments) {
            department = ent.departments.find(dept => {return dept.id === value || dept.name === value})
        }
        if(department) enterprise = ent;
    })
    return enterprise ? enterprise : `Нет организации с id == ${value} или именем == ${value}`;
};
console.log(getEnterpriseByDepartment(521));

// 3. Написать функцию, которая будет добавлять предприятие.В качестве аргумента принимает название предприятия

const addEnterprise = function (name) {
    enterprises.push({
        id: getNewId(enterprises),
        name: name,
        departments: []
    })
}
addEnterprise('Testers');

// 4. Написать функцию, которая будет добавлять отдел в предприятие.В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

const addDepartment = function (entId, name, count = 0) {
    const enterprise = getEnterprise(entId)
    if (enterprise) enterprise.departments.push({
        id: getNewId(enterprises),
        name: name,
        employees_count: count,
    })
}
addDepartment(11, "QA", 20);
console.log(enterprises[0]);

// 5. Написать функцию для редактирования названия предприятия.Принимает в качестве аргумента id предприятия и новое имя предприятия.
const editEnterprise = function (val, name) {
    const enterprise = getEnterprise(val)
    if(enterprise) enterprise.name = name;
    else throw new Error ('No such enterprise')
}
editEnterprise(10, 'DevOps')
console.log(enterprises[3]);


// 6. Написать функцию для редактирования названия отдела.Принимает в качестве аргумента id отдела и новое имя отдела.

const editDepartment = function (val, name) {
    const dept = getDepartment(val);
    if (dept) dept.name = name; 
    else throw new Error('No such department')
}
editDepartment(10, "AQA")
console.log(enterprises[1]);

// 7. Написать функцию для удаления предприятия.В качестве аргумента принимает id предприятия.

const deleteEnterprise = function(val) {
    const index = enterprises.findIndex(el => el.id === val)
    enterprises.splice(index, 2)
}
deleteEnterprise(1)
console.log(enterprises)

// 8. Написать функцию для удаления отдела.В качестве аргумента принимает id отдела.Удалить отдел можно только, если в нем нет сотрудников.

const deleteDepartment = function (val) {
    enterprises.forEach(el =>{
        let index = el.departments.findIndex(d => d.id === val && d.employees_count === 0)
        if(index != -1) {
            el.departments.splice(index, 2);
        }
    })
}
deleteDepartment(11)
console.log(enterprises)

//9. Написать функцию для переноса сотрудников между отделами одного предприятия.В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).


const moveEmployees = function(currentId, newId) {
    const current = getDepartment(currentId);
    const newDept = getDepartment(newId);
    if(current && newDept && getEnterpriseByDepartment(currentId) === getEnterpriseByDepartment(newId)) {
        newDept.employees_count += current.employees_count;
        current.employees_count = 0;
    } else throw new Error("Something went wrong");
}
moveEmployees(2, 12)
console.log(enterprises[0])