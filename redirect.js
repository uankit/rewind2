function onSubmit() {
    let caseStory = document.getElementById("case").value;
    console.log(caseStory);
    if (caseStory == "101") {
        alert("Best of luck")
        window.location = "case1.html"
        return false;
    } else if (caseStory == "202") {
        window.location = "case2.html"
        return false;
    } else if (caseStory == "303") {
        window.location = "case3.html"
        return false;
    } else {
        alert("You are not authorized to access this case. Please try another case number")
        return false;
    }
}