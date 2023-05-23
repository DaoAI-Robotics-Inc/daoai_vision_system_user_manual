const APPLICATION_MAP = {
    0 : "纸箱拆码",
    1 : "麻袋拆垛",
    2 : "快递供包",
    3 : "货品拣选",
    4 : "周转箱拆码",
    5 : "圆盘工件",
    6 : "圆棒工件",
    7 : "壳体工件",
    8 : "异性工件",
    9 : "块状工件",
    10 : "薄片工件",
}

const CAMERA_MAP = {
    0 : "BP AMR",
    1 : "BP AMR-GPU",
    2 : "BP-S",
    3 : "BP-M",
    4 : "BP-L",
}

const INSTALLATION_MAP = {
    0 : "EYE_IN_HAND",
    1 : "EYE_TO_HAND",
}

// get currently selected application type
// return ID (Int) , corresponding to APPLICATION_MAP
function getCheckedApplicationId(type){
    var checkboxes = document.getElementsByName(type);  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked )  
            return i;
    }  
    return -1;
}

// on check handler, ensures that only one check box is checked.
function onCheckboxClick(id, type)  
{  
    var checkboxes = document.getElementsByName(type);  
    var id = id 
    checkboxes[id].checked = true
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked && i != id)  
            // call uncheck except i,  return
            checkboxes[i].checked = false
    }  
    checkForSuitableCamera();
    return;
}  

// 
function checkForSuitableCamera(){
    
    // check that all input is entered
    var applicationSelected = getCheckedApplicationId("application");
    if (applicationSelected == -1) return;

    var installationSelected = getCheckedApplicationId("installation");
    if (installationSelected == -1) return;

    var dimension = document.getElementsByName("dimension");
    for(var i = 0; i<dimension.length; i++){

        if(!dimension[i].value){
            return;
        }
    }

    // check for camera selection logic
    var camera = document.getElementsByName("model");  

    //reset if recommended
    for (var i = 0; i< camera.length;i++){
        camera[i].style.color = "black";
        camera[i].style.backgroundColor = "lightgray";
    }

    if (INSTALLATION_MAP[installationSelected] == "EYE_IN_HAND"){
        console.log("in hand");
        camera[1].style.color = "white";
        camera[1].style.backgroundColor = "green";
        camera[0].style.color = "white";
        camera[0].style.backgroundColor = "green";

    }
    else if ( dimension[0].value <= 526
        && dimension[1].value <= 843
        && dimension[2].value <= 1000){
        // within BP-S FOV, recommend BP-S
        camera[2].style.color = "white";
        camera[2].style.backgroundColor = "green";

    }
    else if ( dimension[0].value <= 776
        && dimension[1].value <= 1154
        && dimension[2].value <= 1800){
        // within BP-M FOV, recommend BP-S
        camera[3].style.color = "white";
        camera[3].style.backgroundColor = "green";

    }
    else if ( dimension[0].value <= 1534
        && dimension[1].value <= 2495
        && dimension[2].value <= 3000){
        // within BP-L FOV, recommend BP-L
        camera[4].style.color = "white";
        camera[4].style.backgroundColor = "green";
    }
    else{
        //if none of the condition is met
        return;
    }
}