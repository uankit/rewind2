function onSubmit() {
    let caseStory = document.getElementById("case").value;
    console.log(caseStory);
    if (caseStory == "101") {
        alert("Best of luck")
        window.location('https://uankit.github.io/rewind2/case1.pdf');
        return false
    } else if (caseStory == "202") {
        alert("Best of luck")
        window.location = "/case2.html"
        return false;
    } else if (caseStory == "303") {
        alert("Best of luck")
        window.location = "/case3.html"
        return false;
    } else {
        alert("You are not authorized to access this case. Please try another case number")
        return false;
    }
}