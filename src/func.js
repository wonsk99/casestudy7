function testlink() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      alert(xhr.response);
    }
  }
		
  var reqlink = 'https://case7functions.azurewebsites.net/api/HttpTrigger1?code=dri0Qshw5Je1DQwvyeo-zgC0NTZyXsCaW7PtcadIBgiaAzFuJ3rItQ==&name='
  var test = document.getElementById("testinput").value;
		
  xhr.open('get', reqlink+test, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  xhr.send();
}

function toaster() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
		var img = document.createElement("img");
		img.src = "https://webappimages.blob.core.windows.net/images/toaster1.jpg";
		img.width = "100";
		img.height = "100";
		
		const papa = document.getElementById("imgs");
		papa.appendChild(img);
    }
  }
		
  var reqlink = 'https://case7functions.azurewebsites.net/api/HttpTrigger1?code=dri0Qshw5Je1DQwvyeo-zgC0NTZyXsCaW7PtcadIBgiaAzFuJ3rItQ=='
		
  xhr.open('get', reqlink, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  xhr.send();
}
