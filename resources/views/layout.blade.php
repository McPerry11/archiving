<!DOCTYPE html>
<html lang="en">
<head>
  <base href="{{ url('/') . '/' }}">
  <meta charset="UTF-8">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <link rel="shortcut icon" href="{{ asset('img/logo/ue.png') }}">
  <link rel="stylesheet" href="{{ asset('css/packages.css') }}">
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <title>University Research Archiving System</title>
</head>
<body class="{{ isset($login) ? "login" : "" }}" style="{{ Auth::check() && !Auth::user()->isSuperAdmin ? "background-image: url(".asset('img/' . Auth::user()->college->background).")" : "" }}">
  @yield("body")
  <script src="{{ asset('js/packages.js') }}"></script>
  <script src="{{ asset('js/app.js') }}"></script>
  @yield("extra-scripts")
</body>
</html>
