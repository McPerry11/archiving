<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>University Research Archiving System</title>
	@include('_styles')
	@yield('styles')
</head>
<body>
	@include('navbar')
	@yield('body')
</body>
@include('_scripts')
@yield('scripts')
</html>