function onSubmit() {
    let caseStory = document.getElementById("case").value;
    console.log(caseStory);
    if (caseStory == "101") {
        alert("Go to /case1.html")
        return false
    } else if (caseStory == "202") {
        alert("Go to /case2.html")
        return false;
    } else if (caseStory == "303") {
        alert("Go to /case3.html")
        return false;
    } else {
        alert("You are not authorized to access this case. Please try another case number")
        return false;
    }
}