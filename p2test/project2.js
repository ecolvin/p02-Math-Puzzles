//Eric Colvin

var userGuess = "";

function checkGuess(answer)
{
  var correct = 0;
  userGuess = document.getElementById("input").value;
  if(userGuess != "")
  {
    if(isNaN(userGuess))
    {
      document.getElementById("output").innerHTML="The answer must be a number, please try again.";
    }
    else
    {
      document.getElementById("output").innerHTML="";
      if(userGuess == answer)
      {
        document.getElementById("output").innerHTML="Correct!!!";
        correct = 1;
      }
      else {
        document.getElementById("output").innerHTML="That is incorrect, please try again.";
      }
    }
  }
  else
  {
    document.getElementById("output").innerHTML="";
  }

  if(correct == 1)
  {
    if(answer == 28256)
    {
      setCookie("q1", 1, 1);
    }
    else if(answer == 615975)
    {
      setCookie("q2", 1, 1);
    }
    else
    {
      setCookie("q3", 1, 1);
    }
  }
  else
  {
    if(answer == 28256)
    {
      setCookie("q1", 0, 1);
    }
    else if(answer == 615975)
    {
      setCookie("q2", 0, 1);
    }
    else
    {
      setCookie("q3", 0, 1);
    }
  }
}

function calculateResults()
{
  var numCorrect = 0;
  if(getCookie("q1") == 1)
  {
    document.getElementById("q1").innerHTML = "Correct";
    numCorrect++;
  }
  else {
    document.getElementById("q1").innerHTML = "Incorrect";
  }

  if(getCookie("q2") == 1)
  {
    document.getElementById("q2").innerHTML = "Correct";
    numCorrect++;
  }
  else {
    document.getElementById("q2").innerHTML = "Incorrect";
  }

  if(getCookie("q3") == 1)
  {
    document.getElementById("q3").innerHTML = "Correct";
    numCorrect++;
  }
  else {
    document.getElementById("q3").innerHTML = "Incorrect";
  }

  document.getElementById("total").innerHTML = numCorrect;
}


//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
