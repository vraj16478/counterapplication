let count =0;
document.getElementById("decreasebtn").onclick = () => {
    count-=1;
    document.getElementById("counter").innerHTML = count;
};
document.getElementById("resetbtn").onclick = () => {
    count=0;
    document.getElementById("counter").innerHTML = count;
};

document.getElementById("increasebtn").onclick = () => {
    count+=1;
    document.getElementById("counter").innerHTML = count;
};