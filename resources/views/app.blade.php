<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
{{--    <title>Laravel Inertia Js</title>--}}
    <link href="https://unpkg.com/tailwindcss@2/dist/tailwind.min.css" rel="stylesheet">
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet"/>
    <script src="{{ mix('/js/manifest.js') }}" defer></script>
    <script src="{{ mix('/js/vendor.js') }}" defer></script>
    <script src="{{ mix('/js/app.js') }}" defer></script>
{{--    @inertiaHead--}}
</head>
<body>
    @inertia
</body>
</html>
