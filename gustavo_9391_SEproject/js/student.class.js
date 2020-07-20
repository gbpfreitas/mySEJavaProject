class Student{
	userId = "";
	firstName = "";
	lastName = "";
	birthDate = "";
	age = 0;
	phoneNumber = "";
	email = "";
	username = "";
	password = "";
	passportNumber = "";

	constructor(userId,fName,lName,bDate,age,pNumber,email,username,password,passportNumber){
		this.userId = userId;
		this.firstName = fName;
		this.lastName = lName;
		this.birthDate = bDate;
		this.age = age;
		this.phoneNumber = pNumber;
		this.email = email;
		this.username = username;
		this.password = password;
		this.passportNumber = passportNumber;
	}

	getUserId(){
		return this.userId;
	}
	setUserId(userId){
		this.userId = userId;
	}
	getFName(){
		return this.firstName;
	}
	setFName(fName){
		this.firstName = fName;
	}
	getLName(){
		return this.lastName;
	}
	setLName(lName){
		this.lastName = lName;
	}
	getBDate(){
		return this.birthDate;
	}
	setBDate(bDate){
		this.birthDate = bDate;
	}
	getAge(){
		return this.age;
	}
	setAge(age){
		this.age = age;
	}
	getEmail(){
		return this.email;
	}
	setEmail(email){
		this.email = email;
	}
	getPNumber(){
		return this.phoneNumber;
	}
	setPNumber(pNumber){
		this.phoneNumber = phoneNumber;
	}
	getUsername(){
		return this.username;
	}
	setUsername(username){
		this.username = username;
	}
	getPassword(){
		return this.password;
	}
	setPassword(password){
		this.password = password;
	}
	getPassportN(){
		return this.passportNumber;
	}
	setPassportN(passportN){
		this.passportNumber = passportN;
	}
}