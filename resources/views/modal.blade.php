<!-- Look for this line (yung nasa baba) para sa pag edit ng view: -->
  <!-- EDIT THIS INPUT TO DIV CONTAINER VIEW -->

  <!-- PDF From "View" form is carried on to the "Add" form -->

<div id="viewModal" class="modal modal-fixed-footer">
  <form name="frmAdd">
    <div class="modal-content">
      <h4>View</h4>
      <div class="row">
        @if(Auth::user()->isSuperAdmin)
          <div class="input-field col s12">
            <p class="caption">College</p>
            <select name="college">
              @foreach(\App\College::all() as $college)
                <option value="{{ $college->id }}" data-icon="{{ asset('img/logo/' . $college->logo) }}">{{ $college->description }}</option>
              @endforeach
            </select>
          </div>
        @endif
        <div class="input-field col s12">
          <p class="caption">Title</p>
          <!-- EDIT THIS INPUT TO DIV CONTAINER VIEW -->
          <input name="title" type="text" class="validate" placeholder="Enter the title" required disabled>
        </div>
        <div class="input-field col s12">
          <p class="caption">Authors<i>(To add data, press enter)</i>
          </p>
          <div class="chips chips-placeholder" data-name="authors"></div>
        </div>
        <div class="input-field col s12">
          <p class="caption">Keywords<i>(To add data, press enter)</i></p>
          <div class="chips chips-placeholder" data-name="keywords"></div>
        </div>
        <div class="input-field col s12">
          <p class="caption">Category<i>(To add data, press enter)</i></p>
          <div class="chips chips-placeholder" data-name="category"></div>
        </div>
        <div class="input-field col s12">
          <p class="caption">Publisher</p>
          <!-- EDIT THIS INPUT TO DIV CONTAINER VIEW -->
          <input name="publisher" type="text" class="validate" placeholder="Enter the publisher" disabled>
        </div>
        <div class="input-field col s12">
          <p class="caption">Proceeding Date</p>
          <!-- EDIT THIS INPUT TO DIV CONTAINER VIEW -->
          <input name="proceeding_date" type="text" class="validate" placeholder="Enter the proceeding date" disabled>
        </div>
        <div class="input-field col s12">
          <p class="caption">Presentation Date</p>
          <!-- EDIT THIS INPUT TO DIV CONTAINER VIEW -->
          <input name="presentation_date" type="text" class="validate" placeholder="Enter the presentation date" disabled>
        </div>
        <div class="input-field col s12">
          <p class="caption">Publication Date</p>
          <!-- EDIT THIS INPUT TO DIV CONTAINER VIEW -->
          <input name="publication_date" type="text" class="validate" placeholder="Enter the publication date" disabled>
        </div>
        <div class="input-field col s12">
          <p class="caption">Note</p>
          <input name="note" type="text" class="validate" placeholder="International Database/s where Journal is Indexed" disabled>
        </div>
        <div class="input-field col s12">
          <p class="caption">Conference Name</p>
          <!-- EDIT THIS INPUT TO DIV CONTAINER VIEW -->
          <input name="conference_name" type="text" class="validate" placeholder="Conference Name" disabled>
        </div>
        <div class="input-field col s12">
          <p class="caption">URL</p>
          <!-- EDIT THIS INPUT TO DIV CONTAINER VIEW -->
          <input name="url" type="text" class="validate" placeholder="Website / URL" disabled>
        </div>
        <div class="input-field col s12">
          <p class="caption">Attachments</p>
          <ul class="collection"></ul>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="modal-close waves-effect waves-green btn-flat">Close</button>
    </div>
  </form>
</div>



<div id="addModal" class="modal modal-fixed-footer">
  <form name="frmAdd">
    <div class="modal-content">
      <h4>Add</h4>
      <div class="row">
        @if(Auth::user()->isSuperAdmin)
          <div class="input-field col s8">
            <p class="caption">College</p>
            <select name="college">
              @foreach(\App\College::all() as $college)
                <option value="{{ $college->id }}" data-icon="{{ asset('img/logo/' . $college->logo) }}">{{ $college->description }}</option>
              @endforeach
            </select>
          </div>
        @endif
        <div class="input-field col s12">
          <p class="caption">Title</p>
          <input name="title" type="text" class="validate" placeholder="Enter the title" required>
        </div>
        <div class="input-field col s12">
          <p class="caption">Authors
            @if(!Auth::user()->isAdmin)
              <i>(Your name is already added)</i>
            @endif
            <i>(To add data, press enter)</i>
          </p>
          <div class="chips chips-placeholder" data-name="authors"></div>
        </div>
        <div class="input-field col s12">
          <p class="caption">Keywords <i>(To add data, press enter)</i></p>
          <div class="chips chips-placeholder" data-name="keywords"></div>
        </div>
        <div class="input-field col s12">
          <p class="caption">Category <i>(To add data, press enter)</i></p>
          <div class="chips chips-placeholder" data-name="category"></div>
        </div>
        <div class="input-field col s12">
          <p class="caption">Publisher</p>
          <input name="publisher" type="text" class="validate" placeholder="Enter the publisher">
        </div>
        <div class="input-field col s4">
          <p class="caption">Proceeding Date</p>
          <input name="proceeding_date" type="text" class="validate" placeholder="MM-DD-YYYY">
        </div>
        <div class="input-field col s4">
          <p class="caption">Presentation Date</p>
          <input name="presentation_date" type="text" class="validate" placeholder="MM-DD-YYYY">
        </div>
        <div class="input-field col s4">
          <p class="caption">Publication Date</p>
          <input name="publication_date" type="text" class="validate" placeholder="MM-DD-YYYY">
        </div>
        <div class="input-field col s12">
          <p class="caption">Note</p>
          <input name="note" type="text" class="validate" placeholder="International Database/s where Journal is Indexed">
        </div>
        <div class="input-field col s12">
          <p class="caption">Conference Name</p>
          <input name="conference_name" type="text" class="validate" placeholder="Conference Name">
        </div>
        <div class="input-field col s12">
          <p class="caption">URL</p>
          <input name="url" type="text" class="validate" placeholder="Website / URL">
        </div>
        <div class="input-field col s5">
          <p class="caption">Attachments</p>
          <ul class="collection">
            <a href="javascript:void(0)" class="btnAddFile collection-item center-align">
              + Add
            </a>
          </ul>
        </div>
        <input type="file" name="attachment_file" style="display:none">
      </div>
    </div>


    <div class="modal-footer">
      <button type="button" class="modal-close waves-effect waves-green btn-flat">Close</button>
      <button type="submit" class="waves-effect waves-green btn-flat">Add</button>
    </div>
  </form>
