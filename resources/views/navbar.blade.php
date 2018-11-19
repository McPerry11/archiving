<nav>
  <div class="nav-wrapper">
    <div class="brand-logo">
      <img src="{{ asset('public/img/logo/ue.png') }}" alt="" height="65px" style="padding:5px 5px 0">
      <img src="{{ asset('public/img/logo/' . Auth::user()->role->logo) }}" alt="" height="65px" style="padding:5px 5px 0">
    </div>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      @if(Auth::user()->role->name != "admin")
        <li><a href="{{ url('/') }}">My Researches</a></li>
      @endif
      <li><a href="{{ url('all') }}">All Researches</a></li>
      @if(Auth::user()->role->name == "admin")
        <li><a href="{{ url('accounts') }}">Accounts</a></li>
        <li><a href="{{ url('logs') }}">Logs</a></li>
      @endif
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Hi, {{ Auth::user()->first_name }} {{ Auth::user()->last_name }}<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>
<ul id="dropdown1" class="dropdown-content">
  <li><a href="#changePasswordModal" class="modal-trigger">Change Password</a></li>
  <li class="divider"></li>
  <li><a href="{{ url('logout') }}" onclick="return confirm('Are you sure do you want to logout?')">Logout</a></li>
</ul>