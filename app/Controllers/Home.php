<?php

namespace App\Controllers;
use App\Models\GamesModel;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\RequestInterface;

class Home extends ResourceController
{
	public function index()
	{
		return view('home');
	}	
}
