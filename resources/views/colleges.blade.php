@extends('layout')

@section('extra-scripts')
<script src="{{ asset('js/college.js') }}?v={{ filemtime(public_path('js/college.js')) }}"></script>
@endsection

@section('body')
@include('modal-admin')
@include('navbar')
  <div class="row">
    <div id="admin" class="col s12">
      <div class="card material-table">
        <div class="table-header">
          <span class="table-title">Colleges</span>
          <div class="actions">
            <a title="Add" href="#addCollegeModal" class="modal-trigger waves-effect btn-flat nopadding"><i class="material-icons">add</i></a>
            <a title="Search" href="#" class="search-toggle waves-effect btn-flat nopadding"><i class="material-icons">search</i></a>
          </div>
        </div>
        <table id="datatable">
          <thead>
            <tr>
              <th width="5%">ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Logo</th>
              <th>Background</th>
              <th width="5%">Action</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <img src="{{ asset('img/logo/rnd.png') }}" style="float:right" alt="" height="40px">
    </div>
  </div>
@endsection
