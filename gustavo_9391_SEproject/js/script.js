//Boolean Return
function checkIfUserExist(userName){
	let userExist = false;
	for(let i=0;i<studentList.length;i++){
		if(studentList[i].userID == userName){
			userExist = true;
			break;
		}else{
			userExist = false;
		}
	}
	return userExist;
}

function getAgeFormatted(bDate){
	let birth = new Date(bDate);
	//let birth = new Date('07/11/2003');
	let check = new Date();

	let milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;


	let ageInDays = (check - birth) / milliDay;

	let ageInYears =  Math.floor(ageInDays / 365 );

	return ageInYears;
}

function generateUsername(){
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let username = lastName+firstName;
	document.getElementById("username").value = username.toLowerCase();

	let password = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2); 
	document.getElementById("password").value = password;
}

function generatePassword(){
	let password = Math.random().toString(36).slice(2) + Math.random().toString(36).toUpperCase().slice(2); 
	document.getElementById("password").value = password;
}

function findDataLogPosition(username){
	let dataLogPosition = -1;
	if(!checkIfUserExist(username)){
		alert("Student Not Found!");
	}else{
		for(let i = 0; i<studenteDataLog.length;i++){
			if(studentDataLog.userID == username){
				dataLogPosition = i;
				break;
			}
		}
	}	
	return dataLog;
}

//Integer Return
function searchStudent(userName){
	let studentPosition = -1;
	for(let i=0;i<studentList.length;i++){
		if(studentList[i].userID == userName){
			studentPosition = i;
			break;
		}
	}
	return studentPosition;
}


function getFormData(){
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let bDate = document.getElementById("bDate").value;
	let passportNumber = document.getElementById("passportNumber").value;
	let phoneNumber = document.getElementById("phoneNumber").value;
	let email = document.getElementById("email").value;
	
		
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;

	let newBDate = bDate.split("-");
	let age = newBDate[1]+"/"+newBDate[0]+"/"+newBDate[2];


	let newStudent = new Student(username,firstName,lastName,bDate,getAgeFormatted(age),phoneNumber,email,username,password,passportNumber);

	insertStudent(newStudent);

}

function insertStudent(newStudent){
	if(!checkIfUserExist(newStudent.username)){
		studentList.push(newStudent);
		alert("Student Added Succesfully!");
	}
}

function updateStudent(student){
	let studentPosition = searchStudent(student.userName);
	if(studentPosition < 0){
		alert("Student Not Found!");
	}else{
		studentList[studentPosition].userID = student.username;
		studentList[studentPosition].firstName = student.firstName;
		studentList[studentPosition].lastName = student.lastName;
		studentList[studentPosition].birthDate = student.birthDate;
		studentList[studentPosition].age = student.age;
		studentList[studentPosition].phoneNumber = student.phoneNumber;
		studentList[studentPosition].email = student.email;
		studentList[studentPosition].username = student.username;
		studentList[studentPosition].password = student.password;
		studentList[studentPosition].passportNumber = student.passportNumber;
	}
}

function updateDataLog(username,newDataLog){
	let oldDataLog = "";
	
	if(!checkIfUserExist(newStudent.username)){
		alert("Student Not Found!");
	}else{
		for(let i = 0; i<studenteDataLog.length;i++){
			if(studentDataLog.userID == username){
				oldDataLog = studentDataLog[i].updateDataLog;
				studentDataLog[i].updateDataLog = oldDataLog + "%0A" + newDataLog;
				break;
			}
		}
	}
}


function generateReport(username){
	let studentPosition = searchStudent(userName);
	let dataLogPosition = findDataLogPosition(username);

	let studentUserId = document.getElementById("studentUserId");
	let studentName = document.getElementById("studentName");
	let studentPassport = document.getElementById("studentPassport");
	let studentEmail = document.getElementById("studentEmail");
	let studentLog = document.getElementById("studentLog");

	studentUsername = studentList[studentPosition].username;
	studentName = studentList[studentPosition].firstName + " " + studentList[studentPosition].lastName;
	studentPassport = studentList[studentPosition].passportNumber;
	studentEmail = studentList[studentPosition].email;
	studentLog = studentDataLog[dataLogPosition].updateDataLog;
}

function formSearchStudent(){
	let topDivDom = document.getElementById("top-div");
	let formDom = document.getElementById("form-dom");
	topDivDom.innerHTML = "";
	formDom.innerHTML = "";
	topDivDom.innerHTML = `
		<table>
			<tr>
				<td>Insert Student Username: </td>
				<td><input type="text" id="studentUsername" size="15"></td>
				<td colspan="2"><button class="button" onclick="buildInsertForm()">Find Student</button></td>
			</tr>
		</table>
	`;
	
}

function buildInsertForm(){
	let username = document.getElementById("studentUsername");
	let formDom = document.getElementById("form-dom");


	formDom.innerHTML = `
		<p></p>
	`;

	if(checkIfUserExist(username)){
		formDom.innerHTML = `
			<p>
				Student Already Exist!
			</p>
		`;
	}else{
		formDom.innerHTML = `
		<p>Student Not Found!
			<br>Please, insert new Student Data.
		</p>
		<table>
			<tr>
				<td>First Name:</td>
				<td><input type="text" name="" id="firstName"></td>
			</tr>
			<tr>
				<td>Last Name:</td>
				<td><input type="text" name="" id="lastName"></td>
			</tr>
			<tr>
				<td>BirthDate:</td>
				<td><input type="date" name="" id="bDate"></td>
			</tr>
			<tr>
				<td>Phone Number:</td>
				<td><input type="text" name="" id="phoneNumber"></td>
			</tr>
			<tr>
				<td>Email:</td>
				<td><input type="text" name="" id="email" onmouseup="generateUsername()" ></td>
			</tr>
			<tr>
				<td>Username:</td>
				<td><input type="text" name="" id="username" readonly></td>
			</tr>
			<tr>
				<td>Password:</td>
				<td><input type="text" name="" id="password"></td>
			</tr>
			<tr>
				<td>Passport Number:</td>
				<td><input type="text" name="" id="passportNumber"></td>
			</tr>
			<tr>
				<td>
					<button class="button" onclick="getFormData()">Submit</button>
				</td>
				<td><button class="button" onclick="resetFields()">Reset</button></td>
			</tr>
		</table>
		`;
	}
}