<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class CheckCollege
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $college)
    {
        $response = $next($request);
        if ($college == "grad" && !Auth::user()->college_id == '7') {
            return redirect('college');
        } else if ($college == "uni" && !Auth::user()->college_id != '7') {
            return redirect('grad');
        }

        return $response;
    }
}
