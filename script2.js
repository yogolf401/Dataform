

function valSurvey(){

if 	(
   valName() == true &&
   valTitle() == true 
   
  
   

  )
	{

	location.href='nosale.asp';
	}

}



function valName() {


if (document.frmFormat.txtName.value.length < 1)
{
	
	alert("Please enter your name.")
	return false;
}


else if (document.frmFormat.txtName.value.length >=  1)
{
	
	return true;
}

}



function valTitle() {


if (document.frmFormat.txtTitle.value.length < 1)
{
	
	alert("Please enter your Title.")
	return false;
}


else if (document.frmFormat.txtTitle.length >=  1)
{
	
	return true;
}

}








