@extends('layout')

@section('extra-scripts')
<script src="{{ asset('js/account.js') }}"></script>
@endsection

@section('body')
@include('modal-admin')
@include('navbar')
<div class="row">
  <div id="admin" class="col s12">
    <div class="card material-table">
      <div class="table-header">
        <span class="table-title"><b>Accounts</b></span>
        <div class="actions">
          <a title="Add" href="#addAccountModal" class="modal-trigger waves-effect btn-flat nopadding"><i class="material-icons">add</i></a>
          <a title="Search" href="javascript:void(0)" class="search-toggle waves-effect btn-flat nopadding"><i class="material-icons">search</i></a>
        </div>
      </div>
      <table id="datatable">
        <thead>
          <tr>
            <th width="5%"><b>ID</b></th>
            <th><b>Username</b></th>
            <th><b>Name</b></th>
            <th><b>Type</b></th>
            <th><b>College</b></th>
            <th width="6%"><b>Action</b></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    <img src="{{ asset('img/logo/rnd.png') }}" style="position:fixed;right:10px;bottom:10px" alt="" height="30px">
  </div>
</div>
@endsection
