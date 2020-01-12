<?php

use App\College;
use App\User;
use Illuminate\Database\Seeder;

class GradSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
  	$college = ['name' => 'grad', 'description' => 'Graduate School', 'logo' => 'grad.png', 'background' => 'background.jpg'];
  	$users = [
  		['username' => 'grad-admin', 'password' => '1234', 'role_id' => 2, 'college_id' => 7, 'first_name' => 'grad', 'middle_initial' => '', 'last_name' => 'admin'],
  		['username' => 'grad', 'password' => '1234', 'role_id' => 3, 'college_id' => 7, 'first_name' => 'grad', 'middle_initial' => '', 'last_name' => ''],
  		['username' => 'grad-guest', 'password' => '1234', 'role_id' => 4, 'college_id' => 7, 'first_name' => 'grad', 'middle_initial' => '', 'last_name' => 'guest'],
  	];

  	College::create($college);
  	foreach($users as $user) {
  		User::create($user);
  	}
  }
}
