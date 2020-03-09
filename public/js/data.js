function _toConsumableArray(e){
  if(Array.isArray(e)){
    for(var t=0,a=Array(e.length);t<e.length;t++)
      a[t]=e[t];
    return a
  }
  return Array.from(e)
}

function loadChips(){
  var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"body";
  $(e).find(".chips[data-name=authors]").chips({placeholder:"LN, FN, MI",secondaryPlaceholder:"+ Author"}),
  $(e).find(".chips[data-name=keywords]").chips({placeholder:"Enter a keyword",secondaryPlaceholder:"+ Keyword"}),
  $(e).find(".chips[data-name=category]").chips({placeholder:"Enter a category",secondaryPlaceholder:"+ category"})
}

function loadTable(){
  var e=$("input[name=filter]").val();
  getConfig(),
  $.ajax({
    url:main_url+"api/data",
    dataType:"json",
    data:{filter:e},
    success:function(t){
      try {
        dTable.clear(),
        $.each(t,function(t,a){
          a=_.mapObject(a,function(e){
            return _.escape(e)
          }),
          buttonsEnabled=!1,
          deleteEnabled=!0,
          config.isAdmin||config.isSuperAdmin||(deleteEnabled=!1),
          "all"==e&&config.isSuperAdmin?buttonsEnabled=!0:"college"==e&&config.isAdmin?buttonsEnabled=!0:"my"==e&&config.isResearcher?buttonsEnabled=deleteEnabled=1:buttonsEnabled=0,
          dTable.row.add([
            "all"==e?a.college.toUpperCase():t+1,a.title,(a.authors||"").replace(/;/g,"<br>"),
            (a.keywords||"").replace(/;/g,", "),
            (a.category||"").replace(/;/g,", "),
            a.publisher,
            a.proceeding_date,
            a.presentation_date,
            a.publication_date,
            a.note,
            a.conference_name,
            a.url,
            '\n            <button onclick="viewData('+a.id+')" class="waves-effect waves-light btn btn-flat btnView">\n              <i class="material-icons">remove_red_eye</i>\n            </button>'+(buttonsEnabled?'\n            <button onclick="editData('+a.id+')" class="waves-effect waves-light btn btn-flat btnEdit">\n              <i class="material-icons">edit</i>\n            </button>'+(deleteEnabled?'\n            <button onclick="deleteData('+a.id+')" class="waves-effect waves-light btn btn-flat btnDelete">\n              <i class="material-icons">delete</i>\n            </button>':""):"")
            ])
        }),
        dTable.draw()
      } catch (err) {
        console.log(err);
        $('.dataTables_empty').text('Something went wrong. Please refresh and try again.');
      }
    },
    error: function() {
      alert('Something went wrong. Please refresh and try again.');
    }
  })
}

function addData() {
  attachment_list = [];
  old_attachment_list = [];
  attachment_to_delete = [];
  refreshAttachmentList()
}

function viewData(e){
  var t=$("#viewModal");
  t.find(".loader-container").show(),
  t.modal("open"),
  attachment_list=[],
  $.ajax({
    url:main_url+"api/data/"+e,
    dataType:"json",
    success:function(a){
      loadChips(t),
      $("select[name=college]").val(a.college).formSelect();
      var n=M.Chips.getInstance(t.find(".chips[data-name=authors]")),
      i=M.Chips.getInstance(t.find(".chips[data-name=keywords]")),
      l=M.Chips.getInstance(t.find(".chips[data-name=category]")),
      o=(a.authors||"").split(";"),
      s=(a.keywords||"").split(";"),
      c=(a.category||"").split(";");
      $.each(o,function(e,t){
        n.addChip({tag:t})
      }),
      $.each(s,function(e,t){
        i.addChip({tag:t})
      }),
      $.each(c,function(e,t){
        l.addChip({tag:t})
      }),
      t.find("input[name=id]").val(e),
      t.find("input[name=title]").val(a.title),
      t.find("input[name=publisher]").val(a.publisher),
      t.find("input[name=proceeding_date]").val(a.proceeding_date),
      t.find("input[name=presentation_date]").val(a.presentation_date),
      t.find("input[name=publication_date]").val(a.publication_date),
      t.find("input[name=note]").val(a.note),
      t.find("input[name=conference_name]").val(a.conference_name),
      t.find("input[name=url]").val(a.url),
      t.find("select[name=college]").val(a.college_id).formSelect(),
      old_attachment_list=a.attachments.map(function(e){
        return _extends({},e,{title:a.title})
      }),
      refreshAttachmentList(!1),
      t.find("input.input").prop("disabled",!0),
      t.find(".close").hide(),
      t.find(".loader-container").fadeOut()
    },
    error: function() {
      alert('Something went wrong. Please try again later.');
      $("#viewModal").modal("close");
    }
  })
}

