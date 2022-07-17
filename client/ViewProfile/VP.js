Template.viewProf.events({
    'click .js-edit'(){
        let dId = $("#docId").val();
        $("#viewModal").modal("hide");
        $("#editId").val(dId);
        let editData = socialdb.findOne({"_id":dId});
        $("#editProfpic").val(editData.picPath);
        $("#editSecondProfpic").val(editData.picPath2);
        $("#editfName").val(editData.fname);
        $("#editlName").val(editData.lname);
        $("#editNum").val(editData.num);
        $("#editDesc").val(editData.desc);
        if(editData.sex == "male"){
            $("#editmale").attr("checked", true);
            $("#editfemale").attr("checked", false);
        }
        else{
            $("#editmale").attr("checked", false);
            $("#editfemale").attr("checked", true);
        }
        $("#editModal").modal("show");
    }
});
