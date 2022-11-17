function onSubmit() {
    let caseStory = document.getElementById("case").value;
    console.log(caseStory);
    if (caseStory == "101") {
        alert("Best of luck")
        window.location.href = "https://flourishing-macaron-2aa3ac.netlify.app/case1.html"
        return false
    } else if (caseStory == "202") {
        window.location.href = "https://flourishing-macaron-2aa3ac.netlify.app/case2.html"
        return false;
    } else if (caseStory == "303") {
        window.location.href = "https://flourishing-macaron-2aa3ac.netlify.app/case3.html"
        return false;
    } else {
        alert("You are not authorized to access this case. Please try another case number")
        return false;
    }
}