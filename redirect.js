function onSubmit() {
    let caseStory = document.getElementById("case").value;
    console.log(caseStory);
    if (caseStory == "101") {
        alert("Best of luck")
        window.location.replace("case1.html")
        return false
    } else if (caseStory == "202") {
        alert("Best of luck")
        window.location.replace("case2.html")
        return false;
    } else if (caseStory == "303") {
        alert("Best of luck")
        window.location.replace("case3.html")
        return false;
    } else {
        alert("You are not authorized to access this case. Please try another case number")
        return false;
    }
}