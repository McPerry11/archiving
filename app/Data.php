<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Data extends Model {
  use SoftDeletes;

  /**
   * @var array
   */
  protected $dates = ['deleted_at'];

  /**
   * @var array
   */
  protected $fillable = [
    'role_id',
    'title',
    'authors',
    'keywords',
    'category',
    'publisher',
    'proceeding_date',
    'presentation_date',
    'publication_date',
    'note'
  ];

  /**
   * @param $name
   */
  public function getIsResearchOwnerAttribute() {
    return count($this->where([
      ['authors', 'like', '%' . \Auth::user()->name . '%']
    ])->get()) > 0;
  }

  /**
   * @return mixed
   */
  public function college() {
    return $this->belongsTo('App\College');
  }

  /**
   * @return mixed
   */
  public function attachments() {
    return $this->hasMany("App\Attachment");
  }
}
