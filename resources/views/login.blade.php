@php($login = true)
@extends('layout')

@section('body')
<div class="container">
  <div class="row">
    <div class="col s12 m6 offset-m3" style="margin-top: 18%;opacity: 0.9;">
      <div class="card">
        <form name="frmLogin">
          <div class="card-content" style="overflow:auto">
            <span class="card-title black-text"><b>Login</b></span>
            <br>
            <div class="input-field">
              <input id="username" name="username" type="text" class="validate" required autofocus>
              <label for="username">Username</label>
            </div>
            <div class="input-field">
              <input id="password" name="password" type="password" class="validate" required>
              <label for="password">Password</label>
            </div>
            <button type="submit" class="btn" style="float:right;background-color:#fc2433">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<img src="{{ asset('img/logo/ue.png') }}" style="position:absolute;top:10px;left:10px" alt="" height="80px">
<img src="{{ asset('img/logo/rnd.png') }}" style="position:absolute;right:10px;bottom:10px" alt="" height="80px">
@endsection