</div>
<div id="editModal" class="modal modal-fixed-footer">
  <form name="frmEdit">
    @method("PUT")
    <input type="hidden" name="id" disabled>
    <div class="modal-content">
      <h4>Edit</h4>
      <div class="loader-container">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div>
            <div class="gap-patch">
              <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        @if(Auth::user()->isSuperAdmin)
          <div class="input-field col s12">
            <p class="caption">College</p>
            <select name="college">
              @foreach(\App\College::all() as $college)
                <option value="{{ $college->id }}" data-icon="{{ asset('img/logo/' . $college->logo) }}">{{ $college->description }}</option>
              @endforeach
            </select>
          </div>
        @endif
        <div class="input-field col s12">
          <p class="caption">Title</p>
          <input name="title" type="text" class="validate" placeholder="Enter the title" required>
        </div>
        <div class="input-field col s12">
          <p class="caption">Authors<i>(To add data, press enter)</i></p>
          <div class="chips chips-placeholder" data-name="authors"></div>
        </div>
        <div class="input-field col s12">
          <p class="caption">Keywords<i>(To add data, press enter)</i></p>
          <div class="chips chips-placeholder" data-name="keywords"></div>
        </div>
        <div class="input-field col s12">
          <p class="caption">Category<i>(To add data, press enter)</i></p>
          <div class="chips chips-placeholder" data-name="category"></div>
        </div>
        <div class="input-field col s12">
          <p class="caption">Publisher</p>
          <input name="publisher" type="text" class="validate" placeholder="Enter the publisher">
        </div>
        <div class="input-field col s12">
          <p class="caption">Proceeding Date</p>
          <input name="proceeding_date" type="text" class="validate" placeholder="Enter the proceeding date">
        </div>
        <div class="input-field col s12">
          <p class="caption">Presentation Date</p>
          <input name="presentation_date" type="text" class="validate" placeholder="Enter the presentation date">
        </div>
        <div class="input-field col s12">
          <p class="caption">Publication Date</p>
          <input name="publication_date" type="text" class="validate" placeholder="Enter the publication date">
        </div>
        <div class="input-field col s12">
          <p class="caption">Note</p>
          <input name="note" type="text" class="validate" placeholder="International Database/s where Journal is Indexed">
        </div>
        <div class="input-field col s12">
          <p class="caption">Conference Name</p>
          <input name="conference_name" type="text" class="validate" placeholder="Conference Name">
        </div>
        <div class="input-field col s12">
          <p class="caption">URL</p>
          <input name="url" type="text" class="validate" placeholder="Website / URL">
        </div>
        <div class="input-field col s12">
          <p class="caption">Attachments</p>
          <ul class="collection">
            <a href="javascript:void(0)" class="btnAddFile collection-item center-align">
              + Add
            </a>
          </ul>
        </div>
        <input type="file" name="attachment_file" style="display:none">
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="modal-close waves-effect waves-green btn-flat">Close</button>
      <button type="submit" class="waves-effect waves-green btn-flat">Save</button>
    </div>
  </form>
</div>
<div id="changePasswordModal" class="modal modal-fixed-footer">
  <form name="frmChangePassword">
    <div class="modal-content">
      <h4>Change Password</h4>
      <div class="row">
        <div class="input-field col s12">
          <p class="caption">Old Password</p>
          <input name="old_password" type="password" class="validate" placeholder="Enter old password">
        </div>
        <div class="input-field col s12">
          <p class="caption">New Password</p>
          <input name="new_password" type="password" class="validate" placeholder="Enter new password">
        </div>
        <div class="input-field col s12">
          <p class="caption">Verify New Password</p>
          <input name="v_new_password" type="password" class="validate" placeholder="Enter new password again">
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="modal-close waves-effect waves-green btn-flat">Close</button>
      <button type="submit" class="waves-effect waves-green btn-flat">Save</button>
    </div>
  </form>
</div>
