<?php 
namespace App\Models;
use CodeIgniter\Model;
 
class GamesModel extends Model {
 
    protected $table      = 'data_game';
    protected $primaryKey = 'id';
    protected $validationRules    = [];
    protected $validationMessages = [];
    protected $skipValidation     = false;
    public function getGames($id = false)
    {
        if($id == false){
            return $this->findAll();
        }
        return $this->where(['id' => $id])->first();
    }
     
}