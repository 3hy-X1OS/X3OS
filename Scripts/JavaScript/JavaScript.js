let Username;

Username = Number(Username)
Username = String(Username)
print( typeof(Username))

document.getElementById('button').onclick = function(){
    Username = document.getElementById('input').value;
    document.getElementById('label').innerHTML = 'Hello: "' + Username + '"'

};