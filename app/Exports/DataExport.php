<?php

namespace App\Exports;

use Carbon\Carbon;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;

class DataExport implements FromView, ShouldAutoSize {
  /**
   * @param $data
   */
  public function __construct($data) {
    $this->data = $data;
  }

  public function view(): View {
    return view('excel', [
      'data' => $this->data,
      'timestamp' => Carbon::now('+8:00'),
    ]);
  }
}
