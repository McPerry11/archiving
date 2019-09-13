@extends('layout')

@section('extra-scripts')
<script>
loadDatatable()
</script>
@endsection

@section('body')
@include('navbar')
  <div class="row">
    <div id="admin" class="col s12">
      <div class="card material-table">
        <div class="table-header">
          <span class="table-title"><b>Logs</b></span>
          <div class="actions">
            <a title="Search" href="javascript:void(0)" class="search-toggle waves-effect btn-flat nopadding"><i class="material-icons">search</i></a>
          </div>
        </div>
        <table id="datatable" data-sortby="desc">
          <thead>
            <tr>
              <th width="5%"><b>ID</b></th>
              <th width="10%"><b>Username</b></th>
              <th width="65%"><b>Action</b></th>
              <th><b>Timestamp</b></th>
            </tr>
          </thead>
          <tbody>
            @foreach($data as $id => $row)
              <tr>
                <td>{{ $id + 1 }}</td>
                <td>{{ $row->username }}</td>
                <td>{!! $row->actionWithLink !!}</td>
                <td>{{ date("F d, Y h:i:s A", strtotime($row->created_at)) }}</td>
              </tr>
            @endforeach
          </tbody>
        </table>
      </div>
      <img src="{{ asset('img/logo/rnd.png') }}" style="position:fixed;right:10px;bottom:10px" alt="" height="30px">
    </div>
  </div>
@endsection
