<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up() {
    Schema::create('data', function (Blueprint $table) {
      $table->increments('id');
      $table->text('title');
      $table->text('authors')->nullable();
      $table->text('keywords')->nullable();
      $table->string('category')->nullable();
      $table->string('publisher')->nullable();
      $table->string('proceeding_date')->nullable();
      $table->string('presentation_date')->nullable();
      $table->string('publication_date')->nullable();
      $table->string('file_name')->nullable();
      $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
      $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down() {
    Schema::dropIfExists('data');
  }
}
