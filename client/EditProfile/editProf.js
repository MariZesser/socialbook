Template.editProf.events({
    'click .js-editProfile'(){
        let editId = $("#editId").val();
        let pic = $("#editProfpic").val();
        let pic2 = $("#editSecondProfpic").val();
        let fName = $("#editfName").val();
        let lName = $("#editlName").val();
        let Num = $("#editNum").val();
        let Desc = $("#editDesc").val();
        let FavC = $("#editFavC").val();
        let Hob = $("#editHob").val();
        let Sex = $("#editmale").prop("checked") ? "male" : "female";

        if (validateEditForm(pic,pic2,fName,lName,Num,Desc,FavC,Hob,Sex)) {
        socialdb.update({"_id": editId},{
            $set:{
                "picPath": pic,
                "picPath2": pic2,
                "fname": fName,
                "lname": lName,
                "num":Num,
                "desc":Desc,
                "favc":FavC,
                "hob":Hob,
                "sex":Sex,
                "createdOn": new Date().getTime()
            }
        });
        $("#editModal").modal("hide");
        }
        
    }
});

let validateEditForm = (fn,ln,nm,dc,fc,hb,Sx,pc,pc2) => {
    let valid = true;
    $("#editpic").removeClass("errorBox");
    $("#editpic2").removeClass("errorBox");
    $("#editfName").removeClass("errorBox");
    $("#editlName").removeClass("errorBox");
    $("#editNum").removeClass("errorBox");
    $("#editDesc").removeClass("errorBox");
    $("#editFavC").removeClass("errorBox");
    $("#editHob").removeClass("errorBox");
    $("#editSex").removeClass("errorBox");
  
    if (!fn) {
      $("#editfName").addClass("errorBox");
      valid = false;
    }
    if (!ln) {
      $("#editlName").addClass("errorBox");
      valid = false;
    }
    if (!nm) {
      $("#editNum").addClass("errorBox");
      valid = false;
    }
    if (!dc) {
      $("#editDesc").addClass("errorBox");
      valid = false;
    }
    if (!fc) {
        $("#editFavC").addClass("errorBox");
        valid = false;
    }
    if (!hb) {
        $("#editHob").addClass("errorBox");
        valid = false;
    }
    if (!Sx) {
      $("#editSex").addClass("errorBox");
      valid = false;
    }
    if (!pc) {
      $("#editpic").addClass("errorBox");
      valid = false;
    }
    if (!pc2) {
      $("#editpic2").addClass("errorBox");
      valid = false;
    }
    return valid;
  }
  