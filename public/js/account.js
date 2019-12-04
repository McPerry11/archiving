function loadTable(){
  getConfig(),
  $.ajax({
    url:api_url+"user/",
    dataType:"json",
    success:function(e){
      dTable.clear(),
      $.each(e,function(e,t){
        t=_.mapObject(t,function(e){
          return"object"==(void 0===e?"undefined":_typeof(e))?_.mapObject(e,function(e){
            return _.escape(e)}):_.escape(e)
        }),
        dTable.row.add([
          e+1,
          t.username,
          t.name,
          t.role.description,
          t.college.description||"",
          '\n            <button onclick="editData('+t.id+')" class="waves-effect waves-light btn btn-flat btnEdit">\n              <i class="material-icons">edit</i>\n            </button>\n            <button onclick="deleteData('+t.id+')" class="waves-effect waves-light btn btn-flat btnDelete">\n              <i class="material-icons">delete</i>\n            </button>\n          '
        ])
      }),
      dTable.draw()
    }
  })
}

function editData(e){
  var t=$("#editAccountModal");
  t.find(".loader-container").show(),
  t.modal("open"),
  $.ajax({
    url:api_url+"user/"+e,
    dataType:"json",
    success:function(e){
      e.college&&$("select[name=college]").val(e.college.id).formSelect(),
      $("select[name=type]").val(e.role.id).change().formSelect(),
      t.find("input[name=id]").val(e.id),
      t.find("input[name=first_name]").val(e.first_name),
      t.find("input[name=last_name]").val(e.last_name),
      t.find(".loader-container").fadeOut()
    }
  })
}

function deleteData(e){
  confirm("Are you sure do you want to delete?")&&($(this).prop("disabled",!1),
    $.ajax({
      url:api_url+"user/"+e,
      type:"POST",
      data:{_method:"DELETE"},
      dataType:"json",
      success:function(e){
        e.success?(alert("Deleted Successfully!"),
          loadTable()):alert(e.error)
      }
    }))
}

var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
  return typeof e
}:function(e){
  return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
};$(document).ready(function(){
  loadDatatable(),
  loadTable()
}),
$("form[name=frmAddAccount]").submit(function(e){
  e.preventDefault(),
  $(this).find("input").prop("readonly",!0),
  $(this).find("button").prop("disabled",!0),
  $.ajax({
    context:this,
    url:api_url+"user/",
    type:"POST",
    data:$(this).serialize(),
    dataType:"json",
    success:function(e){
      console.log(e),
      1==e.success?(alert("Added Successfully!"),$(this).trigger("reset"),$("#addAccountModal").modal("close"),loadTable()):(console.log(e),alert(e.error))
    }
  }).always(function(){
    $(this).find("input").prop("readonly",!1),
    $(this).find("button").prop("disabled",!1)
  })
}),
$("form[name=frmEditAccount]").submit(function(e){
  e.preventDefault(),$(this).find("input").prop("readonly",!0),
  $(this).find("button").prop("disabled",!0),
  $.ajax({
    context:this,
    url:api_url+"user/"+$(this).find("input[name=id]").val(),
    type:"POST",
    data:$(this).serialize(),
    dataType:"json",
    success:function(e){
      console.log(e),
      1==e.success?(alert("Updated Successfully!"),$("#editAccountModal").modal("close"),$(this).trigger("reset"),loadTable()):(console.log(e),alert(e.error))
    }
  }).always(function(){
    $(this).find("input").prop("readonly",!1),
    $(this).find("button").prop("disabled",!1)
  })
}),$("select[name=type]").change(function(){
  console.log($(this).val());
  var e=$(this).closest("form").find("select[name=college]");
  "1"==$(this).val()?(e.attr("disabled",!0),e.closest(".input-field").hide()):(e.attr("disabled",!1).formSelect(),e.closest(".input-field").show())
});
