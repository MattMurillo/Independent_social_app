function addUser()
{
    user_name = document.getElementById("User_Name").value;

    localStorage.setItem("User_Name", User_Name)

    window.location = "ErrorChats_room.html"
}

