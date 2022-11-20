<?php

namespace App\Http\Controllers;

use App\Models\Renderizado;
use Illuminate\Http\Request;

class RenderizadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Inertia::render('Published_main');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Renderizado  $renderizado
     * @return \Illuminate\Http\Response
     */
    public function show(Renderizado $renderizado)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Renderizado  $renderizado
     * @return \Illuminate\Http\Response
     */
    public function edit(Renderizado $renderizado)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Renderizado  $renderizado
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Renderizado $renderizado)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Renderizado  $renderizado
     * @return \Illuminate\Http\Response
     */
    public function destroy(Renderizado $renderizado)
    {
        //
    }
}