function editData(e){
  var t=$("#editModal");
  t.find(".loader-container").show(),
  t.modal("open"),
  attachment_to_delete=[],
  attachment_list=[],
  $.ajax({
    url:main_url+"api/data/"+e,
    dataType:"json",
    success:function(a){
      loadChips(t),
      $("select[name=college]").val(a.college).formSelect();
      var n=M.Chips.getInstance(t.find(".chips[data-name=authors]")),
      i=M.Chips.getInstance(t.find(".chips[data-name=keywords]")),
      l=M.Chips.getInstance(t.find(".chips[data-name=category]")),
      o=(a.authors||"").split(";"),
      s=(a.keywords||"").split(";"),
      c=(a.category||"").split(";");
      $.each(o,function(e,t){
        n.addChip({tag:t})
      }),
      $.each(s,function(e,t){
        i.addChip({tag:t})
      }),
      $.each(c,function(e,t){
        l.addChip({tag:t})
      }),
      t.find("input[name=id]").val(e),
      t.find("input[name=title]").val(a.title),
      t.find("input[name=publisher]").val(a.publisher),
      t.find("input[name=proceeding_date]").val(a.proceeding_date),
      t.find("input[name=presentation_date]").val(a.presentation_date),
      t.find("input[name=publication_date]").val(a.publication_date),
      t.find("input[name=note]").val(a.note),
      t.find("input[name=conference_name]").val(a.conference_name),
      t.find("input[name=url]").val(a.url),
      t.find("select[name=college]").val(a.college_id).formSelect(),
      old_attachment_list=a.attachments.map(function(e){
        return _extends({},e,{title:a.title})
      }),
      refreshAttachmentList(),
      t.find(".loader-container").fadeOut()
    },
    error: function() {
      alert('Something went wrong. Please try again later.');
      $("#editModal").modal("close");
    }
  })
}

function deleteData(e){
  confirm("Are you sure do you want to delete?")&&($(this).prop("disabled",!1),
    $.ajax({
      url:main_url+"api/data/"+e,
      type:"POST",
      data:{_method:"DELETE"},
      dataType:"json",
      success:function(e){
        e.success?(alert("Deleted Successfully!"),loadTable()):alert(e.error)
      }
    }))
}

function deleteIndex(t) {
  for(var a=0; a < attachment_list.length; a++) {
    if(attachment_list[a].name==t)
      return a
  }
}

function deleteAttachment(e,t){
  if(!confirm("Are you sure do you want delete this file?"))return!1;
  if (e == "undefined") {
    e = null
  }
  e?(attachment_to_delete.push(e),old_attachment_list=old_attachment_list.filter(function(e){return e.filename!=t})):attachment_list.splice(deleteIndex(t),1),
  console.log(attachment_list),
  refreshAttachmentList()
}

function refreshAttachmentList(){
  var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];
  $(".collection").find("li.collection-item").remove();
  var t=[].concat(_toConsumableArray(old_attachment_list),_toConsumableArray([].concat(_toConsumableArray(attachment_list))));
  t.forEach(function(t){
    var a=t.filename||t.name;
    $(".collection").prepend("<li class='collection-item row'>\n       <p class='col s10' style='margin: 0; word-break: break-word;'> "+a+"</p>\n        <div class='col s2 row' style='margin: 0'>\n			"+(e?'<a href="javascript:void(0)" onclick="return deleteAttachment(\''+t.id+"','"+a+'\')" class="secondary-content col s12" style="padding: 0"><i class="material-icons">close</i></a>':"")+(t.filename?'\n        <a href="'+main_url+"uploads/"+t.title+"/"+t.id+'" target="_blank" class="secondary-content col s12" style="padding: 0"><i class="material-icons">remove_red_eye</i></a>\n        </div>\n</li>':""))
  })
}

function isInvalidFileType(e){
  return ["pdf","jpg","jpeg","png"].indexOf(e.split(".").pop().toLowerCase())>-1
}

var _extends=Object.assign||function(e){
  for(var t=1;t<arguments.length;t++){
    var a=arguments[t];
    for(var n in a)
      Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])
  }
  return e
},
old_attachment_list=[],
attachment_list=[],
attachment_to_delete=[];

