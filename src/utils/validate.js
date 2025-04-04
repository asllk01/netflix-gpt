const checkValidData = (name=null,email,password)=>{

    const isNameValid = /^[a-zA-Z\s'-]+$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!isNameValid) return "Name is not Valid"
    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password is not Valid";

    return null;
}

export default checkValidData;