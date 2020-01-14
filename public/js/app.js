function loadDatatable(){
  var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},
  t=$("input[name=search]").val();
  window.dTable=$("#datatable").DataTable(_extends({
    oLanguage:{
      sStripClasses:"",
      sSearch:"",
      sSearchPlaceholder:"Enter Keywords Here",
      sInfo:"_START_ -_END_ of _TOTAL_",
      sLengthMenu:'<span>Rows per page:</span><select class="browser-default"><option value="10">10</option><option value="20">20</option><option value="30">30</option><option value="40">40</option><option value="50">50</option><option value="-1">All</option></select></div>'
    },
    bAutoWidth:!1,
    search:{smart:!1},
    oSearch:{sSearch:t}
  },e)),
  dTable.order([0,$("#datatable").data("sortby")||"asc"]).draw()
}

function getConfig(){
  $.getJSON(api_url+"user/config",null,function(e){window.config=e})
}

var _extends=Object.assign||function(e){
  for(var t=1;t<arguments.length;t++){
    var a=arguments[t];
    for(var n in a)
      Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])
  }
  return e
},
_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
  return typeof e
}:function(e){
  return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e
};
!function(e,t,a){
  var n=function(e,a){
    "use strict";
    e(".search-toggle").click(function(){
      "none"==e(".hiddensearch").css("display")?e(".hiddensearch").slideDown(function(){
        e("input[type=search]").focus()
      }):e(".hiddensearch").slideUp()
    }),
    e.extend(!0,a.defaults,{dom:"<'hiddensearch'f'>tr<'table-footer'lip'>",renderer:"material"}),
    e.extend(a.ext.classes,{sWrapper:"dataTables_wrapper",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm"}),
    a.ext.renderer.pageButton.material=function(n,o,i,r,s,d){
      var l,c,u,p=new a.Api(n),f=n.oClasses,b=n.oLanguage.oPaginate,h=0;
      try{
        u=e(t.activeElement).data("dt-idx")
      }
      catch(e){}!function t(a,o){
        var r,u,m,y,g=function(t){
          t.preventDefault(),e(t.currentTarget).hasClass("disabled")||p.page(t.data.action).draw(!1)
        };
        for(r=0,u=o.length;r<u;r++)
          if(y=o[r],e.isArray(y))
            t(a,y);
          else{
            switch(l="",c="",y){
              case"first":
              l=b.sFirst,c=y+(s>0?"":" disabled");
              break;
              case"previous":
              l='<i class="material-icons">chevron_left</i>',c=y+(s>0?"":" disabled");
              break;
              case"next":
              l='<i class="material-icons">chevron_right</i>',c=y+(s<d-1?"":" disabled");
              break;
              case"last":
              l=b.sLast,c=y+(s<d-1?"":" disabled")
            }
            l&&(m=e("<li>",{class:f.sPageButton+" "+c,id:0===i&&"string"==typeof y?n.sTableId+"_"+y:null}).append(e("<a>",{href:"#","aria-controls":n.sTableId,"data-dt-idx":h,tabindex:n.iTabIndex}).html(l)).appendTo(a),n.oApi._fnBindAction(m,{action:y},g),h++)
          }
        }
        (e(o).empty().html('<ul class="material-pagination"/>').children("ul"),r),u&&e(o).find("[data-dt-idx="+u+"]").focus()
      },
      a.TableTools&&(e.extend(!0,a.TableTools.classes,{
        container:"DTTT btn-group",
        buttons:{normal:"btn btn-default",disabled:"disabled"},
        collection:{container:"DTTT_dropdown dropdown-menu",buttons:{normal:"",disabled:"disabled"}},
        print:{info:"DTTT_print_info"},
        select:{row:"active"}
      }),
      e.extend(!0,a.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}}))
    };
    "function"==typeof define&&define.amd?define(["jquery","datatables"],n):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?n(require("jquery"),require("datatables")):jQuery&&n(jQuery,jQuery.fn.dataTable)
  }
  (window,document);
  var main_url=$("base").attr("href"),api_url=$("base").attr("href")+"api/";
  $(document).ready(function(){
    $.ajaxSetup({
      headers:{"X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}
    }),
    $(".modal").modal({
      endingTop:"5%",dismissible:!1
    }),
    $("select").formSelect(),
    $(".datepicker").datepicker({autoClose:!0,container:"body",format:"mmmm dd, yyyy"}),
    $(".dropdown-trigger").dropdown({coverTrigger:!1}),$(".sidenav").sidenav()
  }),
  $("form[name=frmLogin]").submit(function(e){
    e.preventDefault(),
    $(this).find("input").prop("readonly",!0),
    $(this).find("button[type=submit]").prop("disabled",!0),
    $.ajax({
      context:this,
      type:"POST",
      url:main_url+"login",
      data:$(this).serialize(),
      dataType:"json"
    }).done(function(e){
      e.success?e.college==7?location.href="./grad/":location.href="./":alert(e.error)
    }).always(function(){
      $(this).find("input").prop("readonly",!1),
      $(this).find("button[type=submit]").prop("disabled",!1)
    })
  }),
  $("form[name=frmChangePassword]").submit(function(e){
    if(e.preventDefault(),$(this).find("input[name=new_password]").val()!=$(this).find("input[name=v_new_password]").val())
      return alert("The new password confirmation doesn't match");
    $(this).find("button").prop("disabled",!0),
    $.ajax({
      context:this,
      type:"POST",
      url:api_url+"user/changepassword",
      data:$(this).serialize(),
      dataType:"json"
    }).done(function(e){
      e.success?(alert("Password changed successfully!"),$(this).trigger("reset"),$("#changePasswordModal").modal("close")):alert(e.error)
    }).always(function(){
      $(this).find("button").prop("disabled",!1)
    })
  });
