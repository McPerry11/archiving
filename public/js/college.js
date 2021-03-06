function loadTable(){
  $.ajax({
    url:api_url+"college/",
    dataType:"json",
    success:function(e){
      dTable.clear(),
      $.each(e,function(e,t){
        t=_.mapObject(t,function(e){
          return _.escape(e)
        }),
        dTable.row.add([
          e+1,
          t.name,
          t.description,
          '\n            <img class="materialboxed" src="img/logo/'+t.logo+'" height="100px">\n          ','\n            <img class="materialboxed" src="img/'+t.background+'" height="100px">\n          ','\n            <button onclick="editData('+t.id+')" class="waves-effect waves-light btn btn-flat btnEdit">\n              <i class="material-icons">edit</i>\n            </button>\n            <button onclick="deleteData('+t.id+')" class="waves-effect waves-light btn btn-flat btnDelete">\n              <i class="material-icons">delete</i>\n            </button>\n          '
        ])
      }),
      dTable.draw(),
      $(".materialboxed").materialbox()
    }
  })
}

function editData(e){
  var t=$("#editCollegeModal");
  t.find(".loader-container").show(),
  t.modal("open"),
  $.ajax({
    url:api_url+"college/"+e,
    dataType:"json",
    success:function(e){
      t.find("input[name=id]").val(e.id),
      t.find("input[name=name]").val(e.name),
      t.find("input[name=description]").val(e.description),
      t.find(".loader-container").fadeOut()
    }
  })
}

function deleteData(e){
  confirm("Are you sure do you want to delete?")&&($(this).prop("disabled",!1),
    $.ajax({
      url:api_url+"college/"+e,
      type:"POST",
      data:{_method:"DELETE"},
      dataType:"json",
      success:function(e){
        e.success?(alert("Deleted Successfully!"),loadTable()):alert(e.error)
      }
    }))
}

$(document).ready(function(){
  loadDatatable(),loadTable()
}),
$("form[name=frmAddCollege]").submit(function(e){
  e.preventDefault(),
  $(this).find("input").prop("readonly",!0),
  $(this).find("button").prop("disabled",!0),
  $.ajax({
    context:this,
    url:api_url+"college/",
    type:"POST",
    data:new FormData($(this)[0]),
    dataType:"json",
    contentType:!1,
    processData:!1,
    success:function(e){
      console.log(e),
      1==e.success?(alert("Added Successfully!"),$(this).trigger("reset"),$("#addCollegeModal").modal("close"),loadTable()):(console.log(e),alert(e.error))
    }
  }).always(function(){
    $(this).find("input").prop("readonly",!1),
    $(this).find("button").prop("disabled",!1)
  })
}),
$("form[name=frmEditCollege]").submit(function(e){
  e.preventDefault(),
  $(this).find("input").prop("readonly",!0),
  $(this).find("button").prop("disabled",!0),
  $.ajax({
    context:this,
    url:api_url+"college/"+$(this).find("input[name=id]").val(),
    type:"POST",
    data:new FormData($(this)[0]),
    dataType:"json",
    contentType:!1,
    processData:!1,
    success:function(e){
      console.log(e),
      1==e.success?(alert("Updated Successfully!"),$("#editCollegeModal").modal("close"),$(this).trigger("reset"),loadTable()):(console.log(e),alert(e.error))
    }
  }).always(function(){
    $(this).find("input").prop("readonly",!1),
    $(this).find("button").prop("disabled",!1)
  })
});