$(function(){
  getConfig(),loadDatatable({
    columnDefs:[{
      targets:[3,5,6,7,8,9,10,11],
      visible:!1
    }]
  }),
  loadChips(),loadTable(),
  $(".btnUpload").click(function(){
    $("input[name=uploadExcel]").trigger("click")
  }),
  $("input[name=uploadExcel]").change(function(){
    if(confirm("Are you sure do you want to upload?")){
      var e=new FormData;
      e.append("file",$(this).prop("files")[0]),
      $.ajax({
        url:api_url+"data/upload",
        type:"POST",
        data:e,
        dataType:"json",
        contentType:!1,
        processData:!1,
        success:function(e){
          1==e.success?(alert("Uploaded Successfully!"),loadTable()):(console.log(e),alert(e.error))
        }
      })
    }
  })
}),
// $(".generate-pdf").click(function(){
//   $("input[type=search]").val()&&$("input[name=pdf_data]").val(JSON.stringify(Object.values(dTable.rows({filter:"applied"}).data()))),
//   $("input[name=pdf_data]").closest("form").trigger("submit")
// }),
$(".generate-excel").click(function(){
  $("input[type=search]").val()&&$("input[name=excel_data]").val(JSON.stringify(Object.values(dTable.rows({filter:"applied"}).data()))),
  $("input[name=excel_data]").closest("form").trigger("submit")
}),
$("form[name=frmAdd]").submit(function(e){
  e.preventDefault();
  var t=_.pluck(M.Chips.getInstance($(this).find(".chips[data-name=authors]")).chipsData,"tag"),
  a=_.pluck(M.Chips.getInstance($(this).find(".chips[data-name=keywords]")).chipsData,"tag"),
  n=_.pluck(M.Chips.getInstance($(this).find(".chips[data-name=category]")).chipsData,"tag");
  if(!config.isAdmin&&!config.isResearcher&&0==t.length)
    return alert("Please enter an author.");
  $(this).find("input").prop("readonly",!0),
  $(this).find("button").prop("disabled",!0);
  var i=new FormData($(this)[0]);
  console.log(t);
  i.append("authors",t.join(";")),
  i.append("keywords",a.join(";")),
  i.append("category",n.join(";")),
  attachment_list.forEach(function(e){
    i.append("attachments[]",e)
  }),
  $.ajax({
    context:this,
    url:api_url+"data",
    type:"POST",
    data:i,
    dataType:"json",
    processData:!1,
    contentType:!1,
    success:function(e){
      console.log(e),
      1==e.success?(alert("Added Successfully!"),$(this).trigger("reset"),loadChips("#addModal"),$("#addModal").modal("close"),loadTable(),attachment_list=[]):(console.log(e),alert(e.error))
    }
  }).always(function(){
    $(this).find("input").prop("readonly",!1),
    $(this).find("button").prop("disabled",!1)
  })
}),
$("form[name=frmEdit]").submit(function(e){
  e.preventDefault(),
  $(this).find("input").prop("readonly",!0),$(this).find("button").prop("disabled",!0);
  var t=_.pluck(M.Chips.getInstance($(this).find(".chips[data-name=authors]")).chipsData,"tag"),
  a=_.pluck(M.Chips.getInstance($(this).find(".chips[data-name=keywords]")).chipsData,"tag"),
  n=_.pluck(M.Chips.getInstance($(this).find(".chips[data-name=category]")).chipsData,"tag"),
  i=new FormData($(this)[0]);
  i.append("authors",t.join(";")),
  i.append("keywords",a.join(";")),
  i.append("category",n.join(";")),
  attachment_list.forEach(function(e){
    i.append("attachments[]",e)
  }),
  attachment_to_delete.forEach(function(e){
    i.append("attachments_to_delete[]",e)
  }),
  $.ajax({
    context:this,
    url:api_url+"data/"+$(this).find("input[name=id]").val(),
    type:"POST",
    data:i,
    contentType:!1,
    processData:!1,
    dataType:"json",
    success:function(e){
      console.log(e.success);
      1==e.success?(old_attachment_list=[],alert("Updated Successfully!"),$("#editModal").modal("close"),$(this).trigger("reset"),loadTable()):(console.log(e),alert(e.error))
    }
  }).always(function(){
    $(this).find("input").prop("readonly",!1),
    $(this).find("button").prop("disabled",!1)
  })
}),
$(".btnAddFile").click(function(){
  $(this).closest("form").find("input[name=attachment_file]").click()
}),
$("input[name=attachment_file]").change(function(){
  var e=$(this)[0].files[0];
  if($(this).val(""),!isInvalidFileType(e.name))
    return alert("Invalid file type. Please upload a PDF or an Image.");
  attachment_list.push(e),
  refreshAttachmentList()
});
