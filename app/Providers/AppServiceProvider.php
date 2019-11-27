<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider {
  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot() {
    Schema::defaultStringLength(191);
    $whitelist = ['127.0.0.1', '::1'];

    if (isset($_SERVER['REMOTE_ADDR']) && !in_array($_SERVER['REMOTE_ADDR'], $whitelist)) {
      URL::forceScheme('https');
    }
  }

  /**
   * Register any application services.
   *
   * @return void
   */
  public function register() {
    //
  }
}
