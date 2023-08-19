const validateForm = () => {
    let fName = document.getElementById("fName").value;
    if(fName==='' || fName===null){
        alert("Enter a valid first name!");
        return false;
    }

    let lName = document.getElementById("lName").value;
    if(lName==='' || lName===null){
        alert("Enter a valid last name!");
        return false;
    }

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let eMail = document.getElementById("eMail").value;
    if(!eMail.match(mailFormat)){
        alert("Invalid email address!");
        return false;
    }

    let phoneNumber = document.getElementById("phone").value;
    if(isNaN(phoneNumber)){
        alert("Enter a valid phone number!");
        return false;
    }
    else{
        if(phoneNumber.length!=10){
            alert("Enter a valid phone number!");
            return false;
        }
    }

    let dob = document.getElementById("dob").value;
    if(dob===null || dob===''){
        alert("Enter valid DOB!");
        return false;
    }

    else{
        const today = new Date();
        dob=new Date(dob);
        if(dob>today){
            alert("Enter valid DOB!");
            return false;
        }
    }

    let age = document.getElementById("age").value;
    if(age<=0){
        alert("Enter valid age!");
        return false;
    }
    else{
        const today = new Date();
        const ageCalculated = today.getFullYear() - dob.getFullYear() - (today.getMonth() < dob.getMonth() || 
            (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()));
        if(age!=ageCalculated){
            alert("Enter valid age or DOB!");
            return false;
        }
    }
    
    let gender = document.querySelectorAll('input[name="gender"]')
    let flag=false;
    for (const gen of gender) {
        if (gen.checked) {
            flag=true;
            break;
        }
    }
    if(flag===false){
        alert("Please choose your gender!");
        return false;
    }

    let file = document.getElementById("resume").value;
    if(file===null || file===''){
        alert("Please upload your Resume!")
        return false;
    }

}