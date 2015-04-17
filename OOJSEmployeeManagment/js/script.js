function Employee(name, age, department) {
	this.name = name;
	Employee.empIdcounter++;
	this.id = Employee.empIdcounter;
	this.department = department;
	this.age = age;
	// this.employeeList = [];
	this.addEmployee = function() {
		var obj = new Employee(this.name, this.age, this.department, this.id);
		Employee.employeeList.push(obj);
	}
	this.getEmployeeList = function() {
		return Employee.employeeList;
	}
	this.updateEmployee = function(age=null,id,department=null) {
		for(var i = 0; i < Employee.employeeList.length; i++) {
			if(Employee.employeeList[i].id == id)
			{
				var emp = new Employee();
				emp = Employee.employeeList[i];
				if(age != null)
				{
					
					if(emp.age != age)
					{
						emp.age = age;
					}
				}
				if (department != null) 
				{
					if (emp.department != null) 
					{
						emp.department = department;
					}
				}
			}
		}
	}
	this.deleteEmployee = function(id) {
		for(var i = 0; i < Employee.employeeList.length; i++) {
			if(Employee.employeeList[i].id == id)
			{
				Employee.employeeList.pop(Employee.employeeList[i]);
			}
		}
	}
};
Employee.employeeList = [];
Employee.empIdcounter = 0;

function goToCreateEmployeeView() {
	document.getElementById('create').style.display = 'block';
}

function addEmployeeToList() {
	document.getElementById('display').style.display = 'block';
	var name = document.empReg.empname.value;
	console.log(name);
	var age = document.empReg.age.value;
	var dept = document.empReg.department.value;
	var emp = new Employee(name,age,dept);
	emp.addEmployee();

	var employeeL = emp.getEmployeeList();
	console.log(employeeL.length);
	var table = document.getElementById('employeeTable');

	var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
	
	row.insertCell(0).innerHTML= employeeL[rowCount-1].id; 
    row.insertCell(1).innerHTML= employeeL[rowCount-1].name;
    row.insertCell(2).innerHTML= employeeL[rowCount-1].age;
    row.insertCell(3).innerHTML= employeeL[rowCount-1].department;
    row.insertCell(4).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteEmployeeFromList(this)">';
    row.insertCell(4).innerHTML= '<input type="button" value = "Update" onClick="Javacsript:updateEmployeeList(this)">';
}

function deleteEmployeeFromList(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("employeeTable");
    table.deleteRow(index);

   var employeeL = Employee.employeeList;
    var empD = employeeL[index-1]
    empD.deleteEmployee(empD.id);
}


function updateEmployeeList(obj) {
	var index = obj.parentNode.parentNode.rowIndex;
	var employeeL = Employee.employeeList;
	var empD = employeeL[index-1];
	empD.updateEmployee(document.empReg.age.value, empD.id, document.empReg.department.value);

}

function showAllEmployee() {
	var table = document.getElementById('employeeTable');
	var rowCount = table.rows.length;

	for (var i = rowCount-1; i >= 1; i--) {
		table.deleteRow(i);
	}

	var employeeL = Employee.employeeList;
	for (var i = 0; i <= employeeL.length; i++) {
		var rowCount = table.rows.length;
	    var row = table.insertRow(rowCount);		
		row.insertCell(0).innerHTML= employeeL[i].id; 
	    row.insertCell(1).innerHTML= employeeL[i].name;
	    row.insertCell(2).innerHTML= employeeL[i].age;
	    row.insertCell(3).innerHTML= employeeL[i].department;
	    row.insertCell(4).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteEmployeeFromList(this)">';
	    row.insertCell(4).innerHTML= '<input type="button" value = "Update" onClick="Javacsript:updateEmployeeList(this)">';
	};
}