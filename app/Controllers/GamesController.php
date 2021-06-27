<?php

namespace App\Controllers;
use App\Models\GamesModel;
use CodeIgniter\RESTful\ResourceController;

class GamesController extends ResourceController
{
    protected $format    = 'json';
	protected $GamesModel = 'App\Models\GamesModel';
	public function __construct()
    {
        $this->gamesModel = new GamesModel();
    }

	public function index()
	{
		header("Access-Control-Allow-Origin: *");
		$data = json_decode(json_encode($this->gamesModel->getGames(),true));
		return $this->respondCreated($data, 200);
	}

	
}
