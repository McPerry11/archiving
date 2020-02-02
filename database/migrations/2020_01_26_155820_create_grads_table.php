<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGradsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grads', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('authors')->nullable();
            $table->string('status')->nullable();
            $table->string('authors')->nullable();
            $table->string('authors')->nullable();
            $table->string('authors')->nullable();
            $table->string('authors')->nullable();
            $table->string('authors')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grads');
    }
}
