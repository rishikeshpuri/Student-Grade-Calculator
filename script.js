let calcy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    // console.log(wd);
    let grade = "";

    let passOrFail = '';

    let totalGrade = +wd + +maths + +comp + +phy;
    // alert(totalGrade);

    let percenrage = (totalGrade/400)*100;
    // alert(percenrage);

    if(percenrage <= 100 && percenrage >= 80){
        grade = 'A';
    }
    else if(percenrage <= 79 && percenrage >= 60){
        grade = 'B';
    }
    else if(percenrage <= 59 && percenrage >= 40){
        grade = 'C';
    }
    else {
        grade = 'F';
    }

    if(percenrage >= 40){
        passOrFail = 'Pass';
    }
    else{
        passOrFail = 'Fail';
    }
    let resultDetail = document.getElementById('showData');

    resultDetail.innerHTML = ` Out of 400 your total Marks is ${totalGrade} and percentage is ${percenrage}%.
    <br>Your Grade is ${grade}. You are ${passOrFail}.`


}