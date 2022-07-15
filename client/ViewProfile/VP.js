Template.viewProf.events({
    'click .js-edit'(){
        let dId = $("#docId").val();
        // console.log("editing", dId);
        $("#viewModal").modal("hide");
        $("#editId").val(dId);
        let editData = socialdb.findOne({"_id":dId});
        $("#editProfpic").val(editData.picPath);
        $("#editSecondProfpic").val(editData.picPath2);
        $("#editfName").val(editData.fname);
        $("#editlName").val(editData.lname);
        $("#editNum").val(editData.num);
        $("#edit").val(editData.picPath);
        $("#editDesc").val(editData.desc);
        $("#editProfpic").val(editData.picPath);
        $("#editModal").modal("show");
        console.log(editData);
    }
});