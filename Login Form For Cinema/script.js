document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);

function FormValidate()
    {
        let name = document.getElementById("name").value;
        if(name != "")
        {
           alert("Succesful!");
        }
        else
        {
           alert("Full name field should not be empty!");
        }

        const PWformat = new RegExp("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/");

        let PWord = document.getElementById("password").value;
        let PWord2 = document.getElementById("RePWord").value;

        if(PWord.length >=6 && PWord.match(PWformat))
        {
            if(PWord.match(PWord2)){
               alert("Passwords match!");
            }
            else{
               alert("Passwords do not match!");
            }
        }
        else{
            alert("Password must contain at least 6 characters and include Uppercase, Lowercase, Numeric and Special characters!");
        }


        let emailID = document.getElementById("email").value;
        let atposition = emailID.indexOf("@");
        let dotposition = emailID.lastIndexOf(".");

        if(atposition < 1 || (dotposition - atposition < 2)){
            alert("Enter valid Email address!");
            return false;
        }
        else{
            alert("Email is valid!");
            return true;
        }

    }
